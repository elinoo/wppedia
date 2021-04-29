<?php

/**
 * Admin View
 * 
 * @since 1.1.0
 */

namespace bf\wpPedia;

// Make sure this file runs only from within WordPress.
defined( 'ABSPATH' ) or die();

class options {

	/**
	 * Private variables
	 */
	private static $pro_feature_className = 'wppedia-pro-feature';
	private $wp_option_fields;

  /**
   * Static variable for instanciation
   */
	protected static $instance = null;

  /**
   * Get current Instance
   */
  public static function getInstance() {

    if ( null === self::$instance ) {
      self::$instance = new self;
    }
    return self::$instance;

  }

  protected function __clone() {}

  protected function __construct() {

		// Main Plugin Settings
		add_action( 'admin_menu', [ $this, 'settings_page' ] );
		add_action( 'admin_init', [ $this, 'settings_init' ] );

		// Custom Permalinks Section
		add_action( 'admin_init', [ $this, 'wppedia_permalink_settings_save' ], 999999 );

		// Set flush rewrite rules flag for some options
		add_action( 'update_option_wppedia_frontpage', [ $this, 'set_flush_rewrite_rules_flag' ], 10, 2 );
		
		// Admin notices
		add_action( 'admin_notices', [ $this, 'frontpage_slug_not_matching_permalink_settings_notice' ] );

	}
	
	function settings_page() {
		add_submenu_page( 
			'edit.php?post_type=' . \wppedia_get_post_type(), 
			'WPPedia Settings',
			'WPPedia Settings', 
			'manage_options', 
			'wppedia_settings_general', 
			[ $this, 'settings_cb' ],
			null
		);
	}

	function settings_cb() { ?>
		<div class="wrap">
			<div class="wppedia-layout-header">
				<?php do_action('wppedia_admin_settings_page_header_content'); ?>
			</div>

			<div class="wppedia-layout-wrap">

				<h1 class="screen-reader-text"><?php echo _x('WPPedia Settings', 'options', 'wppedia'); ?></h1>
				<?php settings_errors(); ?>

				<div class="wppedia-layout-flex-container">
					<div class="wppedia-layout-content">
						<form method="post" action="options.php">
							<?php settings_fields( 'wppedia_settings_general' ); ?>
							<?php $this->do_settings_sections_tabbed( 'wppedia_settings_general', true ); ?>
							<?php submit_button(); ?>
						</form>
					</div>

					<div class="wppedia-layout-sidebar">
						<div class="wppedia-sidebar-widget">
							<img src="<?php echo wpPediaPluginUrl; ?>assets/img/WPPedia-pro-teaser.png" width="200" />
						</div>
					</div>
				</div>

			</div>

		</div>
	<?php }

	function settings_init() {

		/**
		 * General Settings
		 */

		// Settings section: Glossary front page
		add_settings_section( 
			'wppedia_settings_page', 
			_x('Page Settings', 'options', 'wppedia'), 
			[ $this, 'settings_section_callback' ], 
			'wppedia_settings_general' 
		);

		// Settings section: Crosslinking
		add_settings_section(
			'wppedia_settings_crosslinks',
			_x('Crosslinking', 'options', 'wppedia'),
			[ $this, 'settings_section_callback' ],
			'wppedia_settings_general'
		);

		/**
		 * Permalink Settings
		 */

		// Settings Section: Permalinks
		add_settings_section(
			'wppedia_settings_permalink',
			_x( 'WPPedia Permalinks', 'options', 'wppedia' ),
			[ $this, 'settings_section_callback' ],
			'permalink'
		);

		$switch_className = 'wppedia-switch-button';

		$this->wp_option_fields = [
			/**
			 * Page settings
			 */

			// WPPedia frontpage
			[
				'id'								=> 'wppedia_front_page_id',
				'label' 						=> _x('Glossary frontpage', 'options', 'wppedia'),
				'type' 							=> 'select',
				'options'						=> $this->dropdown_pages(true),
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general',
			],
			// Section title: Archive settings
			[
				'id'								=> '__title_archive_settings',
				'label' 						=> _x('Archive settings ', 'options', 'wppedia'),
				'type' 							=> 'title',
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general',
				'register_setting'	=> false
			],
			// Use WPPedia templates in archives
			[
				'id'								=> 'wppedia_archive_use_templates',
				'label' 						=> _x('use WPPedia Templates', 'options', 'wppedia'),
				'type' 							=> 'checkbox',
				'class'							=> $switch_className,
				'desc' 							=> _x('If disabled WPPedia the Layout and content of WPPedia\'s Archive will be defined by your themes templates. Attention: most WPPedia template filters and actions will stop working on Archive pages. This option might help if you encounter any incompatibilities between your theme and WPPedia\'s default templates.', 'options', 'wppedia'),
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general'
			],
			// Show navigation in archives
			[
				'id'								=> 'wppedia_archive_show_navigation',
				'label' 						=> _x('Show navigation', 'options', 'wppedia'),
				'type' 							=> 'checkbox',
				'class'							=> $switch_className,
				'desc' 							=> _x('Show or hide WPPedia\'s navigation on archive pages.', 'options', 'wppedia'),
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general'
			],
			// Show searchbar in archives
			[
				'id'								=> 'wppedia_archive_show_searchbar',
				'label' 						=> _x('Show searchbar', 'options', 'wppedia'),
				'type' 							=> 'checkbox',
				'class'							=> $switch_className,
				'desc' 							=> _x('Show or hide WPPedia\'s searchbar on archive pages.', 'options', 'wppedia'),
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general'
			],
			// Default posts_per_page
			[
				'id'								=> 'wppedia_posts_per_page',
				'label' 						=> _x('Posts per page', 'options', 'wppedia'),
				'type' 							=> 'number',
				'desc' 							=> _x('Manage how much posts should be available per page at a glossary archive', 'options', 'wppedia'),
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general'
			],
			// Section title: Singular article settings
			[
				'id'								=> '__title_singular_settings',
				'label' 						=> _x('Single article settings ', 'options', 'wppedia'),
				'type' 							=> 'title',
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general',
				'register_setting'	=> false
			],
			// Use WPPedia templates in single articles
			[
				'id'								=> 'wppedia_singular_use_templates',
				'label' 						=> _x('use WPPedia Templates', 'options', 'wppedia'),
				'type' 							=> 'checkbox',
				'class'							=> $switch_className,
				'desc' 							=> _x('If disabled WPPedia the Layout and content of WPPedia\'s Single pages will be defined by your themes templates. Attention: most WPPedia template filters and actions will stop working on Singular pages. This option might help if you encounter any incompatibilities between your theme and WPPedia\'s default templates.', 'options', 'wppedia'),
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general'
			],
			// Show navigation in single articles
			[
				'id'								=> 'wppedia_singular_show_navigation',
				'label' 						=> _x('Show navigation', 'options', 'wppedia'),
				'type' 							=> 'checkbox',
				'class'							=> $switch_className,
				'desc' 							=> _x('Show or hide WPPedia\'s navigation on single pages.', 'options', 'wppedia'),
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general'
			],
			// Show searchbar in single articles
			[
				'id'								=> 'wppedia_singular_show_searchbar',
				'label' 						=> _x('Show searchbar', 'options', 'wppedia'),
				'type' 							=> 'checkbox',
				'class'							=> $switch_className,
				'desc' 							=> _x('Show or hide WPPedia\'s searchbar on single pages.', 'options', 'wppedia'),
				'settings_section' 	=> 'wppedia_settings_page',
				'settings_page' 		=> 'wppedia_settings_general'
			],

			/**
			 * Crosslink settings
			 */

			// Activate crosslinking
			[
				'id'								=> 'wppedia_feature_crosslinks',
				'label' 						=> _x( 'Activate Crosslinking', 'options', 'wppedia' ),
				'type' 							=> 'checkbox',
				'class'							=> $switch_className,
				'desc' 							=> _x( 'Allow WPPedia to automatically generate links to other articles if their name was found on a glossary term.', 'options', 'wppedia' ),
				'settings_section' 	=> 'wppedia_settings_crosslinks',
				'settings_page' 		=> 'wppedia_settings_general'
			],
			// Prefer single words for crosslinks
			[
				'id'								=> 'wppedia_crosslinks_prefer_single_words',
				'label' 						=> _x( 'Prefer single words', 'options', 'wppedia' ),
				'type' 							=> 'checkbox',
				'class'							=> $switch_className,
				'desc' 							=> _x( 'Enabling this option will change the default behaviour of crosslinking and WPPedia tries to link single words instead of multiple if possible. e.g. if there is a post "Lorem" and a post "Lorem Ipsum", the plugin will link only "Lorem" now if "Lorem Ipsum" was found in the content.', 'options', 'wppedia' ),
				'settings_section' 	=> 'wppedia_settings_crosslinks',
				'settings_page' 		=> 'wppedia_settings_general'
			],
			// Crosslink posttypes
			[
				'id'								=> 'wppedia_crosslinks_posttypes',
				'label' 						=> _x( 'Create crosslinks to post types', 'options', 'wppedia' ),
				'type' 							=> 'checkbox-group',
				'options' 					=> $this->get_public_posttypes(),
				'class'							=> self::$pro_feature_className,
				'settings_section' 	=> 'wppedia_settings_crosslinks',
				'settings_page' 		=> 'wppedia_settings_general',
				'register_setting'	=> false
			],
			// Crosslink index
			[
				'id'								=> 'wppedia_crosslinks_index',
				'label' 						=> _x('Crosslink Index', 'options', 'wppedia'),
				'type' 							=> 'checkbox',
				'class'							=> self::$pro_feature_className . ' ' . $switch_className,
				'desc' 							=> _x('If enabled WPPedia will create automatic indexes with all links created for each post. This ensures a significant faster loading time!', 'options', 'wppedia'),
				'settings_section' 	=> 'wppedia_settings_crosslinks',
				'settings_page' 		=> 'wppedia_settings_general',
				'register_setting'	=> false
			],

			/**
			 * Permalink settings
			 */

			// Glossary permalink base setting 
			[
				'id'								=> 'wppedia_permalink_base',
				'label' 						=> _x('WPPedia base', 'options', 'wppedia'),
				'type' 							=> 'text',
				'settings_section' 	=> 'wppedia_settings_permalink',
				'settings_page' 		=> 'permalink',
				'register_setting' 	=> [ $this, 'wppedia_permalink_part_sanitize' ]
			],
			[
				'id'								=> 'wppedia_permalink_use_initial_character',
				'label' 						=> _x('use initial character in URL', 'options', 'wppedia'),
				'type' 							=> 'checkbox',
				'class'							=> self::$pro_feature_className . ' ' . $switch_className,
				'settings_section' 	=> 'wppedia_settings_permalink',
				'settings_page' 		=> 'permalink',
				'register_setting'	=> false
			]
		];

		foreach ($this->wp_option_fields as $opt) {
			add_settings_field( 
				$opt['id'], 
				$opt['label'],
				[ $this, 'field' ],
				$opt['settings_page'],
				$opt['settings_section'],
				[
					// General field data
					'type' 					=> (isset($opt['type'])) ? $opt['type'] : 'text',
					'id' 						=> $opt['id'],
					'label'					=> $opt['label'],
					'class'					=> (isset($opt['class'])) ? $opt['class'] : null,
					'desc'					=> (isset($opt['desc'])) ? $opt['desc'] : null,
					'default'				=> (isset($opt['default'])) ? $opt['default'] : null,
					// Options field data
					'options' 			=> (isset($opt['options'])) ? $opt['options'] : null,
					// Arbitrary title field data
					'heading_level' => (isset($opt['heading_level'])) ? $opt['heading_level'] : 'h2',
				]
			);

			if (!isset($opt['register_setting']) || false !== $opt['register_setting']) {
				register_setting(
					$opt['settings_page'], 
					$opt['id'],
					(isset($opt['register_setting']) && is_array($opt['register_setting'])) ? $opt['register_setting'] : []
				);
			}
			
		}

	}

	/**
	 * Default settings section callback
	 * show text and other content right before the 
	 * settings section
	 * 
	 * @since 1.1.0
	 */
	function settings_section_callback($section) {
		$output = false;
		switch ($section['id']) {
			case 'wppedia_settings_page':
				$output = _x( 'Setup WPPedia pages.', 'options', 'wppedia' );
				break;
			case 'wppedia_settings_crosslinks':
				$output = _x( 'Modify WPPedia crosslink module settings.', 'options', 'wppedia' );
				break;
			case 'wppedia_settings_permalink':
				$output = _x( 'If you like, you may enter custom structures for your WPPedia URLs here.', 'options', 'wppedia' );
			default:
				break;
		}
		echo wpautop($output);
		echo '<hr />';
	}

	public function field( $field ) {
		switch ( $field['type'] ) {
			case 'number':
			case 'date':
				$this->input_minmax( $field );
				break;
			case 'textarea':
				$this->textarea( $field );
				break;
			case 'select':
				$this->select( $field );
				break;
			case 'checkbox':
				$this->checkbox( $field );
				break;
			case 'checkbox-group':
				$this->checkbox_group( $field );
				break;
			case 'title':
				$this->title( $field );
				break;
			default:
				$this->input( $field );
		}

		// Show field description
		if (isset($field['desc']) && '' !== $field['desc']) {
			$this->display_field_description($field['desc']);
		}
	}

	public function input( $field ) {
		printf(
			'<input class="regular-text %s" id="%s" name="%s" %s type="%s" value="%s" %s>',
			isset( $field['class'] ) ? $field['class'] : '',
			$field['id'], $field['id'],
			isset( $field['pattern'] ) ? "pattern='{$field['pattern']}'" : '',
			$field['type'],
			$this->value( $field ),
			$this->restrict_pro($field)
		);
	}

	public function input_minmax( $field ) {
		printf(
			'<input class="regular-text %s" id="%s" %s %s name="%s" %s type="%s" value="%s" %s>',
			isset( $field['class'] ) ? $field['class'] : '',
			$field['id'],
			isset( $field['max'] ) ? "max='{$field['max']}'" : '',
			isset( $field['min'] ) ? "min='{$field['min']}'" : '',
			$field['id'],
			isset( $field['step'] ) ? "step='{$field['step']}'" : '',
			$field['type'],
			$this->value( $field ),
			$this->restrict_pro($field)
		);
	}

	public function textarea( $field ) {
		printf(
			'<textarea class="regular-text %s" id="%s" name="%s" rows="%d" %s>%s</textarea>',
			isset( $field['class'] ) ? $field['class'] : '',
			$field['id'], $field['id'],
			isset( $field['rows'] ) ? $field['rows'] : 4,
			$this->restrict_pro($field),
			$this->value( $field )
		);
	}

	public function select( $field ) {
		printf(
			'<select id="%s" name="%s" %s %s>%s</select>',
			$field['id'], $field['id'],
			($field['class'] && '' !== trim($field['class'])) ? ' class="' . $field['class'] . '"' : "",
			$this->restrict_pro($field),
			$this->select_options( $field )
		);
	}

	public function select_selected( $field, $current ) {
		$value = $this->value( $field );
		if ( strval($value) === strval($current) ) {
			return 'selected';
		}
		return '';
	}

	public function select_options( $field ) {
		$output = [];
		foreach ( $field['options'] as $option => $label ) {
			$output[] = sprintf(
				'<option %s value="%s"> %s</option>',
				$this->select_selected( $field, $option ),
				$option, $label
			);
		}
		return implode( '<br>', $output );
	}

	public function checkbox( $field ) {
		printf(
			'<input %s %s id="%s" name="%s" type="checkbox" value="1" %s>',
			($field['class'] && '' !== trim($field['class'])) ? ' class="' . $field['class'] . '"' : "",
			checked(get_option($field['id'], false), true, false),
			$field['id'], $field['id'],
			$this->restrict_pro($field)
		);
	}

	public function checkbox_group( $field ) {
		foreach ( $field['options'] as $option => $label ) {
			$id = $field['id'] . '[' . $option . ']';
			echo '<div class="wppedia-checkbox-group-item">';
			$this->checkbox( array_merge($field, ['id' => $id]) );
			echo '<label for="' . $id . '">' . $label . '</label>';
			echo '</div>';
		}
	}

	public function title( $field ) {
		$allowed_h_tags = [
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6'
		];

		$heading_lvl = (!isset($field['heading_level']) || !in_array($field['heading_level'], $allowed_h_tags)) ? 'h2' : $field['heading_level'];

		printf(
			'<%s>%s</%s>',
			$heading_lvl,
			$field['label'],
			$heading_lvl
		);
		echo '<hr>';
	}

	public function value( $field ) {
		if (get_option($field['id'], false)) {
			$value = get_option($field['id']);
		} else if ( isset( $field['default'] ) ) {
			$value = $field['default'];
		} else {
			return '';
		}
		return str_replace( '\u0027', "'", $value );
	}

	/**
	 * Display an options description
	 * 
	 * @since 1.1.0
	 */
	public function display_field_description($desc) {
		if (is_callable($desc)) {
			$desc = call_user_func($desc);
		}

		if (!is_string($desc)) {
			return;
		}

		echo '<div class="wppedia-option-description">';
		echo $desc;
		echo '</div>';
	}

	/**
	 * Return disabled attribute for pro features
	 * 
	 * @param bool $disable
	 * 
	 * @since 1.1.0
	 */
	public function restrict_pro($field) {
		if (isset($field['class']) && false !== strpos($field['class'], self::$pro_feature_className)) {
			return ' disabled="disabled"';
		}
		return '';
	}

	/**
	 * Custom implementation of do_settings_sections for usage
	 * with tabs
	 * 
	 * @see https://developer.wordpress.org/reference/functions/do_settings_sections/
	 * 
	 * @since 1.0.0
	 */
	private function do_settings_sections_tabbed( $page, bool $vertical = false ) {
		global $wp_settings_sections, $wp_settings_fields;

		if ( ! isset( $wp_settings_sections[ $page ] ) ) {
			return;
		}
		
		// Enqueue required scripts
		wp_enqueue_script("jquery");
		wp_enqueue_script("jquery-ui-core");
		wp_enqueue_script("jquery-ui-tabs");
		wp_add_inline_script( 
			'jquery-ui-tabs',
			'jQuery("document").ready(function($) {
				var wppedia_tabs = $(".wppedia-settings-tabs");
				var wppedia_tabs_anchor = wppedia_tabs.find(".wppedia-settings-tabs-wrapper > li > a");

				wppedia_tabs.tabs();

				wppedia_tabs_anchor.on("click", function(e) {
					e.preventDefault();
					if(history.pushState) {
						history.pushState(null, null, this.href);
					} else {
						location.hash = this.href;
					}
				});
			});'
		);

		echo '<div class="wppedia-settings-tabs';
		if ($vertical) {
			echo ' ui-tabs-vertical';
		}
		echo '">';

		// Build Tabs HTML
		echo '<ul class="wppedia-settings-tabs-wrapper">';
		foreach ( (array) $wp_settings_sections[ $page ] as $section ) {

			echo '<li class="wppedia-settings-tab">';
			echo '<a href="#settings_tab_' . $section['id'] . '">' . $section['title'] . '</a>';
			echo '</li>';

		}
		echo '</ul>';

		// Build Tab content HTML
		foreach ( (array) $wp_settings_sections[ $page ] as $section ) {
			
			echo '<div class="wppedia-settings-tab-content" id="settings_tab_' . $section['id'] . '">';
			
			if ( $section['title'] ) {
				echo "<h2>{$section['title']}</h2>\n";
			}

			if ( $section['callback'] ) {
				call_user_func( $section['callback'], $section );
			}

			if ( ! isset( $wp_settings_fields ) || ! isset( $wp_settings_fields[ $page ] ) || ! isset( $wp_settings_fields[ $page ][ $section['id'] ] ) ) {
				continue;
			}

			echo '<table class="form-table" role="presentation">';
			$this->do_settings_fields( $page, $section['id'] );
			echo '</table>';
				
			echo '</div>';
			
		}

		echo '</div>';

	}

	/**
	 * Custom implementation of do_settings_sections for usage
	 * with tabs
	 * 
	 * @see https://developer.wordpress.org/reference/functions/do_settings_sections/
	 * 
	 * @since 1.1.0
	 */
	private function do_settings_fields( $page, $section ) {
	  global $wp_settings_fields;
	
		if ( ! isset( $wp_settings_fields[ $page ][ $section ] ) ) {
			return;
		}
	
	  foreach ( (array) $wp_settings_fields[ $page ][ $section ] as $field ) {

			$single_column = false;
			$tdColspan = '';
			if (isset($field['args']['type']) && $field['args']['type'] === 'title') {
				$single_column = true;
				$tdColspan = ' colspan="2"';
			}

			$class = '';

			if ( ! empty( $field['args']['class'] ) ) {
				$class = ' class="' . esc_attr( $field['args']['class'] ) . '"';
			}

			echo "<tr{$class}>";

			if (!$single_column) {
				if ( ! empty( $field['args']['label_for'] ) ) {
					echo '<th scope="row"><label for="' . esc_attr( $field['args']['label_for'] ) . '">' . $field['title'] . '</label></th>';
				} else {
					echo '<th scope="row">' . $field['title'] . '</th>';
				}
			}

			echo "<td{$tdColspan}>";
			call_user_func( $field['callback'], $field['args'] );
			echo '</td>';
			echo '</tr>';
	  }
	}

	/**
	 * Custom options Callback for selecting Pages
	 * 
	 * @since 1.0.0
	 */
	function dropdown_pages(bool $add_option_none = false) {

		$options = [];
		$pages = get_pages();

		if ($add_option_none) {
			$options[''] = '-';
		}
	
		foreach ( $pages as $page ) {
			$options[$page->ID] = get_the_title( $page->ID );
		}

		return $options;

	}

	/**
	 * Custom options Callback to get all public posttypes
	 * 
	 * @since 1.0.0
	 */
	function get_public_posttypes() {

		$return_arr = [];
		$post_types = get_post_types( [
			'public' => true,
		] );

		foreach ( $post_types as $pt ) {
			$obj = get_post_type_object( $pt );
			$return_arr[$pt] = $obj->labels->name;
		}

		return $return_arr;

	}

	/**
	 * Set a flag for flushing rewrite rules on the next
	 * pageload
	 * 
	 * @since 1.0.0
	 */
	function set_flush_rewrite_rules_flag($old_value, $value) {
		if ( $old_value !== $value && ! get_option( 'wppedia_flush_rewrite_rules_flag' ) ) {
			add_option( 'wppedia_flush_rewrite_rules_flag', true );
		}
	}

	/**
	 * Add a custom options section to the permalinks admin screen
	 * 
	 * @uses add_settings_section()
	 * 
	 * @since 1.1.0
	 */
	function wppedia_permalink_settings_save() {

		// Save options to database
		if ( isset( $_POST['wppedia_permalink_base'] ) || isset( $_POST['wppedia_permalink_use_initial_character'] ) ) {

			check_admin_referer('update-permalink');

			if ( !current_user_can('manage_options') )
				wp_die(__('Cheatin&#8217; uh?'));

			if ( isset( $_POST['wppedia_permalink_base'] ) ) {
				$sanitized_permalink_base = $this->wppedia_permalink_part_sanitize($_POST['wppedia_permalink_base']);
				if ('' !== $sanitized_permalink_base) {
					update_option( 'wppedia_permalink_base', $sanitized_permalink_base );
				} else {
					delete_option( 'wppedia_permalink_base' );
				}
			}

		}

	}

	/**
	 * Sanitize permalink base option
	 * 
	 * @since 1.0.0
	 */
	function wppedia_permalink_part_sanitize( $input ) {
		// Add leading slash to prevent `esc_url_raw` adding a protocol
		$input = '/' . $input;
		// replace all whitespaces with `-`
		$input = preg_replace( '/\s+/', '-', $input );
		$input = esc_url_raw( $input, null );
		// Remove leading slash
		$input = substr($input, 1);

		return $input;
	}

	function frontpage_slug_not_matching_permalink_settings_notice() {
		if (false !== get_option('wppedia_frontpage') && get_post_field('post_name', get_post(get_option('wppedia_frontpage'))) !== get_option('wppedia_permalink_base_setting')) {
			echo '<div class="wppedia-admin-message notice notice-warning is-dismissible">';
			echo '<p>';
			printf(
				_x('Attention! Your permalink base %s does not match the slug of your glossary frontpage %s', 'options', 'wppedia'),
				'<code>' . get_option('wppedia_permalink_base_setting') . '</code>',
				'<code>' . get_post_field('post_name', get_post(get_option('wppedia_frontpage'))) . '</code>'
			);
			echo '</p>';
			echo '<p>';
			echo '<a class="button" href="' . admin_url('/options-permalink.php') . '" target="_blank">' . __('Manage permalinks') . '</a>';
			echo '</p>';
			echo '</div>';
		}

		return false;
	}

}
<?php

/**
 * WPPedia - The most advanced Glossary solution for WordPress! 
 * 
 * @since				1.0.0
 * 
 * @wordpress-plugin
 * 
 * Plugin Name: WPPedia
 * Description: The most advanced Glossary solution for WordPress!
 * Author: 			Bastian Fießinger
 * AuthorURI: 	https://github.com/bfiessinger/
 * Version: 		1.0.0
 * Text Domain: wppedia
 */

// Make sure this file runs only from within WordPress.
defined( 'ABSPATH' ) or die();

/**
 * Core WPPedia functions
 * 
 * @since 1.0.0
 */
require_once plugin_dir_path(__FILE__) . 'core/inc/core-functions.php';

use bf\wpPedia\template;
use bf\wpPedia\rest_controller;
use bf\wpPedia\query_control;
use bf\wpPedia\admin;
use bf\wpPedia\options;
use bf\wpPedia\post_type;
use bf\wpPedia\helper;
use bf\wpPedia\modules\crosslinks;
use bf\wpPedia\modules\tooltip;

class WPPedia {

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

  protected function __construct() {}

	/**
	 * Define Plugin Constants
	 * 
	 * @since 1.0.0
	 */
	private function define_constants() {

		wppedia_maybe_define_constant('wpPediaPluginVersion', '1.0.0');

		// Path Constants
		wppedia_maybe_define_constant('wpPediaPluginDir', plugin_dir_path(__FILE__));
		wppedia_maybe_define_constant('wpPediaPluginUrl', plugin_dir_url(__FILE__));
		wppedia_maybe_define_constant('wpPediaPluginBaseName', plugin_basename( __FILE__ ));

		// Env Constants
		wppedia_maybe_define_constant('WPPedia_TEMPLATE_DEBUG_MODE', false);
		
	}

	public function setup() {

		load_plugin_textdomain( 'wppedia', false, dirname( wpPediaPluginBaseName ) . '/languages' );

	}

	public function init() {

		// psr4 Autoloader
		$loader = require "vendor/autoload.php";
		$loader->addPsr4('bf\\wpPedia\\', __DIR__);

		$this->define_constants();

		add_action( 'after_setup_theme', [ $this, 'setup' ] );

		/**
		 * Instantiate Template Utils
		 * 
		 * @since 1.0.0
		 */
		template::getInstance();

		/**
		 * Instantiate REST API Controller Class
		 * 
		 * @since 1.0.0
		 */
		new rest_controller();

		/**
		 * Instantiate Query Controller
		 * 
		 * @since 1.0.0
		 */
		new query_control();

		/**
		 * Instatiate Admin View
		 * Used to edit post or edit views in wp_admin
		 * 
		 * @since 1.0.0
		 */
		new admin();

		/**
		 * Options
		 * Setup options and settings pages
		 * 
		 * @since 1.0.0
		 */
		options::getInstance();

		/**
		 * Instantiate Post Type
		 * Generates the WPPedia Post type and related taxonomies
		 * 
		 * @since 1.0.0
		 */
		post_type::getInstance();

		/**
		 * Modify Wiki Content
		 * 
		 * @since 1.0.0
		 */
		$crosslinks_active = ( helper::getInstance()->get_option( options::$settings_general_page, 'wppedia_crosslinking_active' ) == 'on' ) ? true : false;
		$prefer_single_words = ( helper::getInstance()->get_option( options::$settings_general_page, 'wppedia_crosslinking_prefer-single-words' ) == 'on' ) ? true : false;

		new crosslinks(
			$crosslinks_active,
			$prefer_single_words		
		);

		/**
		 * Tooltips
		 * 
		 * @since 1.0.0
		 */
		new tooltip();

	}

	/**
	 * Get default path for templates in themes
	 */
	public function template_path() {
    return apply_filters( 'wppedia_template_path', 'wppedia/' );
  }

	/**
	 * Get default plugin path
	 */
	public function plugin_path() {
		return (defined('wpPediaPluginDir')) ? wpPediaPluginDir : plugin_dir_path(__FILE__);
	}

}

$WPPedia = WPPedia::getInstance();
$WPPedia->init();

/**
 * Template Hooks
 * 
 * @since 1.0.0
 */
require_once wpPediaPluginDir . 'template-hooks/hooks.php';

/**
 * Enqueue Assets
 * 
 * @since 1.0.0
 */
require_once wpPediaPluginDir . 'core/inc/assets.php';

/**
 * Shortcodes
 * 
 * @since 1.0.0
 */
require_once wpPediaPluginDir . 'core/inc/shortcodes.php';

/**
 * The code that runs during plugin activation.
 * 
 * @since 1.0.0
 */
require_once wpPediaPluginDir . 'core/inc/class.activation.php';
register_activation_hook( __FILE__, [ 'bf\\wpPedia\\activation', 'activate' ] );

/**
 * Flush rewrite rules if the previously added flag exists,
 * and then remove the flag.
 */
add_action( 'init', function() {

	if ( get_option( 'wppedia_flush_rewrite_rules_flag' ) ) {
		flush_rewrite_rules();
		delete_option( 'wppedia_flush_rewrite_rules_flag' );
	}

}, 20 );

/**
 * The code that runs during plugin deactivation.
 * 
 * @since 1.0.0
 */
require_once wpPediaPluginDir . 'core/inc/class.deactivation.php';
register_deactivation_hook( __FILE__, [ 'bf\\wpPedia\\deactivation', 'deactivate' ] );

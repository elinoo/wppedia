<?php

/**
 * Plugin Activation
 * 
 * @since 1.0.0
 */

namespace bf\wpPedia;

// Make sure this file runs only from within WordPress.
defined( 'ABSPATH' ) or die();

class activation {

	function __construct() {}

	public static function activate() {
    if ( ! get_option( 'wppedia_flush_rewrite_rules_flag' ) ) {
			add_option( 'wppedia_flush_rewrite_rules_flag', true );
		}

		$default_options = [
			// Pages
			'wppedia_frontpage' => false,
			// Crosslinking
			'wppedia_feature_crosslinks' => true,
			'wppedia_crosslinks_prefer_single_words' => false,
		];

		foreach ($default_options as $option_key => $option_value) {
			if (!get_option($option_key)) {
				add_option( $option_key, $option_value, '', false );
			}
		}		
	}

}

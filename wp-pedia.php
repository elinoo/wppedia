<?php

/**
 * setupMyWP
 *
 * @wordpress-plugin
 * Plugin Name: WP Pedia
 * Description: Simple Glossary for Wordpress
 * Author: Bastian Fießinger
 * AuthorURI: https://github.com/bfiessinger/
 * Version: 1.0.0
 * Text Domain: wppedia
 */

// Make sure this file runs only from within WordPress.
defined( 'ABSPATH' ) or die();

// Define Constants
if ( ! defined('wpPediaPluginDir') )
  define('wpPediaPluginDir', plugin_dir_path(__FILE__));

if ( ! defined('wpPediaPluginUrl') )
  define('wpPediaPluginUrl', plugin_dir_url(__FILE__));

// psr4 Autoloader
$loader = require "vendor/autoload.php";
$loader->addPsr4('bf\\wpPedia\\', __DIR__);

// DEV START
function includestyles() {

  wp_enqueue_style( 'wppedia', wpPediaPluginUrl . '/dist/css/style.css' );

}
add_action( 'wp_enqueue_scripts', 'includestyles' );
// DEV END

/**
 * Instatiate Helper Utils
 * 
 * @since 1.0.0
 */
function wppedia_utils() {

	return bf\wpPedia\helper::getInstance();

}
wppedia_utils();

/**
 * Instantiate Template Utils
 * 
 * @since 1.0.0
 */
function wppedia_template() {

	return bf\wpPedia\template::getInstance();

}

/**
 * Instantiate Controller
 * 
 * @since 1.0.0
 */
$wiki_controller = bf\wpPedia\controller::getInstance();

/**
 * Instantiate Post Type
 * 
 * @since 1.0.0
 */
bf\wpPedia\wikiPostType::getInstance();

/**
 * Instatiate Admin View
 * 
 * @since 1.0.0
 */
bf\wpPedia\adminView::getInstance();

/**
 * Modify Wiki Content
 * 
 * @since 1.0.0
 */
new bf\wpPedia\wikiContent();

/**
 * Load Template Tags
 * 
 * @since 1.0.0
 */
require_once wpPediaPluginDir . '/template-tags/template-tags.php';

/**
 * Public functions
 * 
 * @since 1.0.0
 */
require_once wpPediaPluginDir . '/inc/public-functions.php';

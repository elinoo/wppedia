<?php

/**
 * Public available functions and declarations
 * 
 * @since 1.0.0
 */

/**
 * Common
 */

/**
 * Get the post type for WPPedia Posts
 * 
 * @return string
 * 
 * @since 1.0.0
 */
function get_wppedia_post_type() {
	return bf\wpPedia\post_type::getInstance()->post_type;
}


/**
 * Utilities
 */

/**
 * Get instance of helper utils
 * 
 * @since 1.0.0
 */
function wppedia_utils() {
	return bf\wpPedia\helper::getInstance();
}

/**
 * Returns whether the current view is from the glossary
 * 
 * @uses helper::is_wiki_post_type()
 * @see bf\wpPedia\helper
 * 
 * @return boolean
 * 
 * @since 1.0.0
 */
function is_wppedia() {
	return bf\wpPedia\helper::getInstance()->is_wiki_post_type();
}


/**
 * Template
 */

/**
 * Get Instance of Template utils
 * 
 * @since 1.0.0
 */
function wppedia_template() {
	return bf\wpPedia\template::getInstance();
}

/**
 * Prints the Template for the Searchform
 * 
 * @uses template::get_search_form()
 * @see bf\wpPedia\template
 * 
 * @return void
 * 
 * @since 1.0.0
 */
function get_wppedia_searchform() {
	bf\wpPedia\template::getInstance()->get_search_form();
}

/**
 * Print WPPedia Searchform form attributes as a string
 * 
 * @uses template::get_search_form_attrs()
 * 
 * @return string
 * 
 * @since 1.0.0
 */
function get_wppedia_searchform_attrs( array $attrs = [], bool $tostring = true ) {
	return bf\wpPedia\template::getInstance()->get_search_form_attrs( $attrs, $tostring );
}


/**
 * Other
 */

/**
 * Add additional inline styles
 * 
 * @since 1.0.0
 */
function wppedia_add_inline_style( string $handle, string $stylesheet ) {
	
	if ( bf\wpPedia\inline_style_collector::getInstance()->add( $handle, $stylesheet ) )
		return true;

	return false;

}
<?php
/**
 * The default archive template file.
 *
 * This is the default Template for WPPedia Archive Pages.
 * All Template functions are available in inc/tpl-hooks.php
 * 
 * Learn more: https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package wppedia
 */

get_header(); 

/**
 * wppedia_do_template_wrapper_start hook
 *
 * @hooked wppedia_template_wrapper_start -  10
 *
 */
do_action( 'wppedia_do_template_wrapper_start' );

if ( have_posts() ) {

	$layout_option = 'default'; // -> MUST BE MANAGED PER OPTION

	/**
	 * wppedia_do_template_archive_layout__{$layout_option} hook
	 *
	 * @hooked wppedia_do_template_archive_layout__{$layout_option} -  10
	 * 
	 * Default available Layout options:
	 * - TODO: Define Layout options
	 *
	 */
	do_action( "wppedia_do_template_archive_layout__{$layout_option}" );

} else {

	get_template_part( 'template-parts/content', 'none' );

}

/**
 * wppedia_do_template_wrapper_end hook
 *
 * @hooked wppedia_template_wrapper_end -  10
 *
 */
do_action( 'wppedia_do_template_wrapper_end' );

get_footer();

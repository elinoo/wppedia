<?php

/**
 * WP Wiki Controller
 * 
 * @since 1.0.0
 */

namespace bf\wpPedia;

use bf\wpPedia\helper;
use bf\wpPedia\post_type;

// Make sure this file runs only from within WordPress.
defined( 'ABSPATH' ) or die();

class query_control {

  /**
   * Static variable for instanciation
   */
  protected static $instance = null;

  /**
   * Get current Instance
	 * 
	 * @since 1.0.0
	 * 
	 * @return self
   */
  public static function getInstance() {

    if ( null === self::$instance ) {
      self::$instance = new self;
    }
    return self::$instance;

	}
	
  protected function __clone() {}

  protected function __construct() {

		// Modify the default query output
		add_filter( 'posts_join', [ $this, 'posts_join_get_posts_by_initial_letter' ], 10, 2 );
		add_filter( 'posts_where', [ $this, 'posts_where_get_posts_by_initial_letter' ], 10, 2 );

		// Allow searching in glossary entries only
		add_filter( 'pre_get_posts', [ $this, 'search_wppedia' ], 202 );

    // Sort Wiki Entries by postname
    add_action( 'pre_get_posts', [ $this, 'default_wiki_entries_orderby' ] );

		// Set default posts per page on WPPedia frontend archives
		add_action( 'pre_get_posts', [ $this, 'default_posts_per_page' ] );

	}

	/**
	 * posts_join filter to query posts by initial letter
	 */
	function posts_join_get_posts_by_initial_letter( $join, \WP_Query $query ) {

		$initial_letter = $query->get( 'wppedia_query_initial_letter' );

		if ( '' !== $initial_letter ) {
			
			global $wpdb;

			$join .= " LEFT JOIN $wpdb->term_relationships as wtr ON ($wpdb->posts.ID = wtr.object_id)";
			$join .= " LEFT JOIN $wpdb->term_taxonomy as wtt ON (wtr.term_taxonomy_id = wtt.term_taxonomy_id)";
			$join .= " LEFT JOIN $wpdb->terms as wt ON (wtt.term_id = wt.term_id)";

		}

		return $join;

	}

  /**
   * posts_where filter to query posts by initial letter
   * 
   * @since 1.0.0 
   */
  function posts_where_get_posts_by_initial_letter( $where, \WP_Query $query ) {

    $initial_letter = $query->get( 'wppedia_query_initial_letter' );

    if ( '' !== $initial_letter ) {

      global $wpdb;

			$where .= " AND (wtt.taxonomy = 'wppedia_initial_letter') AND (wt.name = '$initial_letter')";

		}

    return $where;

	}
	
	/**
	 * Modify the main query for searches on the archive page
	 * 
	 * @since 1.0.0
	 */
	function search_wppedia( $query ) {

		if ( helper::getInstance()->is_wiki_search( $query ) ) {
			$query->set( 'post_type', post_type::getInstance()->post_type );
		}

		return $query;

	}

  /**
   * Set default sorting for WP List Table on wiki entries
   * 
   * @since 1.0.0
   */
  function default_wiki_entries_orderby( $query ) {

    if( ! $query->is_main_query() || ( isset( $query->query_vars['post_type'] ) && $query->query_vars['post_type'] !== post_type::getInstance()->post_type ) )
      return $query;
  
    // Orderby should not be manually modified
    if ( $query->get('orderby') == '' ) {

      $query->set( 'orderby', 'title' );
      $query->set( 'order', 'asc' );

		}
		
		return $query;

	}

	/**
	 * Set default posts per page on WPPedia Frontend Archives
	 * 
	 * @since 1.0.0
	 */
	function default_posts_per_page( $query ) {

		if ( $query->is_post_type_archive( post_type::getInstance()->post_type ) && ! is_admin() && $query->is_main_query() )
			$query->set( 'posts_per_page', '100' );

		return $query;

	}

}

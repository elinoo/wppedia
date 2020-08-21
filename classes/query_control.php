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

}
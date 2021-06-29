<?php
namespace COL\Admin;

class Ajax {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'wp_ajax_col_settings_from_action', [ $this, 'settings_from_action' ] );
		add_action( 'wp_ajax_col_map_data_action', [ $this, 'map_data_action' ] );
		add_action( 'wp_ajax_col_get_maps_action', [ $this, 'get_maps' ] );

	}

	/**
	 * Save settings data
	 */
	public function settings_from_action() {
		check_ajax_referer( 'col-settings' );

		if ( ! isset( $_POST['api_key'] ) ) {
			wp_die();
		}

		$api_key = sanitize_text_field( $_POST['api_key'] );

		update_option( 'col_map_api_key', $api_key );

		wp_send_json_success( [
			'message' => 'Settings are updated successfully.',
		] );
	}

	public function map_data_action() {
		$map_name = $_POST['map_name'];
		$map_data = $_POST['map_data'];
		$user_id = get_current_user_id();

		if( ! is_serialized( $map_data ) ) {
		    $map_data = maybe_serialize($map_data);
		}

		// Create post object
		$map_post_data = array(
			'post_author'	=> $user_id,
		  	'post_title'    => $map_name,
		  	'post_content'  => $map_data,
		  	'post_type'		=> 'col_maps',
		  	'post_status'	=> 'publish',
		);
		 
		// Insert the post into the database
		wp_insert_post( $map_post_data );

		wp_send_json_success( [
			'message' => 'Maps are updated Successfully.',
		] );
	}

	public function get_maps () {
		$map_posts = get_posts( array(
			'post_type'	=> 'col_maps'
		) );

		$maps = array();

		foreach ( $map_posts as $map ) {
			//$map_data = maybe_unserialize( $map->post_content );
			$map_data['id'] = $map->ID;
			$map_data['title'] = $map->post_title;
			$maps[] = $map_data;
		}

		wp_send_json_success($maps);
	}
}

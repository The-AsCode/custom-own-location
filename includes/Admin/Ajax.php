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
		add_action( 'wp_ajax_col_delete_map_action', [ $this, 'delete_map' ] );
		add_action( 'wp_ajax_col_edit_maps_action', [ $this, 'edit_map' ] );
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
		$map_data = $_POST['map_data'];
		$map_name = $map_data['mapName'];
		$user_id = get_current_user_id();

		print_r($_POST);

		if( ! is_serialized( $map_data ) ) {
		    $map_data = maybe_serialize($map_data);
		}
		
		$map_post_data = array(
			'post_author'	=> $user_id,
		  	'post_title'    => $map_name,
		  	'post_content'  => $map_data,
		  	'post_type'		=> 'col_maps',
		  	'post_status'	=> 'publish',
		);
		 
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
			$map_data['id'] = $map->ID;
			$map_data['title'] = $map->post_title;
			$maps[] = $map_data;
		}

		wp_send_json_success($maps);
	}

	public function delete_map () {
		$map_id = $_POST['map_id'];
		wp_delete_post($map_id);

		$map_posts = get_posts( array(
			'post_type'	=> 'col_maps'
		) );

		$maps = array();

		foreach ( $map_posts as $map ) {
			$map_data['id'] = $map->ID;
			$map_data['title'] = $map->post_title;
			$maps[] = $map_data;
		}

		wp_send_json_success($maps);
	}

	public function edit_map () {
		$map_id = $_POST['id'];
		$post = get_post($map_id);

		$map_data['title'] = $post->post_title;
		$map_data['content'] = maybe_unserialize($post->post_content);
		$map_info = $map_data;

		$map = array(
			'title'			=> $map_info['title'],
			'position'		=> $map_info['content']['mapPosition'],
			'marker_color'	=> $map_info['content']['markerIcon'],
			'height'		=> $map_info['content']['height'],
			'width'			=> $map_info['content']['width']
		);

		wp_send_json_success($map);
	}
}

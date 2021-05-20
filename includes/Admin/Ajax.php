<?php
namespace COL\Admin;

class Ajax {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'wp_ajax_col_settings_from_action', [ $this, 'settings_from_action' ] );
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

}

<?php

namespace COL\Admin;

class Enqueue {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', [ $this, 'admin_scripts' ], 10, 1 );
	}

	/**
	 * Load scripts
	 *
	 * @param $page
	 */
	public function admin_scripts( $page ) {

		if ( 'toplevel_page_col_dashboard' === $page ) {
			$filepath = COL_DIR_PATH . 'assets/admin/js/locations.js';
			$fileurl  = COL_DIR_URL . 'assets/admin/js/locations.js';
			wp_enqueue_script( 'col_dashboard', $fileurl, [], filemtime( $filepath ), true );

			wp_localize_script( 'col_dashboard', 'colDeshboard',  $this->dashboard_data() );

		}

		if ( 'col_page_col_setting' === $page ) {
			$filepath = COL_DIR_PATH . 'assets/admin/js/settings.js';
			$fileurl  = COL_DIR_URL . 'assets/admin/js/settings.js';
			wp_enqueue_script( 'col_settings', $fileurl, [], filemtime( $filepath ), true );

			wp_localize_script( 'col_settings', 'colSettings',  $this->settings_data() );
		}

	}

	/**
	 * Add data that are need in the JS
	 */
	private function settings_data() {
		return [
			'api_key' => get_option( 'col_map_api_key', null ),
			'nonce'  => wp_create_nonce( 'col-settings' ),
		];
	}

	private function dashboard_data() {
		return [
			'api_key' => get_option( 'col_map_api_key', null ),
			'nonce'  => wp_create_nonce( 'col-settings' ),
			'icon_red_home' => COL_DIR_URL . 'assets/icons/red_home.png',
			'icon_red_office' => COL_DIR_URL . 'assets/icons/red_office.png',
			'icon_red_restaurant' => COL_DIR_URL . 'assets/icons/red_restaurant.png',
			'icon_blue_home' => COL_DIR_URL . 'assets/icons/blue_home.png',
			'icon_blue_office' => COL_DIR_URL . 'assets/icons/blue_office.png',
			'icon_blue_restaurant' => COL_DIR_URL . 'assets/icons/blue_restaurant.png',
			'icon_green_home' => COL_DIR_URL . 'assets/icons/green_home.png',
			'icon_green_office' => COL_DIR_URL . 'assets/icons/green_office.png',
			'icon_green_restaurant' => COL_DIR_URL . 'assets/icons/green_restaurant.png',

		];
	}
}

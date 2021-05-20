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

}

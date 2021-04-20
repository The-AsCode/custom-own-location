<?php

namespace COL\Admin;

class Menu {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'admin_menu' ] );
	}

	/**
	 * Admin menu items
	 */
	public function admin_menu() {
		$parent_slug = 'col_dashboard';
		$capabilty = 'manage_options';

		add_menu_page(
			'Custom Own Locations',
			'COL',
			$capabilty,
			$parent_slug,
			[ $this, 'col_dashboard_page' ],
			'dashicons-location'
		);

		add_submenu_page(
			$parent_slug,
			'Custom Own Location',
			'Location',
			$capabilty,
			$parent_slug,
			[$this, 'col_dashboard_page']
		);

		add_submenu_page(
			$parent_slug,
			'Custom Own Locations',
			'API Settings',
			$capabilty,
			'col-api-setting',
			[$this, 'col_api_setting_page']
		);
	}

	/**
	 * Output of dashboard page
	 */
	public function col_dashboard_page() {
		echo '<div id="col-dashboard-page-app"></div>';
	}

	public function col_api_setting_page() {

	echo '<div style="font-size:15px; padding-top:5px;">
			<form>
			  <label for="api">Your API Key:</label>
			  <input type="text" id="api" name="api">
			  <input type="submit" value="Submit">
			</form>
		 </div>';
	}

}

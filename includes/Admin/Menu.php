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
		add_menu_page(
			'Custom Own Locations',
			'Locations',
			'manage_options',
			'col_dashboard',
			[ $this, 'col_dashboard_page' ]
		);
	}

	/**
	 * Output of dashboard page
	 */
	public function col_dashboard_page() {
		echo '<h1>hello</h1>';
	}

}

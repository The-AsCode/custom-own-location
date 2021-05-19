<?php
namespace COL\Admin;

class Ajax {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'wp_ajax_col_api_from_action', [ $this, 'col_api_from_action' ] );
	}

	public function col_api_from_action() {
		$keyValue = ( $_POST['key'] );

		if(isset($keyValue)){
			$keyValue = htmlspecialchars($keyValue);
			update_option( 'apikey', $keyValue);
		}
		wp_die();
	}
}

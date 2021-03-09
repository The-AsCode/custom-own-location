<?php
/**
* Plugin Name:       Custom Own Location
* Plugin URI:        https://sourov.im/ascode
* Description:       Handle the basics with this plugin.
* Version:           1.0.0
* Requires at least: 5.0
* Requires PHP:      7.0
* Author:            AsCode
* Author URI:        https://sourov.im/ascode
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
*/

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

final class Custom_Own_Location {

	const VERSION = '1.0.0';

	protected static $instance = null;

	/**
	 * Initialize plugin
	 */
	public static function init() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
 	}

 	/**
	 * Constructor
	 */
 	private function __construct() {
		$this->define_constants();


 	}

	/**
	 * Define necessary constants
	 */
	private function define_constants() {
 		define( 'COL__FILE__', __FILE__ );
 		define( 'COL_DIR_PATH', plugin_dir_path( __FILE__ ) );
 		define( 'COL_DIR_URL', plugin_dir_url( __FILE__ ) );
	}

}

// Start from here.
Custom_Own_Location::init();

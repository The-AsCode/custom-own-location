<?php
/**
* Plugin Name:       Custom Own Location
* Plugin URI:        https://sourov.im/ascode
* Description:       Fully free plugin allow you to quickly add Google Maps to your WordPress website.
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

if ( ! file_exists( __DIR__ . '/vendor/autoload.php' ) ) {
	die( 'Please run `composer install` on wp-content/plugins/custom-own-location directory.' );
}

require_once __DIR__ . '/vendor/autoload.php';

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

		$this->run_admin_classes();
 	}

	/**
	 * Define necessary constants
	 */
	private function define_constants() {
 		define( 'COL__FILE__', __FILE__ );
 		define( 'COL_DIR_PATH', plugin_dir_path( __FILE__ ) );
 		define( 'COL_DIR_URL', plugin_dir_url( __FILE__ ) );
	}

	/**
	 * Initialize admin classes
	 */
	private function run_admin_classes() {
		new COL\Admin\Menu();
	}

}

// Start from here.
Custom_Own_Location::init();

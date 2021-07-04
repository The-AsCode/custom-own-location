<?php

namespace COL\Front;

class Enqueue {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'scripts' ], 10, 1 );
	}

	public function scripts () {
		$api_key = get_option( 'col_map_api_key', null );
		$fileurl = "https://maps.googleapis.com/maps/api/js?key=".$api_key."&callback=initMap&libraries=&v=weekly";

		wp_register_script( 'google_map_js', $fileurl, [], null, true );

	}

}

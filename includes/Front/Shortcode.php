<?php

namespace COL\Front;

class Shortcode {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_shortcode('col-map', [$this, 'col_map_shortcode']);
	}

	public function col_map_shortcode($attr) {
		wp_enqueue_script( 'google_map_js');

		$defalut = array(
			'id'	=>'',
		);

		$map_id = shortcode_atts($defalut,$attr);
		$post   = get_post($map_id['id']);
		//return "<div id ='col-map-".$map_id['id']."'>Hello</div>";
		
		ob_start(); ?>
			<div id="col-map-<?php echo $post->ID; ?>"></div>

			<script type="text/javascript">
				let map;

				function initMap() {
				  map = new google.maps.Map(document.getElementById("col-map-<?php echo $post->ID ?>"), {
				    center: { lat: -34.397, lng: 150.644 },
				    zoom: 8,
				  });
				}
			</script>

		<?php $map = ob_get_clean();
		return $map;
	}
}

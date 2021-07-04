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
		$post_data   = get_post($map_id['id']);

		$map_info = maybe_unserialize($post_data->post_content);

		//return print_r($map_info);
		
		ob_start(); ?>
			<div id="col-map-<?php echo $post_data->ID; ?>" style="height: 200px; width: 500px; "></div>

			<script type="text/javascript">
				let map;

				function initMap() {
				  map = new google.maps.Map(document.getElementById("col-map-<?php echo $post_data->ID; ?>"), {
				    center: { lat: -34.397, lng: 150.644 },
				    zoom: 10,
				  });
				}
			</script>

		<?php $map = ob_get_clean();
		return $map;
	}
}

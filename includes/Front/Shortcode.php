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

		//post_content data
		if(isset($post_data->post_content)){
			$map_info = maybe_unserialize($post_data->post_content);
			$marker = $map_info['markerIcon'];
			$marker_url = COL_DIR_URL . 'assets/icons/'.$marker['color'].'_'.$marker['type'].'.png';
			
			$lat_lng = $map_info['mapPosition'];
		}
		else{
			echo "There is no such a map! Please set map, or check the shortcode";
		}

		//return print_r($marker);
		
		ob_start(); ?>
			<div id="col-map-<?php echo $post_data->ID; ?>" style="height: 400px; width: 700px; "></div>

			<script type="text/javascript">
				let map;
				const myLatLng = { 
					lat: <?php echo $lat_lng['lat']; ?>, 
					lng: <?php echo $lat_lng['lng']; ?> 
				};
				var mapOptions = {
					zoom: 4,
					center: myLatLng
				};

				function initMap() {
					const image ="<?php echo $marker_url; ?>";
				  	map = new google.maps.Map(document.getElementById("col-map-<?php echo $post_data->ID; ?>"),
				  		mapOptions
				  	);

				  	new google.maps.Marker({
				    	position: myLatLng,
				    	map,
				    	icon: image
					});
				}

			</script>

		<?php $map = ob_get_clean();
		return $map;
	}
}

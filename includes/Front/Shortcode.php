<?php

namespace COL\Front;

class Shortcode {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_shortcode( 'col-map', array( $this, 'col_map_shortcode' ) );
	}

	/**
	 * Display map in the page
	 *
	 * @param $attr
	 *
	 * @return string
	 */
	public function col_map_shortcode( $attr ) {
		wp_enqueue_script( 'google_map_js' );

		$attrs = shortcode_atts( array(
			'id' => '',
		), $attr );

		$map_id    = sanitize_text_field( $attrs['id'] );
		$post_data = get_post( $map_id );

		if ( ! $post_data ) {
			return '<p>There is no such a map! Please set the map, or check the shortcode.<p>';
		}

		if ( 'col_maps' !== $post_data->post_type ) {
			return '<p>You have not set a correct map ID, Please copy the shortcode from Location page</p>';
		}

		$map_info = maybe_unserialize( $post_data->post_content );

		if ( ! $map_info ) {
			return '<p>Your map is not set with proper data, Please check the shortcode in Location page.</p>';
		}

		$marker     = $map_info['markerIcon'];
		$marker_url = COL_DIR_URL . 'assets/icons/' . $marker['color'] . '_' . $marker['type'] . '.png';
		$lat_lng    = $map_info['mapPosition'];

		ob_start();
		?>
		<div id="col-map-<?php echo $post_data->ID; ?>" style="height: 400px; width: 700px; "></div>

		<script type="text/javascript">
			var map;
			var myLatLng = {
				lat: <?php echo $lat_lng['lat']; ?>,
				lng: <?php echo $lat_lng['lng']; ?>
			};
			var mapOptions = {
				zoom: 4,
				center: myLatLng
			};

			function initMap() {
				const image = "<?php echo $marker_url; ?>";
				map = new google.maps.Map( document.getElementById( "col-map-<?php echo $post_data->ID; ?>" ),
					mapOptions
				);

				new google.maps.Marker( {
					position: myLatLng,
					map,
					icon: image
				} );
			}
		</script>

		<?php
			return ob_get_clean();
	}

}

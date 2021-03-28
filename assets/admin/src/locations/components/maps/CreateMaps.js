import React from 'react';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCRHZISVTwyzXpABRYNYDbKH5njW1PpLPU");

export default class CreateMaps extends React.Component {

	state = {
        address: '',
        city: '',
        area: '',
        state: '',
        zoom: 15,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        }
    }

    onMarkerDragEnd = (event) =>{
    	let newLat = event.latLng.lat();
    	let newLng = event.latLng.lng();

    	Geocode.fromLatLng(newLat,newLng)
    		.then(response =>{
    			console.log('response',response)
    		})
    }

	render() {
		const MapWithAMarker = withScriptjs(withGoogleMap(props =>
		  <GoogleMap
		    defaultZoom={8}
		    defaultCenter={{ lat: -34.397, lng: 150.644 }}
		  >
		    <Marker
		      draggable={true}
		      onDragEnd={this.onMarkerDragEnd}
		      position={{ lat: 23.7867463, lng: 90.373 }}
		    >
		    	<InfoWindow>
		    		<div>hello</div>
		    	</InfoWindow>
		    </Marker>

		  </GoogleMap>
		));

		return (
			<MapWithAMarker
			  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRHZISVTwyzXpABRYNYDbKH5njW1PpLPU&v=3.exp&libraries=geometry,drawing,places"
			  loadingElement={<div style={{ height: '50%' }} />}
			  containerElement={<div style={{ height: `300px` }} />}
			  mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
import React, { Component } from 'react';
import {
	GoogleMap, 
	withScriptjs,
	withGoogleMap
} from 'react-google-maps';

function Map(){
	return(
		<GoogleMap
		defaultZoom={10} 
		defaultCenter={{lat: 23.786746, lng : 90.373984}} 
		/>
	);
}

const MapWrapped = withScriptjs(withGoogleMap(Map));  

export default class CreateMaps extends React.Component {

	render() {
		return (
			<div>
				<div style = {{width: '100vw', height: '75vh'}}>
					<MapWrapped
						googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key= AIzaSyCRHZISVTwyzXpABRYNYDbKH5njW1PpLPU "}    
		        		loadingElement={<div style={{ height: "50%" }} />}
		        		containerElement={<div style={{ height: "50%" }} />}
		        		mapElement={<div style={{ height: "100%" }} />}
					/>
				</div>
			</div>
		)
	}
}

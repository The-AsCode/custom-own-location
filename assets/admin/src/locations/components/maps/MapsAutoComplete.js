import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import EditMaps from './EditMaps';

export class MapsAutoComplete extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = { 
	    	address: '',
	    	showingInfoWindow: false,
	    	activeMarker: {},
	    	selectedPlace: {},

	    	mapCenter: {
	    		lat: 23.786746,
	    		lng : 90.373984 
	    	},

	    	isClicked : false
	    };
  	}

	onMarkerClick = (props, marker, e) =>{
		this.setState({
		    selectedPlace: props,
		    activeMarker: marker,
		    showingInfoWindow: true,

		});

		this.setState({
			isClicked: true
		});

	}
		

	onMapClicked = (props) => {
		if (this.state.showingInfoWindow) {
		    this.setState({
		       showingInfoWindow: true,
		       activeMarker: null
		    })
		}
	};

	handleChange = address => {
	    this.setState({ address });
	};
 
  	handleSelect = address => {
    	geocodeByAddress(address)
      	.then(results => getLatLng(results[0]))
      	.then(latLng =>{
      		console.log('Success', latLng)
      		this.setState({address});
      		this.setState({ mapCenter: latLng});
      	})
      	.catch(error => console.error('Error', error));
  	};

	render() {

		const {isClicked} = this.state
		let mapInfo = isClicked ? <EditMaps/> : " "

		const style = { 
		  width: '100%',
		  height: '100%'
		}

		return (
			<div style = {{width: '30vw', height: '25vh'}}>
				<PlacesAutocomplete
					value={this.state.address}
			       	onChange={this.handleChange}
			       	onSelect={this.handleSelect}
			    >

				    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
	          			<div>
	            			<input
		              			{...getInputProps({
			                		placeholder: 'Search Places ...',
			                		className: 'location-search-input',
		              			})}
	            			/>
	            			<div className="autocomplete-dropdown-container">
	            			{loading && <div>Loading...</div>}
	              			{suggestions.map(suggestion => {
	                			const className = suggestion.active
	                  				? 'suggestion-item--active'
	                  				: 'suggestion-item';
	                			// inline style for demonstration purpose
	                			const style = suggestion.active
	                  				? { backgroundColor: '#fafafa', cursor: 'pointer' }
	                  				: { backgroundColor: '#ffffff', cursor: 'pointer' };
	                  			return (
	                  				<div
	                    				{...getSuggestionItemProps(suggestion, {
	                      					className,
	                      					style,
	                    				})}
	                  				>
	                  					<span>{suggestion.description}</span>
	                  				</div>
	                  			);
	                  		})}
	                  	</div>
	          		</div>
	        	)}

				</PlacesAutocomplete>

				<Map 
					style={style} 
					google={this.props.google}
	          		onClick={this.onMapClicked}
	          		zoom = {15}
	          		initialCenter={{
	          			lat: this.state.mapCenter.lat, 
	          			lng: this.state.mapCenter.lng
	          		}}

	          		center = {{
	          			lat: this.state.mapCenter.lat, 
	          			lng: this.state.mapCenter.lng
	          		}}
	          	>
	        		<Marker onClick={this.onMarkerClick}
	                	name={this.state.address}
	                	position ={{
	                		lat: this.state.mapCenter.lat,
	                		lng: this.state.mapCenter.lng
	                	}} 
	                />
	 
	        		<InfoWindow
	         			marker={this.state.activeMarker}
	          			visible={this.state.showingInfoWindow}>
	            	<div>
	              		<h3>{this.state.selectedPlace.name}</h3>
	              		<h4>Latitude:{this.state.mapCenter.lat}</h4>
	              		<h4>Longitude:{this.state.mapCenter.lng}</h4>
	            	</div>
	        		</InfoWindow>
	      		</Map>
	      		<div style={{marginTop:"50vh"}}>
	      			{mapInfo}
	      		</div>
	      	</div>
		)
	}
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCRHZISVTwyzXpABRYNYDbKH5njW1PpLPU')
})(MapsAutoComplete)
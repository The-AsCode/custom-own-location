import React from 'react';
import { withGoogleMap, 
    GoogleMap, 
    withScriptjs, 
    InfoWindow, 
    Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import EditMaps from './EditMaps';


Geocode.setApiKey("AIzaSyCRHZISVTwyzXpABRYNYDbKH5njW1PpLPU");
Geocode.enableDebug();

export default class CreateMaps extends React.Component {
    
    state = {
        address: '',
        city: '',
        area: '',
        state: '',
        zoom: 40,
        height: 400,
        mapPosition: {
            lat: 0,
            lng: 0,
        },
        markerPosition: {
            lat: 0,
            lng: 0,
        },

        isClicked : false
    }

    getCity = (addressArray) => {
        let city = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
                city = addressArray[i].long_name;
                return city;
            }
        }
    };

    getArea = (addressArray) => {
        let area = '';
        for (let i = 0; i < addressArray.length; i++) {
            if (addressArray[i].types[0]) {
                for (let j = 0; j < addressArray[i].types.length; j++) {
                    if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
                        area = addressArray[i].long_name;
                        return area;
                    }
                }
            }
        }
    };

    getState = (addressArray) => {
        let state = '';
        for (let i = 0; i < addressArray.length; i++) {
            for (let i = 0; i < addressArray.length; i++) {
                if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
                    state = addressArray[i].long_name;
                    return state;
                }
            }
        }
    };

    onMarkerDragEnd = (event) => {
        let newLat = event.latLng.lat();
        let newLng = event.latLng.lng();


        Geocode.fromLatLng(newLat,newLng)
        .then(response => {
            const address = response.results[0].formatted_address,
                    addressArray = response.results[0].address_components,
                    city = this.getCity(addressArray),
                    area = this.getArea(addressArray),
                    state = this.getState(addressArray);
            this.setState({
                address: (address) ? address : '',
                area: (area) ? area : '',
                city: (city) ? city : '',
                state: (state) ? state : '',
                markerPosition: {
                    lat: newLat,
                    lng: newLng
                },
                mapPosition: {
                    lat: newLat,
                    lng: newLng
                },

            })
        })
    }

    onMarkerClick = () => {
        this.setState({isClicked: true});
    }
    
    render() {

        const {isClicked} = this.state
        let mapInfo = isClicked ? <EditMaps/> : " "

        let style = { 
          height: '100%',
          width: isClicked == true ? '80%' : '100%',
        }

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>
          <GoogleMap
            style = {style}
            defaultZoom={4}
            defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
          >
            <Marker
              position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
              onClick={this.onMarkerClick}
            >

                <InfoWindow>
                    <div>
                        Location: {this.state.address}
                        Lat: {this.state.mapPosition.lat}
                        Lng: {this.state.mapPosition.lng}
                    </div>
                </InfoWindow>

            </Marker>

          </GoogleMap>
        ));

        return (
            <div style = {{width: '85vw', height: '0vh'}}>
                <div style={style}>
                    <MapWithAMarker
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRHZISVTwyzXpABRYNYDbKH5njW1PpLPU&v=3.exp&libraries=geometry,drawing,places"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `300px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div style={{marginLeft:"78.5%"}} >
                    {mapInfo}
                </div>
            </div>
        )
    }
}
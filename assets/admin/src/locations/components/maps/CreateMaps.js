import React from 'react';
import { connect } from "react-redux";
import { withGoogleMap, 
    GoogleMap, 
    withScriptjs, 
    InfoWindow, 
    Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import EditMaps from './EditMaps';
import MarkersIcon from './Markers';

import { updateMapFormFields } from '../../store/actions';

//map API key 
const apiKey = colDeshboard.api_key;
const googleMapURLWithKey= "https://maps.googleapis.com/maps/api/js?key="+apiKey+"&v=3.exp&libraries=geometry,drawing,places";

//icon link
//link willbe here 

Geocode.setApiKey(apiKey);
Geocode.enableDebug();

class CreateMaps extends React.Component {

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    mapPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    markerPosition: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                },() => {
                    Geocode.fromLatLng(position.coords.latitude, position.coords.longitude)
                    .then(response => {
                        console.log(response)
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
                        })
                    });

                })
            });
        }
    };

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
            this.props.updateMapFormFields({
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

    onPlaceSelected = (place) => {
        console.log('plc', place);
        const address = place.formatted_address,
            addressArray = place.address_components,
            city = this.getCity(addressArray),
            area = this.getArea(addressArray),
            state = this.getState(addressArray),
            latValue = place.geometry.location.lat(),
            lngValue = place.geometry.location.lng();

        console.log('latvalue', latValue)
        console.log('lngValue', lngValue)

        // Set these values in the state.
        this.setState({
            address: (address) ? address : '',
            area: (area) ? area : '',
            city: (city) ? city : '',
            state: (state) ? state : '',
            markerPosition: {
                lat: latValue,
                lng: lngValue
            },
            mapPosition: {  
                lat: latValue,
                lng: lngValue
            },
        })
    };
    
    render() {

        let style = { 
          height: '100%',
          width: '82%'
        }

        let mapOptions = {
          scrollwheel: true,
          zoomControlOptions: {
              //   position: 'RIGHT_CENTER',    // as long as this is not set it works
              style: 'SMALL'
          },
          mapTypeControlOptions: {
              position: 'BOTTOM_LEFT'     // this makes the map type control disappear
          },
          draggable: true,
          rotateControl: true,
          scaleControl: true,
          streetViewControl: {
            position: 'BOTTOM_LEFT' 
          },
          panControl: true,
        };

        const LocationSearch = withScriptjs(withGoogleMap(props =>
            <Autocomplete
                onPlaceSelected={this.onPlaceSelected}
                types={['(regions)']}
            />
        ));

        const MapWithAMarker = withScriptjs(withGoogleMap(props =>

          <GoogleMap
            style = {style}
            options={mapOptions}
            defaultZoom={6}
            defaultCenter={{ lat: this.props.mapForm.mapPosition.lat, lng: this.props.mapForm.mapPosition.lng }}
          >
            <Marker
              icon={{
                  url: this.getMarkerURL(),
                  anchor: new google.maps.Point(23, 56),
                  scaledSize: new google.maps.Size(45,56)
              }}
              position={{ lat: this.props.mapForm.markerPosition.lat, lng: this.props.mapForm.markerPosition.lng }}
              draggable={true}
              onDragEnd={this.onMarkerDragEnd}
              onClick={this.onMarkerClick}
            >
            
            <InfoWindow>
                <div>
                    Location: {this.props.mapForm.address}
                    Lat: {this.props.mapForm.mapPosition.lat}
                    Lng: {this.props.mapForm.mapPosition.lng}
                </div>
            </InfoWindow>

            </Marker>
          </GoogleMap>
        ));

        return (
          <>
            <div className="heading-space">
              <h1>Add New Location</h1>
            </div>

            <div style = {{width: '85vw', height: '0vh'}}>
                <div style={style}>
                    <LocationSearch
                        googleMapURL= {googleMapURLWithKey}
                        loadingElement={<div style={{ height: '10%' }} />}
                        containerElement={<div style={{ height: '',}} />}
                        mapElement={<div style={{ height: '10%' }} />}
                    />
                    <MapWithAMarker
                      googleMapURL={googleMapURLWithKey}
                      loadingElement={<div style={{ height: '100%' }} />}
                      containerElement={<div style={{ height: '300px'}} />}
                      mapElement={<div style={{ height: '100%' }} />}
                    />
                    <MarkersIcon/>
                </div>
                <div style={{marginLeft:"80.5%"}} >
                    <EditMaps/>
                </div>
            </div>
          </>
        )
    }

  getMarkerURL = () => {
    let markerIcon = this.props.mapForm.markerIcon;
    let key = `icon_${ markerIcon.color }_${ markerIcon.type }`;

    return colDeshboard[ key ];
  }

}

const mapStateToProps = state => ( {
  mapForm: state.mapForm
} );

export default connect(
  mapStateToProps,
  { updateMapFormFields }
)(CreateMaps);

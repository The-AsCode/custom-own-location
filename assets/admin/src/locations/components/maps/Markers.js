import React from 'react';
import { connect } from "react-redux";
import { changeMarkerIcon } from "../../store/actions";

class Markers extends React.Component {

	render() {
		return (
			<div className="main-marker-container">
        <div className="marker-color-container">
          <div className="marker-color-section" style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'34.5vw'}}>
            <div className="marker-heading">Color:</div>

            <div className="marker-icon-color-section">
              <div className="marker-icon-color"
                onClick={() => this.props.changeMarkerIcon('color', 'red')}
                style={{ backgroundColor: '#C6302A', height: '35px', width:'35px'}}
              />
              <div className="marker-icon-color"
                onClick={() => this.props.changeMarkerIcon('color', 'green')}
                style={{ backgroundColor: '#98C56A', height: '35px', width:'35px'}}
              />
              <div className="marker-icon-color"
                onClick={() => this.props.changeMarkerIcon('color', 'blue')}
                style={{ backgroundColor: '#508F9F', height: '35px', width:'35px'}}
              />
            </div>
          </div>
        </div>

        <div className="marker-container">
          <div className="marker-icon-container" style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'34.5vw'}}>
            <div className="marker-heading">Marker:</div>
            <div>
              <img className="marker-icon"
                src={this.getMarkerIconURL('home')}
                height={56}
                width={45}
                onClick={() => this.props.changeMarkerIcon('type', 'home')}
              />
              <img className="marker-icon"
                src={this.getMarkerIconURL('office')}
                height={56}
                width={45}
                onClick={() => this.props.changeMarkerIcon('type', 'office')}
              />
              <img className="marker-icon"
                src={this.getMarkerIconURL('restaurant')}
                height={56}
                width={45}
                onClick={() => this.props.changeMarkerIcon('type', 'restaurant')}
              />
            </div>
          </div>
        </div>
			</div>
		)
	}

  getMarkerIconURL = ( type ) => {
    let markerIcon = this.props.markerIcon;
    let key = `icon_${ markerIcon.color }_${ type }`;

    return colDeshboard[ key ];
  }

}

const mapStateToProps = state => ( {
  markerIcon: state.mapForm.markerIcon
} );

export default connect(
  mapStateToProps,
  { changeMarkerIcon }
)(Markers);

import React from 'react';
import { connect } from "react-redux";
import { changeMarkerIcon } from "../../store/actions";
import { Grid, Box } from '@material-ui/core';

class Markers extends React.Component {

	render() {
		return (
      <Grid container spacing={ 4 }>
        <Grid item sm={ 6 }>
          <Box style={{ backgroundColor: '#cfe8fc' }} height="70px" mt={4} p={2} display="flex">
            <div className="marker-heading">Color:</div>

            <Box display="flex">
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
            </Box>
          </Box>
        </Grid>

        <Grid item sm={ 6 }>
          <Box style={{ backgroundColor: '#cfe8fc' }} height="70px" mt={4} p={2} display="flex">
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
          </Box>
        </Grid>
			</Grid>
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

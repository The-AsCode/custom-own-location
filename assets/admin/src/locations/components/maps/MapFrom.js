import React from 'react';
import { connect } from "react-redux";
import { TextField, Box, Button } from '@material-ui/core';
import { updateMapFormFields } from '../../store/actions';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

class MapFrom extends React.Component {

  getLatLng = () => {
    return this.props.mapForm.markerPosition.lat + 
          "," + this.props.mapForm.markerPosition.lng;
  }

  state = {
    successMessage: "",
  };

  render() {
    return (
      <Box style={ { backgroundColor: '#cfe8fc' } } height="100%" p={2}>
        <div className="save-btn">
          <Button onClick={this.handleMapData} variant="contained" color="primary">Save</Button>
        </div>
        <Box pt={2}>
          <TextField onChange={this.handleMapName} label="Location Title" defaultValue="Location" fullWidth />
        </Box>
        <Box pt={2}>
          <TextField
            fullWidth
            label="Location coordinates"
            placeholder="Lat Lng"
            value={ this.getLatLng() }
            onChange={this.handleMapCoordinates} 
          />
        </Box>
        <Box pt={2}>
          <TextField 
            onChange={this.handleMapHeight} 
            label="Map Height (Default 400px)" 
            value={this.props.mapForm.height}
            fullWidth 
          />
        </Box>
        <Box pt={2}>
          <TextField 
            onChange={this.handleMapWidht} 
            label="Map Width (Default 700px)" 
            value={this.props.mapForm.width}
            fullWidth 
          />
        </Box>
        <Box pt={2}>
          <TextField label="Shortcode" defaultValue="Shortcode" fullWidth />
        </Box>

        <Snackbar
          open={!!this.state.successMessage}
          autoHideDuration={6000}
          onClose={this.handleAlertClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={this.handleAlertClose} severity="success">
            {this.state.successMessage}
          </Alert>
        </Snackbar>
      </Box>
    )
  }

  handleMapName = (e) => {
    this.props.updateMapFormFields({
      mapName: e.target.value,
    })
  }

  handleMapHeight = (e) => {
    this.props.updateMapFormFields({
      height: e.target.value,
    })
  }

  handleMapWidht = (e) => {
    this.props.updateMapFormFields({
      width: e.target.value,
    })
  }

  handleMapData = () => {
    let data = {
      'action' : 'col_map_data_action',
      'map_data' : this.props.mapForm
    }

    jQuery.post(ajaxurl, data, (response) => {
      this.setState({
        successMessage: response.data.message
      });
    });
  };

  handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      successMessage: ""
    });
  };
}

const mapStateToProps = state => ({
  mapForm: state.mapForm
});

export default connect(
  mapStateToProps, 
  { updateMapFormFields } 
)(MapFrom);

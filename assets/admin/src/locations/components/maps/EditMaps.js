import React from 'react';
import { connect } from "react-redux";
import { TextField, Box, Button } from '@material-ui/core';

class EditMaps extends React.Component {

  getLatLng = () => {
    return this.props.mapForm.markerPosition.lat + 
          "," + this.props.mapForm.markerPosition.lng;
  }

  render() {
    return (
      <Box style={ { backgroundColor: '#cfe8fc' } } height="100%" p={2}>
        <div className="save-btn">
          <Button variant="contained" color="primary">Save</Button>
        </div>
        <Box pt={2}>
          <TextField label="Location Title" defaultValue="Location" fullWidth />
        </Box>
        <Box pt={2}>
          <TextField
            fullWidth
            label="Location coordinates"
            placeholder="Lat Lng"
            value={ this.getLatLng() }
          />
        </Box>
        <Box pt={2}>
          <TextField label="Shortcode" defaultValue="Shortcode" fullWidth />
        </Box>
      </Box>
    )
  }
}

const mapStateToProps = state => ({
  mapForm: state.mapForm
});

export default connect(mapStateToProps)(EditMaps);

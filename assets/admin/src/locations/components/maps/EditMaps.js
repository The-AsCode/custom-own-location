import React from 'react';
import { connect } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CreateMaps from './CreateMaps';

class EditMaps extends React.Component {

  getLatLng = () => {
    return this.props.mapForm.markerPosition.lat + 
          "," + this.props.mapForm.markerPosition.lng;
  }

	render() {
		return (
			<div>
				<React.Fragment>
			      <CssBaseline />
			      <Container>
			        <Typography component="div" className="edit-map-container" style={{ backgroundColor: '#cfe8fc', height: '80vh', width: '17.5vw'}}>
                <div className="save-btn">
			        		<Button variant="contained" color="primary"> Save </Button>
			        	</div>
			        	<div className="edit-container-style">
			        		<TextField style={{width: '17vw'}} label="Location Title" defaultValue="Location" />
			        	</div>
			        	<div className="edit-container-style">
			        		<TextField 
                    style={{width: '17vw'}} 
                    label="Location coordinates" 
                    placeholder="Lat Lng"
                    value={this.getLatLng()}
                  />
			        	</div>
			        	<div className="edit-container-style">
			        		<TextField style={{width: '17vw'}} label="Shortcode" defaultValue="Shortcode" />
			        	</div>
			       	</Typography>	 
			      </Container>
			    </React.Fragment>
			</div>
		)
	}
}

const mapStateToProps = state => ({
  mapForm: state.mapForm
});

export default connect(mapStateToProps)(EditMaps);

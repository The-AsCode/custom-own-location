import React from 'react';
import { connect } from "react-redux";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CreateMaps from './CreateMaps';

import { updateMapMarker } from '../../store/actions.js';

class EditMaps extends React.Component {

  getLatLng = () => {
    return this.props.mapForm.markerPosition.lat + 
          "," + this.props.mapForm.markerPosition.lng;
  }

  constructor(props) {
    super(props)
  
    this.state = {
       changedLat : ' ',
       changedLng : ' '
    }
  }

  handleOnChange =(event)=> {
    this.setState({
      changedLat : event.target.value,
      changedLng : event.target.value
    });

  }

	render() {
		return (
			<div>
				<React.Fragment>
			      <CssBaseline />
			      <Container>
			        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh', width: '15.5vw' }}>
			        	<div className="save-btn">
			        		<Button variant="contained" color="primary"> Save </Button>
			        	</div>
			        	<div className="edit-container-style">
			        		<TextField style={{width: '15.5vw'}} label="Location Title" defaultValue="Map Name" />
			        	</div>
			        	<div className="edit-container-style">
			        		<TextField 
			                    style={{width: '15.5vw'}} 
			                    label="Location coordinates" 
			                    placeholder="Lat Lng"
			                    value={this.getLatLng()}
			                />
			        	</div>
			        	<div className="edit-container-style">
			        		<TextField style={{width: '15.5vw'}} label="Shortcode" defaultValue="Shortcode" onChange={this.handleOnChange} />
                  <p>{this.state.changedLat}</p>
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

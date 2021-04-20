import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CreateMaps from './CreateMaps';

export default class EditMaps extends React.Component {

	render() {
		return (
			<div>
				<React.Fragment>
			      <CssBaseline />
			      <Container>
			        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh', width: '15.5vw' }}>
			        	<div class="save-btn">
			        		<Button variant="contained" color="primary"> Save </Button>
			        	</div>
			        	<div class="edit-container-style">
			        		<TextField style={{width: '15.5vw'}} label="Location Title" defaultValue="Location" />
			        	</div>
			        	<div class="edit-container-style">
			        		<TextField style={{width: '15.5vw'}} label="Location coordinates" defaultValue="Lat Lng" />
			        	</div>
			        	<div class="edit-container-style">
			        		<TextField style={{width: '15.5vw'}} label="Shortcode" defaultValue="Shortcode" />
			        	</div>
			       	</Typography>	 
			      </Container>
			    </React.Fragment>
			</div>
		)
	}
}

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import MapsAutoComplete from './MapsAutoComplete';
import CreateMaps from './CreateMaps';

export default class EditMaps extends React.Component {

	render() {
		return (
			<div>
				<React.Fragment>
			      <CssBaseline />
			      <Container>
			        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '72vh', width: '16vw' }}>
			        	<TextField style={{width: '16vw' }} label="Location Title" defaultValue="Location" />
			        	<TextField style={{width: '16vw' }} label="Location coordinates" defaultValue="Lat Lng" />
			       	</Typography>	 
			      </Container>
			    </React.Fragment>
			</div>
		)
	}
}
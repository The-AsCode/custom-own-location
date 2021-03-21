import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


import MapsAutoComplete from './MapsAutoComplete';


export default class EditMaps extends React.Component {

	render() {
		return (
			<div>
				<React.Fragment>
			      <CssBaseline />
			      <Container maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '65vh' }}>
			        <TextField label="Location Name" defaultValue="HEllo" />
			        <TextField label="Location Coodonates" defaultValue="Hello World" />
			      </Container>
			    </React.Fragment>
			</div>
		)
	}
}
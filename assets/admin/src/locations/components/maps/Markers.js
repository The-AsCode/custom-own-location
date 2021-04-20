import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Markers extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Container class="marker-color-container">
					<Typography style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'34vw'}}>
						Marker Color
					</Typography>
				</Container>

				<Container class="marker-container">
					<Typography style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'34vw', marginLeft:"50%" }}>
						Marker container
					</Typography>
				</Container>
			</React.Fragment>
		)
	}
}
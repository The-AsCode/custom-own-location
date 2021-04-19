import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Markers extends React.Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Container class="marker-color-container">
					Color:
					<Typography style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'34vw'}}/>
				</Container>

				<Container class="marker-container">
					Marker container
					<Typography style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'34vw', marginLeft:"50%" }}/>
				</Container>
			</React.Fragment>
		)
	}
}
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Markers extends React.Component {
	render() {
		return (
			<div className="main-marker-container">
				<React.Fragment>
					<Container className="marker-color-container">
						<Typography style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'32vw'}}>
							Marker Color
						</Typography>
					</Container>

					<Container className="marker-container">
						<Typography style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'32vw'}}>
							Marker
						</Typography>
					</Container>
				</React.Fragment>
			</div>
		)
	}
}
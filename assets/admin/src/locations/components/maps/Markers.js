import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Markers extends React.Component {

  state = {
    iconType: {
      home: colDeshboard.icon_red_home,
      office: colDeshboard.icon_red_office,
      restaurant: colDeshboard.icon_red_restaurant,
    }
  }

	render() {
		return (
			<div className="main-marker-container">
				<React.Fragment>
					<Container className="marker-color-container">
						<Typography style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'32vw'}}>
							<div>
                <div onClick={this.handleRed}>Red</div>
                <div onClick={this.handleGreen}>Green</div>
                <div onClick={this.handleBlue}>Blue</div>
              </div>
						</Typography>
					</Container>

					<Container className="marker-container">
						<Typography style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'32vw'}}>
              <img src={this.state.iconType.home} height={56} width={45} />
              <img src={this.state.iconType.office} height={56} width={45} />
              <img src={this.state.iconType.restaurant} height={56} width={45} />
						</Typography>
					</Container>
				</React.Fragment>
			</div>
		)
	}

  handleRed = () => {
    this.setState ({
      iconType: {
        home: colDeshboard.icon_red_home,
        office: colDeshboard.icon_red_office,
        restaurant: colDeshboard.icon_red_restaurant,
      }
    });
  }
  handleGreen = () => {
    this.setState ({
      iconType: {
        home: colDeshboard.icon_green_home,
        office: colDeshboard.icon_green_office,
        restaurant: colDeshboard.icon_green_restaurant,
      }
    });
  }
  handleBlue = () => {
    this.setState ({
      iconType: {
        home: colDeshboard.icon_blue_home,
        office: colDeshboard.icon_blue_office,
        restaurant: colDeshboard.icon_blue_restaurant,
      }
    });
  }
}

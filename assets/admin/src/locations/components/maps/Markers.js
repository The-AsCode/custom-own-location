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
					<div className="marker-color-container">
						<Typography className="marker-color-section" style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'34.5vw'}}>
              <div className="marker-heading">
                Color:
              </div>
							<div className="marker-icon-color-section">
                <div className="marker-icon-color" onClick={this.handleRed} style={{ backgroundColor: '#C6302A', height: '35px', width:'35px'}} />
                <div className="marker-icon-color" onClick={this.handleGreen} style={{ backgroundColor: '#98C56A', height: '35px', width:'35px'}} />
                <div className="marker-icon-color" onClick={this.handleBlue} style={{ backgroundColor: '#508F9F', height: '35px', width:'35px'}} />
              </div>
						</Typography>
					</div>

					<div className="marker-container">
						<Typography className="marker-icon-container" style={{ backgroundColor: '#cfe8fc', height: '15vh', width:'34.5vw'}}>
              <div className="marker-heading">
                Marker:
              </div>
              <div>
                <img className='marker-icon' src={this.state.iconType.home} height={56} width={45} />
                <img className='marker-icon' src={this.state.iconType.office} height={56} width={45} />
                <img className='marker-icon' src={this.state.iconType.restaurant} height={56} width={45} />
              </div>
						</Typography>
					</div>
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

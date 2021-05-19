import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class ApiKeyFrom extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         keyValue : ''
      }
    }

    handleOnChange =(e)=> {
      this.setState({
        keyValue : e.target.value
      })
    }

  render() {
    return (
      <div>
          <h1 className="settings-heading">Settings</h1>
          <React.Fragment>
          <CssBaseline />
            <Container>
              <Typography className="from-container" component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh', width:"80vh"}}>
              <strong>Put your API key here</strong>

              <form method="post" onSubmit={this.submitFrom}>
                <div className="api-key-fld">
                  <TextField id="key-fld-id" onChange={this.handleOnChange} label="API Key" variant="outlined"/>
                </div>
                <div className="save-btn">
                  <Button variant="contained" color="primary" type="submit"> Save </Button>
                </div>
              </form>

             </Typography>
            </Container>
          </React.Fragment>
      </div>
    )
  }

  submitFrom = (event) => {
    event.preventDefault();
    var data = {
      'action': 'col_api_from_action',
      'key': this.state.keyValue,
    };

    console.log(data);

    jQuery.post(ajaxurl , data, function(response) {
      // alert('Got this from the server: ' + response);

    });
  }
}

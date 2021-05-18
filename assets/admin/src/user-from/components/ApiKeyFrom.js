import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class ApiKeyFrom extends React.Component {
  render() {
    return (
      <div>
          <h1 className="settings-heading">Settings</h1>
          <React.Fragment>
          <CssBaseline />
            <Container className="test">
              <Typography className="from-container" component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh', width:"80vh"}}>
              <strong>Put your API key here</strong>

              <from>
                <div className="api-key-fld">
                  <TextField id="outlined-search" label="API Key" variant="outlined" />
                </div>
                <div className="save-btn">
                  <Button variant="contained" color="primary"> Save </Button>
                </div>
              </from>

             </Typography>
            </Container>
          </React.Fragment>
      </div>
    )
  }
}

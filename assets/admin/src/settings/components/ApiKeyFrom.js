import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

class ApiKeyFrom extends React.Component {

  state = {
    apiKey: colSettings.api_key,
    successMessage: "",
  };

  handleOnChange = (e) => {
    this.setState({
      apiKey: e.target.value
    });
  }

  render() {
    return (
      <form method="post" onSubmit={this.submitFrom}>
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography variant="h5">API Key</Typography>
                <Typography color="textSecondary" variant="body2">
                  Enter your Google Map API key. This will be applied to all your maps.
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  onChange={this.handleOnChange}
                  variant="outlined"
                  fullWidth
                  placeholder="Enter API key"
                  value={this.state.apiKey}
                />
              </Grid>
            </Grid>

            <Box pt={2} pb={2}><Divider /></Box>

            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Box justifyContent="flex-end" display="flex">
                  <Button variant="contained" color="primary" type="submit">Save Changes</Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Snackbar
          open={!!this.state.successMessage}
          autoHideDuration={6000}
          onClose={this.handleAlertClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={this.handleAlertClose} severity="success">
            {this.state.successMessage}
          </Alert>
        </Snackbar>
      </form>
    )
  }

  submitFrom = (event) => {
    event.preventDefault();

    let data = {
      'action': 'col_settings_from_action',
      'api_key': this.state.apiKey,
      '_ajax_nonce': colSettings.nonce,
    };

    jQuery.post(ajaxurl, data, (response) => {
      this.setState({
        successMessage: response.data.message
      });
    });
  }

  handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      successMessage: ""
    });
  };


}

export default ApiKeyFrom;

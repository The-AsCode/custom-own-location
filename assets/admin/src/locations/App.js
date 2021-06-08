import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Grid, Button } from '@material-ui/core';
import MapList from './components/MapList';
import CreateMaps from './components/maps/CreateMaps';
import AddIcon from '@material-ui/icons/Add';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="col-base-wrapper">
          <Grid justify="space-between" container alignItems="center">
            <Grid item>
              <h1>Locations</h1>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                to="/createmap"
                component={ Link }
                startIcon={ <AddIcon /> }
              >Add New Location</Button>
            </Grid>
          </Grid>
          <Switch>
            <Route path="/createmap" exact component={ CreateMaps } />
            <MapList />
          </Switch>
        </div>
      </Router>
    );
  }
}

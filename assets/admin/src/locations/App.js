import React,{Component} from 'react';
import { HashRouter as Router, Route, Link, Switch,} from "react-router-dom";
import { Grid, Button } from '@material-ui/core';
import MapList from './components/MapList';
import MapsAutoComplete from './components/maps/MapsAutoComplete';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="col-base-wrapper">
          <Grid justify="space-between" container alignItems="center">
            <Grid item>
              <h1>Locations</h1>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary"><Link to="/createmap">Add New Location</Link></Button>
            </Grid>
          </Grid>
            <Switch>
              <Route path="/createmap" exact component={MapsAutoComplete}/>
              <MapList/>
            </Switch>
        </div>
      </Router>
    )
  }
}

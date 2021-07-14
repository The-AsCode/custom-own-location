import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import MapsAutoComplete from './maps/EditMap';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export default () => {
  const classes = useStyles();
  const [mapsName, setMapsData] = useState([]);
  
  useEffect(() => {
    let data = {
      'action': 'col_get_maps_action',
    };

    jQuery.post(ajaxurl, data, (response) => {
      let mapsInfo = response.data;
      setMapsData(mapsInfo);
    });

  }, [] );

  const deleteMap = (id) => {
    let data = {
      'action': 'col_delete_map_action',
      'map_id': id
    };

    jQuery.post(ajaxurl, data, (response) => {
      let mapsInfo = response.data;
      setMapsData(mapsInfo);
    });
  }

  if(mapsName[0]==undefined){
    return (
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            There is no map to show. You can create a map by clicking button below.
          </Typography>
        </CardContent>
        <CardActions>
            <Button
              variant="outlined"
              color="primary"
              to="/create-map"
              component={ Link }
            >Create Map</Button>
        </CardActions>
      </Card>
    );
  }
  else{
    return (
      <>
        <Grid justify="space-between" container alignItems="center" className="heading-space">
          <Grid item>
            <h1>Locations</h1>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              to="/create-map"
              component={ Link }
              startIcon={ <AddIcon /> }
            >Add New Location</Button>
          </Grid>
        </Grid>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><strong>Map Name</strong></TableCell>
                <TableCell><strong>Shortcode</strong></TableCell>
                <TableCell align="right"><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mapsName.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">{row.title}</TableCell>
                  <TableCell>[col-map id="{row.id}"]</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="primary"
                      to={'/edit-map/'+row.id}
                      component={ Link }
                    >Edit</Button>  
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick = {(e)=>deleteMap(row.id)}
                    >Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

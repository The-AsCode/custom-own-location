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


export default () => {

  const [mapsName, setMapsName] = useState([]);
  console.log(mapsName);
  
  useEffect(() => {
    let data = {
      'action': 'col_get_maps_action',
    };

    jQuery.post(ajaxurl, data, (response) => {
      // console.log(response.data[0]['title']);
      
      let mapsInfo = response.data;
      setMapsName(mapsInfo);

      // {mapsInfo.map((post_content) => (
      //   setMapsName(post_content['title'])
      // ));}

    });

  }, [] );

  const rows = [
    {name: "name1"},
    {name: "name3"},
    {name: "name2"},
    {name: "name5"}
  ];

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
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">Map Name</TableCell>
                <TableCell>Shortcode</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

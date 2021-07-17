import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export default function NoMapCard() {
  const classes = useStyles();
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
  )
}

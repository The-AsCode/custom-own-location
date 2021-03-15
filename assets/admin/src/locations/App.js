import { Grid, Button } from '@material-ui/core';
import MapsAutoComplete from './components/maps/MapsAutoComplete';

export default () => {
  return(
    <div className="col-base-wrapper">
      <Grid justify="space-between" container alignItems="center">
        <Grid item>
          <h1>Locations</h1>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">Add New Location</Button>
        </Grid>
      </Grid>
      
      <MapsAutoComplete />
    </div>
  );
}

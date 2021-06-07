import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CreateMaps from './maps/Markers.js'

export default () => {

  const rows = [
    {name: "name1"},
    {name: "name3"},
    {name: "name2"},
    {name: "name5"}
  ];

  return (
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
  );
}

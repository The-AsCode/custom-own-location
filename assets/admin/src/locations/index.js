import React from "react";
import ReactDOM from 'react-dom';
import { Loader } from "@googlemaps/js-api-loader"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import './style.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: null,
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}><App /></ThemeProvider>,
  document.getElementById( 'col-dashboard-page-app' )
);

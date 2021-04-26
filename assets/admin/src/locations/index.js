import React from "react";
import ReactDOM from 'react-dom';
import { Loader } from "@googlemaps/js-api-loader"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';
import './style.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: null,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById( 'col-dashboard-page-app' )
);

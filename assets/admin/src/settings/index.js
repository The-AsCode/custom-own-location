import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';

const theme = createMuiTheme({
  typography: {
    fontFamily: null,
    h5: {
      fontSize: '1.1rem',
      marginBottom: '5px',
    }
  },
  overrides: {
    MuiInputBase: {
      input: {
        height: '2.2rem',
      }
    },
    MuiSnackbar: {
      root: {
        zIndex: 999999,
      }
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('col-api-key-page')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import 'tachyons';
import green from '@material-ui/core/colors/green';
/*import { AuthProvider } from './Context/AuthContext';
import Login from './components/Login';*/

const theme = createTheme({
  palette: {
    primary: {
      main: '#555c70',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', 'Open Sans'].join(',')
  }


});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      {/*<Login/>*/}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


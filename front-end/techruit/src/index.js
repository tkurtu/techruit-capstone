import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from './themes';



ReactDOM.render(
  <MuiThemeProvider theme={themes}>
    <BrowserRouter > 
      <App /> 
    </BrowserRouter>
  </MuiThemeProvider>

, document.getElementById('root'));
serviceWorker.unregister();

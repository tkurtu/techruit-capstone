import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import themes from './themes';


ReactDOM.render(
  <MuiThemeProvider theme={themes}>
   {/* <Router history={history}> */}
    <BrowserRouter> 
      <App /> 
    </BrowserRouter>
    {/* </Router> */}
  </MuiThemeProvider>

, document.getElementById('root'));
serviceWorker.unregister();


import React from 'react';

import { ThemeProvider as MuiThemeProiver, withStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import { Button as MuiButton } from '@material-ui/core'

import theme from "./themes/codaisseur";

// <RemoveLater>
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
// </RemoveLater>

// This is the new theme provider.
export const ThemeProvider = (props) => (
  <MuiThemeProiver {...props} theme={theme}>
    <CssBaseline />
    {props.children}
  </MuiThemeProiver>
)

// Create custom component
export const Button = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(MuiButton);


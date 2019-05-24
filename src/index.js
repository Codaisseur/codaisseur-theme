import React from 'react';

import { ThemeProvider as MuiThemeProiver } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

// We only have 1 theme, KISS.
import * as theme from "./themes/codaisseur";

// <RemoveLater>
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// </RemoveLater>

// This is the new theme provider.
export const ThemeProvider = (props) => (
  <MuiThemeProiver {...props} theme={theme.default}>
    <CssBaseline />
    {props.children}
  </MuiThemeProiver>
)

export const Button = theme.Button
export const TextField = theme.TextField


// <RemoveLater>
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister();
// </RemoveLater>

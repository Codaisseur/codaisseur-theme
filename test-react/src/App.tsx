import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@material-ui/styles'
// import { createMuiTheme } from '@material-ui/core/styles'
import { theme } from '../../theme/build/index'
import { Typography } from '@material-ui/core'

const App: React.FC = () => {
  console.log('theme', theme)
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant='h1'>
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;

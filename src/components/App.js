import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Goal from '../containers/Goal'
import { addProgress } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
  <MuiThemeProvider>
    <Goal />
  </MuiThemeProvider>
);

export default App;

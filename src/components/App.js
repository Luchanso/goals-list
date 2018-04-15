import React from 'react';
import logo from '../logo.svg';
import GoalsList from '../containers/GoalsList'
import { addProgress } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const App = () => (
  <MuiThemeProvider>
    <GoalsList />
  </MuiThemeProvider>
);

export default App;

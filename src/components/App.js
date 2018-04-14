import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Goal from '../containers/Goal'
import { addProgress } from '../actions';

const App = () => (
  <div>
      <Goal />
  </div>
);

export default App;

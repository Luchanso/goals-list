import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoalComponent from './components/GoalComponent'

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{backgroundSize: window.screen.height + " " + window.screen.width}} >
        <GoalComponent/>
      </div>
    );
  }
}

export default App;

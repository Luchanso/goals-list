import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import goalsApp from './reducers/reducers'
import { createGoal, addProgress } from './actions';
 
export const store = createStore(goalsApp)
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(createGoal("test", 10, 20));
store.dispatch(addProgress(store.getState().goals[0], 5))
unsubscribe()



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

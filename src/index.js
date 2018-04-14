import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import goalsApp from './reducers/reducers'
import { createGoal, addProgress } from './actions';

export const store = createStore(goalsApp, { goals: [{ name: "test", progress: 10, threshold: 20 }, { name: "test", progress: 10, threshold: 20 }] })

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('root'));
registerServiceWorker();

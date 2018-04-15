/*global chrome*/
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Provider } from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from './utils/storage';
import goalsApp from './reducers/reducers'
import { createGoal, addProgress } from './actions';

// for production
// chrome.storage.sync.get('state', (obj) => {
//     const { state } = obj;
//     const initialState = JSON.parse(state || "{}");
    
//     const middlewares = applyMiddleware(thunk);
//     const enhancer = compose(
//       middlewares,
//       storage()
//     );
 
    const initialState = {
        goals: [
            {
                name: "Test 1", progress: 0, threshold: 7
                },
                {
                name: "Test 2", progress: 70, threshold: 3000
                },
                {
                name: "Test 3", progress: 170, threshold: 3000
                }
        ]
    }

    ReactDOM.render(
        <Provider store={createStore(goalsApp, initialState/*, enhancer*/)}>
            <App />
        </Provider>,
        document.getElementById('root'));
    registerServiceWorker();
// });

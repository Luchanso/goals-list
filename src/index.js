import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import goalsApp from './reducers/reducers'
import { createGoal, addProgress } from './actions';

export const store = createStore(goalsApp,
    {
        goals: [
            {
                name: "Сбросить 7 кг", progress: 0, threshold: 7
            },
            {
                name: "3000 физических единиц", progress: 70, threshold: 3000
            },
            {
                name: "3000 страниц", progress: 170, threshold: 3000
            },
            {
                name: "60 медитаций", progress: 2, threshold: 60
            },
            {
                name: "60 коммитов", progress: 7, threshold: 60
            }
        ]
    })

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

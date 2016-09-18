import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from './lib/redux';
import {Provider} from './lib/react-redux';
import todos from './Todo/reducers';

ReactDOM.render(
    <Provider store={createStore(todos)}>
        <App />
    </Provider>,
    document.getElementById('root')
);


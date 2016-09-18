import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from './lib/redux';
import todos from './Todo/reducers';

let store = createStore(todos) ;
const render = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();


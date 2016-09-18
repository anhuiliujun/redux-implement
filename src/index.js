import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from './lib/redux';
import {Provider} from './lib/react-redux';
import todos from './Todo/reducers';

let store = createStore(todos) ;
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
};
store.subscribe(render);
render();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  {createStore} from 'redux';
import appReducers from './reducers/index';
import {Provider} from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(appReducers, devToolsEnhancer(
    // Specify custom devTools options
));


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

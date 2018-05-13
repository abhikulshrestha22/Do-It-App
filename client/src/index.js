import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));
registerServiceWorker();

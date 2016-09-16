import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from 'config/coreReducers';
import routes from './config/coreRoutes';

const initialState = window.initialState;

const store = createStore(rootReducer, initialState);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={ history } routes={ routes }/>
    </Provider>,
document.getElementById('root'));

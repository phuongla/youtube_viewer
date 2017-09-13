import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import App from './containers/App';

import reducers from './reducers';

const middlewares = [ ReduxPromise ];
const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

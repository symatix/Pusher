import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import initState from './init'
import App from './components/App';

const store = createStore(reducers, initState, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

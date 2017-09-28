import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/App';

const initState = {
	auth: null,
	stats: {
		health: 100,
		drugs: {
			cocaine: 0,
			heroin: 0,
			lsd: 0,
			shrooms: 0,
			mdma: 0,
			speed: 0,
			hash: 0,
			weed: 0,
			pills: 0
		},
		money: {
			loanerDept: 0,
			bankDept: 0,
			bankDeposit: 0,
			cash: 2000
		},
		gun: {
			type: 0,
			damage: 0
		},
		pushers: 0
	},
	city: {
		name: 'Slums',
		raids: '40%',
		gangs: '25%',
		priceDrop: '10%',
	},
	prices: [
		{ name: "cocaine", price: 0 },
		{ name: "heroin", price: 0 },
		{ name: "lsd", price: 0 },
		{ name: "shrooms", price: 0 },
		{ name: "mdma", price: 0 },
		{ name: "speed", price: 0 },
		{ name: "hash", price: 0 },
		{ name: "weed", price: 0 },
		{ name: "pills", price: 0 }
	]
};

const store = createStore(reducers, initState, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

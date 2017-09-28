import { combineReducers } from 'redux'
import authReducer from './authReducer'
import statsReducer from './statsReducer'
import cityReducer from './cityReducer'
import priceReducer from './priceReducer'
import drugReducer from './drugReducer'

export default combineReducers({
	auth: authReducer,
	stats: statsReducer,
	city: cityReducer,
	prices: priceReducer,
	drug: drugReducer
});

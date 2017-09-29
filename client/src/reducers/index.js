import { combineReducers } from 'redux'
import authReducer from './authReducer'
import statsReducer from './statsReducer'
import cityReducer from './cityReducer'
import priceReducer from './priceReducer'
import drugReducer from './drugReducer'
import citiesReducer from './citiesReducer'

export default combineReducers({
	auth: authReducer,
	cities: citiesReducer,
	stats: statsReducer,
	city: cityReducer,
	prices: priceReducer,
	drug: drugReducer
});

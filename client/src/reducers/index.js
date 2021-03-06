import { combineReducers } from 'redux'
import authReducer from './authReducer'
import activeDrugReducer from './activeDrugReducer'
import activeCityReducer from './activeCityReducer'
import pusherReducer from './pusherReducer'
import moneyReducer from './moneyReducer'
import citiesReducer from './citiesReducer'
import drugsReducer from './drugsReducer'
import gunsReducer from './gunsReducer'
import storageReducer from './storageReducer'
import {
	crewReducer,
	healthReducer
} from './staticReducers';

export default combineReducers({
	auth: authReducer,
	activeDrug: activeDrugReducer,
	activeCity: activeCityReducer,
	pusher: pusherReducer,
	money: moneyReducer,
	cities: citiesReducer,
	drugs: drugsReducer,
	storage: storageReducer,
	guns: gunsReducer,
	crew: crewReducer,
	health: healthReducer
});

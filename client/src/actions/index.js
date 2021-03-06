import axios from 'axios'
import * as fn from './types'

/*** authReducer ***/
export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");
	dispatch({ type: fn.FETCH_USER, payload: res.data });
};

/*** activeCityReducer && citiesReducer ***/
export const calculatePrices = (drugs) => {
	return { type: fn.CALCULATE_PRICES, payload: drugs }
}

/*** activeCityReducer && citiesReducer && moneyReducer && pusherReducer ***/
export const changeActiveCity = (newCity, oldCity) => {
	return { type: fn.CHANGE_CITY, payload: { newCity, oldCity } }
}

/*** activeDrugReducer ***/
export const setActiveDrug = drug => {
	return { type: fn.SET_ACTIVE_DRUG, payload: drug }
}
/*** drugsReducer && moneyReducer && pusherReducer ***/
export const drugTansaction = drug => {
	return { type: fn.HANDLE_DRUG, payload: drug }
}

/*** moneyReducer ***/
export const moneyTransaction = newMoney => {
	return { type: fn.PAY_AMOUNT, payload: newMoney }
}

/*** activeCityReducer && moneyReducer && pusherReducer ***/
export const dealWithCrew = newCrew => {
	return { type: fn.DEAL_WITH_CREW, payload: newCrew }
}

/*** pusherReducer && moneyReducer ***/
export const selfCare = newSelf => {
	return { type: fn.HANDLE_SELF, payload: newSelf }
}

/*** gunsReducer && pusherReducer && moneyReducer ***/
export const buyGun = newGun => {
	return { type: fn.BUY_GUN, payload: newGun }
}

/*** storageReducer && pusherReducer && moneyReducer ***/
export const buyStorage = newStorage => {
	return { type: fn.BUY_STORAGE, payload: newStorage }
}

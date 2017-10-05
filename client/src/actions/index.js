import axios from 'axios'
import * as TYPE from './types'


export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({ type: TYPE.FETCH_USER, payload: res.data });
};

export const getCityList = () => async dispatch => {
	const cityList = await axios.get("/api/citylist")
	dispatch({ type: TYPE.GET_CITY_LIST, payload: cityList.data })
}

export const getPrices = (city) => async dispatch => {
	const res = await axios.post("/api/prices", city)
	dispatch({ type: TYPE.GET_PRICES, payload: res.data.prices })
}

export const getCity = (city) => async dispatch => {
	const res = await axios.post("/api/move", { name: city });
	dispatch({ type: TYPE.MOVE_CITY, payload: res.data })
}
export const updateDept = (money) => {
	money.loanerDept = Math.floor(money.loanerDept * 1.1);
	money.bankDept = Math.floor(money.bankDept * 1.03);
	return { type: TYPE.UPDATE_DEPT, payload: money }
}

export const buySell = (drug) => {
	return { type: TYPE.BUY_SELL, payload: drug }
}
export const updateStash = (newStash) => {
	return { type: TYPE.UPDATE_STASH, payload: newStash }
}

export const cityTransfers = (newMoney) => {
	console.log(newMoney)
	return { type: TYPE.PAY_LOANER, payload: { money: newMoney } }
}

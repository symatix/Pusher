import axios from 'axios'
import * as TYPE from './types'


export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({ type: TYPE.FETCH_USER, payload: res.data });
};

export const getPrices = (city) => async dispatch => {
	const res = await axios.post("/api/prices", city)
	dispatch({ type: TYPE.GET_PRICES, payload: res.data.prices })
}
export const buySell = (drug) => {
	return { type: TYPE.BUY_SELL, payload: drug }
}
export const updateStash = (newStash) => {
	return { type: TYPE.UPDATE_STASH, payload: newStash }
}

export default (action) => {
	const { cash, price, amount, stash, name, sell, pockets } = action;


	let newCash, newStash, newPocket;


	if (sell) {
		newCash = cash + price * amount;
		newStash = action.stash - amount;
		newPocket = pockets - amount;
	} else {
		newCash = cash - price * amount;
		newStash = stash + amount;
		newPocket = pockets + amount;
	}
	let newStats = { money: {}, drugs: {}, assets: { pockets: {} } };
	newStats.money.cash = newCash;
	newStats.drugs[name] = newStash;
	newStats.assets.pockets["current"] = newPocket;

	return newStats;
}

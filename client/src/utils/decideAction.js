import formatNumber from './formatNumber';

export default (fork) => {
	const { stash, cash, pockets, name, price, input } = fork;
	const txtSell = `Sell ${input} packages of ${name} for ${formatNumber(price*input)}`;
	const txtBuy = `Buy ${input} packages of ${name} for ${formatNumber(price*input)}`;
	const pocketsRemaining = pockets.total - pockets.current;
	let buyMax = Math.floor(cash / price);

	if (buyMax > pocketsRemaining) {
		buyMax = pocketsRemaining;
	}

	const text = stash[name] > 0 ? txtSell : txtBuy;
	const btnText = stash[name] > 0 ? "Sell" : "Buy";
	const max = stash[name] > 0 ? stash[name] : buyMax;

	return { text, btnText, max, name, pocketsRemaining }
}

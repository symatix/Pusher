import formatNumber from './formatNumber';

export default (action, money, amount) => {
	let text, btnText, max;

	if (action === 'loaner') {
		text = `Pay ${formatNumber(amount)} to the loaner shark!`;
		btnText = 'Pay up!';
		max = money.cash > money.loanerDept ? money.loanerDept : money.cash;
	}
	if (action === 'bank') {
		text = `Borrow ${formatNumber(amount)} from the bank at an affordable 3% interest rate!`;
		btnText = 'Borrow';
		max = 100000;
	}

	return { text, btnText, max }
}

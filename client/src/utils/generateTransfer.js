import formatPercentage from './formatPercentage';

export default (stats, transfer) => {
	const { cash, bank, deposit, loaner, days, action, interest } = stats;
	switch (transfer) {
	case "loaner":
		return {
			iconId: 'loaner',
			firstMax: loaner > cash ? cash : loaner,
			secondMax: 0,
			total: loaner,
			btnText: ["Pay"],
			cash: cash,
			action: action,
			description: `[ +${formatPercentage(interest.loaner)} daily interest rate ]`
		}

	case "bankDept":
		return {
			iconId: 'bankDept',
			firstMax: bank > cash ? cash : bank,
			secondMax: days < 30 ? days * 200 : 1000000, // maximum amount to borrow from bank
			total: bank,
			btnText: ["Pay", "Borrow"],
			cash: cash,
			action: action,
			description: `[ +${formatPercentage(interest.bank)} daily interest rate ]`
		}

	case "deposit":
		return {
			iconId: 'deposit',
			firstMax: cash,
			secondMax: deposit,
			total: cash,
			btnText: ["Deposit", "Withdraw"],
			action: action,
			description: `[ +${formatPercentage(interest.deposit)} daily interest rate ]`
		}

	default:
		return null;
	}
}

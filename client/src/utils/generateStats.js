import formatPercentage from './formatPercentage';
import formatPrice from './formatPrice';
import createNavDialog from './createNavDialog';
export default (stats) => {
	// extract all variables and format them for appropriate display
	const { actions } = stats;
	let { name, priceDrop, raids, cityCops, gangs, gangMembers, ownedCops, ownedThugs } = stats.activeCity;
	let { cash, bribe, salary, deposit, bank, loaner } = stats.money;
	let { days, health, possession, storage, gun, payrollCops } = stats.pusher;

	priceDrop = formatPercentage(priceDrop);
	raids = formatPercentage(raids);
	gangs = formatPercentage(gangs);

	cash = formatPrice(stats.money.cash);
	bribe = formatPrice(stats.money.bribe);
	salary = formatPrice(stats.money.salary);
	deposit = formatPrice(stats.money.deposit);
	bank = formatPrice(stats.money.bank);
	loaner = formatPrice(stats.money.loaner);

	const forNavDialog = {
		city: { priceDrop, raids, cityCops, gangs, gangMembers },
		money: { cash, bribe, salary, deposit, bank, loaner },
		pusher: { days, health, possession, storage, payrollCops, ownedCops, ownedThugs }
	}

	// geenerate all text needed for dialog components
	const text = createNavDialog(forNavDialog);
	const { city, money, pusher } = text;

	// create an object that has all the data and send it for rendering the NAV interface
	return {
		city: [
			{ type: "travel", data: name, label: "CITY", action: actions.travel },
			{ type: "info", data: priceDrop, label: "LUCKY DROP", action: actions.info, text: city.priceDrop },
			{ type: "info", data: raids, label: "RAIDS", action: actions.info, text: city.raids },
			{ type: "info", data: cityCops, label: "COPS", action: actions.info, text: city.cityCops },
			{ type: "info", data: gangs, label: "GANGS", action: actions.info, text: city.gangs },
			{ type: "info", data: gangMembers, label: "GANG MEMBERS", action: actions.info, text: city.gangMembers },
        ],
		money: [
			{ type: "info", data: cash, label: "CASH", action: actions.info, text: money.cash },
			{ type: "info", data: bribe, label: "BRIBE", action: actions.info, text: money.bribe },
			{ type: "info", data: salary, label: "CREW SALARY", action: actions.info, text: money.salary },
			{ type: "transaction", data: deposit, label: "DEPOSIT", action: actions.transfer, text: "deposit" },
			{ type: "transaction", data: bank, label: "BANK DEPT", action: actions.transfer, text: "bank" },
			{ type: "transaction", data: loaner, label: "LOANER SHARK", action: actions.transfer, text: "loaner" }
        ],
		pusher: [
			{ type: "info", data: days, label: "DAYS ACTIVE", action: actions.info, text: pusher.days },
			{ type: "hospital", data: `${health} | 100`, label: "HEALTH", action: "", text: "hospital" },
			{ type: "transaction", data: `${possession} | ${storage}`, label: "POSSESSION | STORAGE", action: "", text: "storage" },
			{ type: "transaction", data: `${gun[2]}`, label: "GUNS", action: "", text: "guns" },
			{ type: "people", data: `${ownedCops}`, label: "COPS", action: "", text: "cops" },
			{ type: "people", data: `${ownedThugs}`, label: "THUGS", action: "", text: "thugs" },
        ]
	}
}

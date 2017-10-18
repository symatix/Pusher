import formatPercentage from './formatPercentage';
import formatPrice from './formatPrice';

export default (stats) => {
	// extract all variables and format them for appropriate display
	const { actions } = stats;
	let { name, luckyDrop, wickedRaid, busts, robbery, cops, thugs } = stats.activeCity;
	let { cash, bribe, salary, deposit, bank, loaner } = stats.money;
	let { days, health, possession, storage, gun } = stats.pusher;
	let crewTotal;

	luckyDrop = luckyDrop !== stats.activeCity.default.luckyDrop ? `${formatPercentage(luckyDrop)} [ thugs ]` : formatPercentage(luckyDrop);
	wickedRaid = wickedRaid !== stats.activeCity.default.wickedRaid ? `${formatPercentage(wickedRaid)} [ cops ]` : formatPercentage(wickedRaid);
	busts = busts !== stats.activeCity.default.busts ? `${formatPercentage(busts)} [ thugs ]` : formatPercentage(busts);
	robbery = robbery !== stats.activeCity.default.robbery ? `${formatPercentage(robbery)} [ cops ]` : formatPercentage(robbery);
	crewTotal = (thugs.owned + cops.owned).toString();

	cash = formatPrice(stats.money.cash);
	bribe = formatPrice(stats.money.bribe);
	salary = formatPrice(stats.money.salary);
	deposit = formatPrice(stats.money.deposit);
	bank = formatPrice(stats.money.bank);
	loaner = formatPrice(stats.money.loaner);

	// create an object that has all the data and send it for rendering the NAV interface
	return {
		city: [
			{ type: "travel", data: name, label: "TRAVEL", action: actions.travel, influence: "" },
			{ type: "luckyDrop", data: luckyDrop, label: "LUCKY DROP", action: actions.dialog, influence: "" },
			{ type: "wickedRaid", data: wickedRaid, label: "WICKED RAID", action: actions.dialog, influence: "" },
			{ type: "busts", data: busts, label: "BUSTS", action: actions.dialog, influence: "" },
			{ type: "robbery", data: robbery, label: "ROBBERY", action: actions.dialog, influence: "" },
			{ type: "crewTotal", data: crewTotal, label: "CREW", action: actions.dialog, influence: "" },
        ],
		money: [
			{ type: "cash", data: cash, label: "CASH", action: actions.dialog, influence: "" },
			{ type: "bribe", data: bribe, label: "BRIBE", action: actions.dialog, influence: "" },
			{ type: "salary", data: salary, label: "CREW SALARY", action: actions.dialog, influence: "" },
			{ type: "deposit", data: deposit, label: "DEPOSIT", action: actions.transfer, influence: "" },
			{ type: "bankDept", data: bank, label: "BANK DEPT", action: actions.transfer, influence: "" },
			{ type: "loaner", data: loaner, label: "LOANER SHARK", action: actions.transfer, text: "loaner", influence: "" }
        ],
		pusher: [
			{ type: "info", data: days, label: "DAYS ACTIVE", action: "", influence: "" },
			{ type: "hospital", data: `${health} | 100`, label: "HEALTH", action: actions.dialog, influence: "" },
			{ type: "storage", data: `${possession} | ${storage}`, label: "POSSESSION | STORAGE", action: actions.dialog, influence: "" },
			{ type: "gun", data: `${gun[0]} - ${gun[1]}`, label: "GUN DAMAGE", action: actions.dialog, influence: "" },
			{ type: "cops", data: `${cops.owned}`, label: "COPS", action: actions.dialog, influence: "" },
			{ type: "thugs", data: `${thugs.owned}`, label: "THUGS", action: actions.dialog, influence: "" },
        ]
	}
}

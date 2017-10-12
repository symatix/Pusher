import formatPercentage from './formatPercentage';
import formatPrice from './formatPrice';
import createNavDialog from './createNavDialog';
export default (stats) => {
	// extract all variables and format them for appropriate display
	const { actions } = stats;
	let { name, priceDrop, raids, cityCops, gangs, gangMembers, cops, thugs } = stats.activeCity;
	let { cash, bribe, salary, deposit, bank, loaner } = stats.money;
	let { days, health, possession, storage, gun } = stats.pusher;

	// changing color if there is influence
	const influenceLuck = () =>{
		if (cops.drug || thugs.drug){
			return formatPercentage((cops.drug + thugs.drug)/100);
		}
		return false;
	}
	const influenceCops = () =>{
		if (cops.enemy){ return formatPercentage((cops.enemy) / 100) }
		return false;
	}
	const influenceThugs = () =>{
		if (thugs.enemy){ return formatPercentage((thugs.enemy) / 100) }
		return false;
	}
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
		pusher: { days, health, possession, storage, cops, thugs }
	}
	// geenerate all text needed for dialog components
	const text = createNavDialog(forNavDialog);
	const { city, money, pusher } = text;



	// create an object that has all the data and send it for rendering the NAV interface
	return {
		city: [
			{ type: "travel", data: name, label: "CITY", action: actions.travel, influence:""  },
			{ type: "info", data: priceDrop, label: "LUCKY DROP", action: actions.info, text: city.priceDrop, influence:influenceLuck() },
			{ type: "info", data: raids, label: "RAIDS", action: actions.info, text: city.raids, influence:influenceCops() },
			{ type: "info", data: cityCops, label: "COPS", action: actions.info, text: city.cityCops, influence:"" },
			{ type: "info", data: gangs, label: "ROBBERY", action: actions.info, text: city.gangs, influence:influenceThugs() },
			{ type: "info", data: gangMembers, label: "GANG MEMBERS", action: actions.info, text: city.gangMembers, influence:"" },
        ],
		money: [
			{ type: "info", data: cash, label: "CASH", action: actions.info, text: money.cash, influence:"" },
			{ type: "info", data: bribe, label: "BRIBE", action: actions.info, text: money.bribe, influence:"" },
			{ type: "info", data: salary, label: "CREW SALARY", action: actions.info, text: money.salary, influence:"" },
			{ type: "transaction", data: deposit, label: "DEPOSIT", action: actions.transfer, text: "deposit", influence:"" },
			{ type: "transaction", data: bank, label: "BANK DEPT", action: actions.transfer, text: "bank", influence:"" },
			{ type: "transaction", data: loaner, label: "LOANER SHARK", action: actions.transfer, text: "loaner", influence:"" }
        ],
		pusher: [
			{ type: "info", data: days, label: "DAYS ACTIVE", action: actions.info, text: pusher.days, influence:"" },
			{ type: "hospital", data: `${health} | 100`, label: "HEALTH", action: "", text: "hospital", influence:"" },
			{ type: "storage", data: `${possession} | ${storage}`, label: "POSSESSION | STORAGE", action: "", text: "storage", influence:"" },
			{ type: "gun", data: `${gun[2]}`, label: "GUNS", action: "", text: "guns", influence:"" },
			{ type: "cops", data: `${cops.owned}`, label: "COPS", action: actions.pusher, text: "cops", influence:"" },
			{ type: "thugs", data: `${thugs.owned}`, label: "THUGS", action: actions.pusher, text: "thugs", influence:"" },
        ]
	}
}

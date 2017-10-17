// first card
import luckyDrop from './generateDialog/luckyDrop';
import wickedRaid from './generateDialog/wickedRaid';
import busts from './generateDialog/busts';
import robbery from './generateDialog/robbery';
import crewTotal from './generateDialog/crewTotal';
// second card
import cashFn from './generateDialog/cash';
import bribe from './generateDialog/bribe';
import salary from './generateDialog/salary';
// third card
import hospital from './generateDialog/hospital';
import gunsFn from './generateDialog/guns';
import storageFn from './generateDialog/storage';
import copsFn from './generateDialog/cops';
import thugsFn from './generateDialog/thugs';

export default (about, state) => {
	const { activeCity, pusher, money, crew, guns, storage, health, action } = state;
	const { thugs, cops } = crew;
	const { cash } = money;

	switch (about) {

	case "luckyDrop":
		return luckyDrop(activeCity, thugs.drug);

	case "wickedRaid":
		return wickedRaid(activeCity, cops.drug)

	case "busts":
		return busts(activeCity, thugs.enemy)

	case "robbery":
		return robbery(activeCity, cops.enemy)

	case "crewTotal":
		return crewTotal(
			activeCity.cops.owned,
			activeCity.thugs.owned,
			pusher.cops,
			pusher.thugs
		)

	case "cash":
		return cashFn(money)

	case "bribe":
		return bribe(activeCity.cops.owned, activeCity.cops.owned * crew.cops.expense)

	case "salary":
		return salary(activeCity.thugs.owned, activeCity.thugs.owned * crew.thugs.expense)

	case "hospital":
		return hospital(health.cost, cash, pusher.health, action)

	case "gun":
		return gunsFn(guns, cash, pusher.gun, action);

	case "storage":
		return storageFn(storage, cash, pusher.storage, action);

	case "cops":
		return copsFn(activeCity, crew.cops, pusher, money, action);

	case "thugs":
		return thugsFn(activeCity, crew.thugs, pusher, money, action);

	default:
		return null;
	}
}

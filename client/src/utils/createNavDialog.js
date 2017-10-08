export default (text) => {
	const { city, money, pusher } = text;
	return {
		city: {
			raids: `There is a ${city.raids} chance that cops bust on your drop. Bribe them to back off. Maybe even a big drop appears then!`,
			priceDrop: `There is a ${city.priceDrop} chance there will be a good drop in this city. More cops on the payroll, more chance a good merchant appears.`,
			cityCops: `${city.cityCops} cops operate this area. Bribe them or dispose them!`,
			gangs: `There is a ${city.gangs} chance that a rival gang will attack you! To lower the odds, hire some of the thugs and attack them first!`,
			gangMembers: `There are ${city.gangMembers} gang mebers in this town.. Kill them or hire them to work for you!`,
		},
		money: {
			cash: `If you didn't know, you have ${money.cash}. Try better.`,
			bribe: `Daily ${money.bribe} goes to cops to get of your back.. If you want to pay lower, you can always...diss them... But that will increase raids!`,
			salary: `Your crew works for ${money.salary} daily. If that is too much, accidents can happend... But voids bring chaos, so look out for more gang violence!`,
		},
		pusher: {
			days: `You are in business for many, many days. ${pusher.days} to be precise.`
		}
	}
}

const initState = {
	auth: null,
	stats: {
		health: 100,
		drugs: {
			cocaine: 0,
			heroin: 0,
			lsd: 0,
			shrooms: 0,
			mdma: 0,
			speed: 0,
			hash: 0,
			weed: 0,
			pills: 0
		},
		money: {
			loanerDept: 0,
			bankDept: 0,
			bankDeposit: 0,
			cash: 2000
		},
		assets: {
			gun: {
				type: 0,
				damage: 0
			},
			pushers: {
				thugs: 0,
				pushers: 0
			},
			pockets: {
				total: 100,
				current: 0,
			}
		},
	},
	city: {
		name: 'Zagreb',
		raids: '40%',
		gangs: '25%',
		priceDrop: '10%',
	},
	cities: [],
	prices: [
		{ name: "cocaine", price: 0 },
		{ name: "heroin", price: 0 },
		{ name: "lsd", price: 0 },
		{ name: "shrooms", price: 0 },
		{ name: "mdma", price: 0 },
		{ name: "speed", price: 0 },
		{ name: "hash", price: 0 },
		{ name: "weed", price: 0 },
		{ name: "pills", price: 0 }
	]
};
export default initState

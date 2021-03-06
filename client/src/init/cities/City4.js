export default {
	name: 'Vukovar',
	status: 'recruit',
	busts: 0.4,
	robbery: 0.25,
	luckyDrop: 0.2,
	wickedRaid: 0.3,
	default: {
		busts: 0.4,
		robbery: 0.25,
		luckyDrop: 0.2,
		wickedRaid: 0.3,
	},
	cops: {
		owned: 0,
		enemy: 0,
		drug: 0
	},
	thugs: {
		owned: 0,
		enemy: 0,
		drug: 0
	},
	prices: [
		{
			name: 'Cocaine',
			min: 20000,
			max: 26000
        },
		{
			name: 'Heroin',
			min: 5000,
			max: 18000
        },
		{
			name: 'ACID',
			min: 350,
			max: 1050
        },
		{
			name: 'Shrooms',
			min: 200,
			max: 800
        },
		{
			name: 'MDMA',
			min: 500,
			max: 1100
        },
		{
			name: 'Speed',
			min: 300,
			max: 900
        },
		{
			name: 'Hash',
			min: 100,
			max: 350
        },
		{
			name: 'Weed',
			min: 50,
			max: 250
        },
		{
			name: 'Pills',
			min: 5,
			max: 50
        }
    ]
}

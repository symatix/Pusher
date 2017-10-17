export default {
	name: 'Zagreb',
	status: 'loaner',
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
			min: 23000,
			max: 30000
        },
		{
			name: 'Heroin',
			min: 7000,
			max: 19000
        },
		{
			name: 'ACID',
			min: 400,
			max: 1200
        },
		{
			name: 'Shrooms',
			min: 300,
			max: 1000
        },
		{
			name: 'MDMA',
			min: 600,
			max: 1200
        },
		{
			name: 'Speed',
			min: 200,
			max: 800
        },
		{
			name: 'Hash',
			min: 100,
			max: 300
        },
		{
			name: 'Weed',
			min: 50,
			max: 200
        },
		{
			name: 'Pills',
			min: 5,
			max: 50
        }
    ]
}

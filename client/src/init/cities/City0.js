export default {
	name: 'Split',
	status: 'shop',
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
			min: 17000,
			max: 24000
        },
		{
			name: 'Heroin',
			min: 4000,
			max: 17000
        },
		{
			name: 'ACID',
			min: 500,
			max: 1400
        },
		{
			name: 'Shrooms',
			min: 500,
			max: 1200
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
			max: 500
        },
		{
			name: 'Weed',
			min: 100,
			max: 400
        },
		{
			name: 'Pills',
			min: 5,
			max: 50
        }
    ]
}

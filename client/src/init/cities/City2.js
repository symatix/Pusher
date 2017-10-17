export default {
	name: 'Dubrovnik',
	status: 'bank',
	busts: 0.4,
	robbery: 0.25,
	luckyDrop: 0.2,
	wickedRaid: 0.3,
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
			min: 22000,
			max: 28000
        },
		{
			name: 'Heroin',
			min: 8000,
			max: 15000
        },
		{
			name: 'ACID',
			min: 700,
			max: 1800
        },
		{
			name: 'Shrooms',
			min: 800,
			max: 1400
        },
		{
			name: 'MDMA',
			min: 900,
			max: 1600
        },
		{
			name: 'Speed',
			min: 400,
			max: 1000
        },
		{
			name: 'Hash',
			min: 200,
			max: 700
        },
		{
			name: 'Weed',
			min: 200,
			max: 600
        },
		{
			name: 'Pills',
			min: 20,
			max: 70
        }
    ]
}

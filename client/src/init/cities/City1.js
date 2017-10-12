export default {
	name: 'Zagreb',
	status: 'loaner',
	raids: 0.4,
	cityCops: 27,
	gangs: 0.25,
	gangMembers: '45',
	priceDrop: 0.1,
	cops:{
		owned:0,
		enemy:0,
		drug:0
	},
	thugs:{
		owned:0,
		enemy:0,
		drug:0
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

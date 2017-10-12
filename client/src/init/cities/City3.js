export default {
	name: 'Rijeka',
	status: 'hospital',
	raids: 0.35,
	cityCops: 34,
	gangs: 0.15,
	gangMembers: 25,
	priceDrop: 0.4,
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
			min: 24000,
			max: 26000
        },
		{
			name: 'Heroin',
			min: 4000,
			max: 17000
        },
		{
			name: 'ACID',
			min: 400,
			max: 1000
        },
		{
			name: 'Shrooms',
			min: 200,
			max: 800
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

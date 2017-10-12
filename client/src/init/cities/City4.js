export default {
	name: 'Vukovar',
	status: 'recruit',
	raids: 0.30,
	cityCops: 41,
	gangs: 0.24,
	gangMembers: 40,
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

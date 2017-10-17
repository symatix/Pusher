/***
 * config
 * - change by amount if added or subtracted crew member
 *
 ***/
export default {
	healthCost: 500,
	storage: { // [name]:[+pusher.storage, cost]
		pocket: [ 5, 5000 ],
		boxes: [ 25, 100000 ],
		storage: [ 50, 500000 ],
		warehouse: [ 100, 2000000 ]
	},
	guns: { // [name]:[<params>]
		knife: {
			min: 1,
			max: 90,
			cost: 5000,
		},
		gun: {
			min: 25,
			max: 50,
			cost: 150000,
		},
		rifle: {
			min: 40,
			max: 80,
			cost: 500000,
		},
		sniper: {
			min: 100,
			max: 100,
			cost: 1000000
		}
	},
	cops: {
		expense: 1000, // daily price
		recruit: 10000, // price for 1 member
		dispose: 25000, // price for disposing 1 member
		enemy: 0.01, // gang violence
		drug: 0.01, // single drug price up
		priceDrop: 0.01, // global single drug price up
	},
	thugs: {
		expense: 1000,
		recruit: 10000,
		dispose: 25000,
		enemy: 0.01,
		drug: 0.01,
		priceDrop: 0.01,
	}
}

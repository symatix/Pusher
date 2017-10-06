import City0 from './City0'
import City1 from './City1'
import City2 from './City2'
import City3 from './City3'
import City4 from './City4'

export default {
	auth: null,
	activeDrug: {},
	activeCity: City0,
	pusher: {
		days: 1,
		health: 100,
		storage: 100,
		gun: [0, 0, 0], // damage [min, max]
		pushers: [0, 0, 0], // income [min, max, pushers]
		thugs: [0, 0, 0], // damage [min, max, thugs]
	},
	money: {
		cash: 2000,
		loaner: 5000,
		bank: 0,
		deposit: 0
	},
	cities: [
		City0, City1, City2, City3, City4
	],
	drugs: [
		{
			name: 'Cocaine',
			price: 24266,
			possession: 0
		}, {
			name: 'Heroin',
			price: 5926,
			possession: 0
		}, {
			name: 'ACID',
			price: 430,
			possession: 0
		}, {
			name: 'Shrooms',
			price: 724,
			possession: 0
		}, {
			name: 'MDMA',
			price: 887,
			possession: 0
		}, {
			name: 'Speed',
			price: 360,
			possession: 0
		}, {
			name: 'Hash',
			price: 201,
			possession: 0
		}, {
			name: 'Weed',
			price: 89,
			possession: 0
		}, {
			name: 'Pills',
			price: 14,
			possession: 0
		}
	]
}
/*
UPDATE STATE OF DRUGS

var arr = [{id: 1, name: 'Person 1'}, {id:2, name:'Person 2'}];

// Find item index using _.findIndex (thanks @AJ Richardson for comment)
var index = _.findIndex(arr, {id: 1});

// Replace item at index using native splice
arr.splice(index, 1, {id: 100, name: 'New object.'});

// 'console.log' result
document.write(JSON.stringify( arr ));
*/

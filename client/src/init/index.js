import drugsArr from './drugs'
import pusher from './pusher'
import crew from './crew'
import guns from './guns'
import storage from './storage'
import money from './money'
import health from './health'
import City0 from './cities/City0'
import City1 from './cities/City1'
import City2 from './cities/City2'
import City3 from './cities/City3'
import City4 from './cities/City4'

export default {
	auth: null,
	activeDrug: {},
	activeCity: City0,
	pusher: pusher,
	money: money,
	cities: [ City0, City1, City2, City3, City4 ],
	drugs: drugsArr,
	// below reducers are static and ar in charge of game config (prices, damage, etc..)
	crew: crew,
	guns: guns,
	storage: storage,
	health: health
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

import formatPrice from '../formatPrice';

const gunsFn = (guns, cash, ownedGun, action) => {
	return {
		iconLabel: 'gun',
		label: 'guns',
		content: [
			{ // knife
				icon: `${guns[0].type}`,
				main: formatPrice(guns[0].cost),
				sub: guns[0].owned ? 'OWNED' : `DAMAGE`,
				stats: `${guns[0].damage[0]} - ${guns[0].damage[1]}`,
				action: () => action('guns', {
					money: { cash: cash - guns[0].cost },
					guns: { type: guns[0].type, owned: true },
					pusher: { gun: ownedGun[0] > guns[0].damage[0] ? ownedGun : guns[0].damage }
				}),
				alert: guns[0].owned || cash < guns[0].cost || ownedGun[0] > guns[0].damage[0]
			},
			{ // gun
				icon: `${guns[1].type}`,
				main: formatPrice(guns[1].cost),
				sub: guns[1].owned ? 'OWNED' : `DAMAGE`,
				stats: `${guns[1].damage[0]} - ${guns[1].damage[1]}`,
				action: () => action('guns', {
					money: { cash: cash - guns[1].cost },
					guns: { type: guns[1].type, owned: true },
					pusher: { gun: ownedGun[0] > guns[1].damage[0] ? ownedGun : guns[1].damage }
				}),
				alert: guns[1].owned || cash < guns[1].cost || ownedGun[0] > guns[1].damage[0]
			},
			{ // rifle
				icon: `${guns[2].type}`,
				main: formatPrice(guns[2].cost),
				sub: guns[2].owned ? 'OWNED' : `DAMAGE`,
				stats: `${guns[2].damage[0]} - ${guns[2].damage[1]}`,
				action: () => action('guns', {
					money: { cash: cash - guns[2].cost },
					guns: { type: guns[2].type, owned: true },
					pusher: { gun: ownedGun[0] > guns[2].damage[0] ? ownedGun : guns[2].damage }
				}),
				alert: guns[2].owned || cash < guns[2].cost || ownedGun[0] > guns[2].damage[0]
			},
			{ // sniper
				icon: `${guns[3].type}`,
				main: formatPrice(guns[3].cost),
				sub: guns[3].owned ? 'OWNED' : `DAMAGE`,
				stats: `${guns[3].damage[0]}`,
				action: () => action('guns', {
					money: { cash: cash - guns[3].cost },
					guns: { type: guns[3].type, owned: true },
					pusher: { gun: ownedGun[0] > guns[3].damage[0] ? ownedGun : guns[3].damage }
				}),
				alert: guns[3].owned || cash < guns[3].cost
			},
		]
	}
}
export default gunsFn;

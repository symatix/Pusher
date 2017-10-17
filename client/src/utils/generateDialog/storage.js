import formatPrice from '../formatPrice';

const storageFn = (storage, cash, pusherStorage, action) => {
	return {
		iconLabel: 'storage',
		label: 'storage',
		content: [
			{
				icon: 'pockets',
				main: formatPrice(storage[0].cost),
				sub: cash < storage[0].cost ? 'PRICEY' : `STORAGE`,
				stats: storage[0].owned ? 'OWNED' : `+ ${storage[0].storage}`,
				action: () => action('storage', {
					money: { cash: cash - storage[0].cost },
					storage: { type: storage[0].type, owned: true },
					pusher: { storage: pusherStorage + storage[0].storage }
				}),
				alert: storage[0].owned || cash < storage[0].cost
			},
			{
				icon: 'boxes',
				main: formatPrice(storage[1].cost),
				sub: cash < storage[1].cost ? 'PRICEY' : `STORAGE`,
				stats: storage[1].owned ? 'OWNED' : `+ ${storage[1].storage}`,
				action: () => action('storage', {
					money: { cash: cash - storage[1].cost },
					storage: { type: storage[1].type, owned: true },
					pusher: { storage: pusherStorage + storage[1].storage }
				}),
				alert: storage[1].owned || cash < storage[1].cost
			},
			{
				icon: 'storageShelfs',
				main: formatPrice(storage[2].cost),
				sub: cash < storage[2].cost ? 'PRICEY' : `STORAGE`,
				stats: storage[2].owned ? 'OWNED' : `+ ${storage[2].storage}`,
				action: () => action('storage', {
					money: { cash: cash - storage[2].cost },
					storage: { type: storage[2].type, owned: true },
					pusher: { storage: pusherStorage + storage[2].storage }
				}),
				alert: storage[2].owned || cash < storage[2].cost
			},
			{
				icon: 'warehouse',
				main: formatPrice(storage[3].cost),
				sub: cash < storage[3].cost ? 'PRICEY' : `STORAGE`,
				stats: storage[3].owned ? 'OWNED' : `+ ${storage[3].storage}`,
				action: () => action('storage', {
					money: { cash: cash - storage[3].cost },
					storage: { type: storage[3].type, owned: true },
					pusher: { storage: pusherStorage + storage[3].storage }
				}),
				alert: storage[3].owned || cash < storage[3].cost
			},
		]
	}
}
export default storageFn;

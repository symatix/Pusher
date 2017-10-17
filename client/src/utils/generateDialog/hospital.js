import formatPrice from '../formatPrice';

const hospital = (cost, cash, health, action) => {
	const fullHealth = (100 - health) * cost
	return {
		iconLabel: 'hospital',
		label: 'hospital',
		content: [
			{
				icon: 'health-1',
				main: formatPrice(cost),
				sub: cash < cost ? 'PRICEY' : `HEAL`,
				stats: '+1',
				action: () => action('hospital', {
					money: { cash: cash - cost },
					pusher: { health: health + 1 }
				}),
				alert: cash < cost ? true : false,
			},
			{
				icon: 'hospital',
				main: formatPrice(fullHealth),
				sub: cash < fullHealth ? 'PRICEY' : 'HEAL',
				stats: '100/100',
				action: () => action('hospital', {
					money: { cash: cash - fullHealth },
					pusher: { health: 100 }
				}),
				alert: cash < fullHealth ? true : false,
			},
		]
	}
}
export default hospital;

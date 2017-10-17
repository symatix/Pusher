import formatPrice from '../formatPrice';

const copsFn = (activeCity, conf, pusher, money, action) => {
	const { cops } = activeCity;
	return {
		iconLabel: 'cops',
		label: 'cops',
		content: [
			{
				iconTop: true,
				icon: 'cops',
				sub: 'PAYROLL',
				stats: `${cops.owned}`,
				},
			{
				iconTop: true,
				icon: 'funds',
				sub: 'DAILY EXPENSE',
				stats: `${formatPrice(conf.expense * cops.owned)}`,
				},
			{
				iconTop: true,
				icon: 'recruit',
				main: formatPrice(conf.recruit),
				sub: 'DAILY EXPENSE',
				stats: `+ ${formatPrice(conf.expense)}`,
				action: () => action('crew', {
					activeCity: {
						cops: { owned: cops.owned + 1, drug: cops.drug + 1 },
						wickedRaid: activeCity.wickedRaid + conf.drug
					},
					money: { cash: money.cash - conf.recruit, bribe: money.bribe + conf.expense },
					pusher: { cops: pusher.cops + 1, didCops: true },
				}),
				alert: money.cash < conf.recruit || pusher.didCops === true
				},
			{
				iconTop: true,
				icon: 'dispose',
				main: formatPrice(conf.dispose),
				sub: 'DISPOSE',
				stats: 'ONE',
				action: () => action('crew', {
					activeCity: {
						cops: { owned: cops.owned - 1, drug: cops.drug - 1 },
						wickedRaid: activeCity.wickedRaid - conf.drug
					},
					money: { cash: money.cash - conf.dispose, bribe: money.bribe - conf.expense },
					pusher: { cops: pusher.cops - 1, didCops: true },
				}),
				alert: money.cash < conf.dispose || pusher.didCops === true
				}
			]
	}
}
export default copsFn;

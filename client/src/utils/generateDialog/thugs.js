import formatPrice from '../formatPrice';

const thugsFn = (activeCity, conf, pusher, money, action) => {
	const { thugs } = activeCity;
	return {
		iconLabel: 'thugs',
		label: 'thugs',
		content: [
			{
				iconTop: true,
				icon: 'thugs',
				sub: 'PAYROLL',
				stats: `${thugs.owned}`,
				},
			{
				iconTop: true,
				icon: 'funds',
				sub: 'DAILY EXPENSE',
				stats: `${formatPrice(conf.expense * thugs.owned)}`,
				},
			{
				iconTop: true,
				icon: 'recruit',
				main: formatPrice(conf.recruit),
				sub: 'DAILY EXPENSE',
				stats: `+ ${formatPrice(conf.expense)}`,
				action: () => action('crew', {
					activeCity: {
						thugs: { owned: thugs.owned + 1, drug: thugs.drug + 1 },
						luckyDrop: activeCity.luckyDrop + conf.drug
					},
					money: { cash: money.cash - conf.recruit, salary: money.bribe + conf.expense },
					pusher: { thugs: pusher.thugs + 1, didThugs: true },
				}),
				alert: money.cash < conf.recruit || pusher.didThugs === true
				},
			{
				iconTop: true,
				icon: 'dispose',
				main: formatPrice(conf.dispose),
				sub: 'DISPOSE',
				stats: 'ONE',
				action: () => action('crew', {
					activeCity: {
						thugs: { owned: thugs.owned - 1, drug: thugs.drug - 1 },
						luckyDrop: activeCity.luckyDrop - conf.drug
					},
					money: { cash: money.cash - conf.dispose, salary: money.bribe - conf.expense },
					pusher: { thugs: pusher.thugs - 1, didThugs: true },
				}),
				alert: money.cash < conf.dispose || pusher.didThugs === true
				}
			]
	}
}
export default thugsFn;

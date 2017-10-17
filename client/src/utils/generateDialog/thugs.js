import formatPrice from '../formatPrice';

const thugsFn = (thugs, conf) => {
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
				action: () => console.log("recruit"),
			},
			{
				iconTop: true,
				icon: 'dispose',
				main: formatPrice(conf.dispose),
				sub: 'DISPOSE',
				stats: 'ONE',
				action: () => console.log("dispose"),
			},
		]
	}
}
export default thugsFn;

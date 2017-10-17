import formatPrice from '../formatPrice';

const copsFn = (cops, conf) => {
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
export default copsFn;

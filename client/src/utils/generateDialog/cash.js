import formatPrice from '../formatPrice';

const cash = (stats) => {

	return {
		iconLabel: 'funds',
		label: 'Cash',
		content: [
			{
				iconTop: true,
				icon: 'cash',
				main: formatPrice(stats.cash),
				stats: 'TOTAL CASH',
			},
			{
				iconTop: true,
				icon: 'expense',
				main: formatPrice(stats.bribe + stats.salary),
				stats: 'DAILY EXPENSE',
			},
			{
				iconTop: true,
				icon: 'bankDept',
				main: formatPrice(stats.bank + stats.loaner),
				stats: 'TOTAL DEPT',
			},
			{
				iconTop: true,
				icon: 'deposit',
				main: formatPrice(stats.deposit),
				stats: 'SAVINGS',
			},
		],
	}
}
export default cash;

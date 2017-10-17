import formatPrice from '../formatPrice';

const bribe = (crew, expense) => {

	return {
		iconLabel: 'bribe',
		label: 'bribe',
		content: [
			{
				iconTop: true,
				icon: 'cops',
				sub: `PAYROLL`,
				stats: crew.toString(),
			},
			{
				iconTop: true,
				icon: 'expense',
				sub: `EXPENSE`,
				stats: formatPrice(expense)
			},
		]
	}
}
export default bribe;

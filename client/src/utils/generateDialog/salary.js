import formatPrice from '../formatPrice';

const salary = (crew, expense) => {

	return {
		iconLabel: 'salary',
		label: 'crew salary',
		content: [
			{
				icon: 'thugs',
				sub: `PAYROLL`,
				stats: crew.toString(),
			},
			{
				icon: 'expense',
				sub: `EXPENSE`,
				stats: formatPrice(expense)
			},
		]
	}
}
export default salary;

import formatPercentage from '../formatPercentage';

const robbery = (stats, conf) => {

	return {
		iconLabel: 'robbery',
		label: 'Robbery',
		content: [
			{
				icon: 'city',
				sub: 'City',
				stats: formatPercentage(stats.default.robbery),
			},
			{
				icon: 'cops',
				sub: 'Cops',
				stats: formatPercentage(stats.cops.enemy * conf),
			},
		],
		description: `Send the word to clear the streets!
					  More cops patroling, less punks! [ +${formatPercentage(conf)} per cop ]`,
	}
}
export default robbery;

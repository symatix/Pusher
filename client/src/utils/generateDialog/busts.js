import formatPercentage from '../formatPercentage';

const busts = (stats, conf) => {

	return {
		iconLabel: 'busts',
		label: 'Busts',
		content: [
			{
				icon: 'city',
				sub: 'City',
				stats: formatPercentage(stats.default.busts),
			},
			{
				icon: 'thugs',
				sub: 'Thugs',
				stats: formatPercentage(stats.thugs.enemy * conf),
			},
		],
		description: `Send some thugs to harras the cops!
					  Less eyes on you, lower the chance to get busted! [ +${formatPercentage(conf)} per thug ]`,
	}
}
export default busts;

import formatPercentage from '../formatPercentage';

const wickedRaid = (stats, conf) => {

	return {
		iconLabel: 'wickedRaid',
		label: 'Wicked Raid',
		content: [
			{
				icon: 'city',
				sub: 'City',
				stats: formatPercentage(stats.default.wickedRaid),
			},
			{
				icon: 'cops',
				sub: 'Cops',
				stats: formatPercentage(stats.cops.owned * conf),
			},
		],
		description: `Send cops to do some actual work!
					  By the laws of supply and demand, a successful drug house raid will increase the price! [ +${formatPercentage(conf)} per cop ]`,
	}
}
export default wickedRaid;

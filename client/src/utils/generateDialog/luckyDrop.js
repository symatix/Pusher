import formatPercentage from '../formatPercentage';

const luckyDrop = (stats, conf) => {

	return {
		iconLabel: 'luckyDrop',
		label: 'Lucky Drop',
		content: [
			{
				icon: 'city',
				sub: 'City',
				stats: formatPercentage(stats.default.luckyDrop),
			},
			{
				icon: 'thugs',
				sub: 'Thugs',
				stats: formatPercentage(stats.thugs.owned * conf),
			},
		],
		description: `Get your thugs to start pushing!
					  More eyes and ears on the street, better a chance to hear for an incoming lucky drop! [ +${formatPercentage(conf)} per thug ]`,
	}
}
export default luckyDrop;

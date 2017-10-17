const busts = (cops, thugs, copsTotal, thugsTotal) => {

	return {
		iconLabel: 'crewTotal',
		label: 'Crew',
		content: [
			{
				icon: 'cops',
				sub: `CITY: ${cops.toString()}`,
				stats: `TOTAL: ${copsTotal}`
			},
			{
				icon: 'thugs',
				sub: `CITY: ${thugs.toString()}`,
				stats: `TOTAL: ${thugsTotal}`
			}
		]
	}
}
export default busts;

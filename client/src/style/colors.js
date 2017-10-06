import createMuiTheme from 'material-ui/styles/createMuiTheme'

import { teal, amber, red, green, yellow } from 'material-ui/colors'

import createPalette from 'material-ui/styles/createPalette'

const muiTheme = createMuiTheme({
	palette: createPalette({
		primary: teal,
		accent: amber,
		success: green,
		inProgress: yellow,
		error: red,
		type: 'dark'
	})
})

export default muiTheme;
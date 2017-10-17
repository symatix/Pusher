import createMuiTheme from 'material-ui/styles/createMuiTheme'

import { teal, red, green, yellow } from 'material-ui/colors'

import createPalette from 'material-ui/styles/createPalette'

const muiTheme = createMuiTheme({
	palette: createPalette({
		primary: teal,
		accent: red,
		success: green,
		inProgress: yellow,
		error: red,
		alternateTextColor: green,
		type: 'dark'
	})
})

export default muiTheme;

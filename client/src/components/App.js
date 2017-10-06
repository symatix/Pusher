// logic
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
// style components
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
// style theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../style/colors';
// components
import Login from './Login';
import NewGame from './NewGame';
import Game from './Game';
//typography
import 'typeface-roboto'
import 'react-flexgrid/lib/flexgrid.css'
// NOTE: REMOVE BOOTSTRAP FROM MODULES


const styles = theme => ({
	root: {
		flexGrow: 1,
		marginTop: 30,
	},
	paper: {
		padding: 16,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	control: {
		padding: theme.spacing.unit * 2,
	}
});

class App extends Component {
	render() {
		const classes = this.props.classes;
		return (
			<MuiThemeProvider theme={muiTheme}>
				<div className={classes.root}>
					<Grid container spacing={8}>
		                <BrowserRouter>
							<div>
		                        <Route exact path="/" component={Login} />
								<Route exact path="/new" component={NewGame} />
								<Route exact path="/on" component={Game} />
							</div>
		                </BrowserRouter>
		            </Grid>
				</div>
			</MuiThemeProvider>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);

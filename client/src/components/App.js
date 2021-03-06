// logic
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux';
// style components
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
// style theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from '../style/colors';
// components
import Login from './Login';
import NewGame from '../containers/NewGame';
import Layout from './Layout';

// action
import { fetchUser } from '../actions';
//typography
import 'typeface-roboto'
// NOTE: REMOVE BOOTSTRAP FROM MODULES


const styles = theme => ({
	root: {
		width: '100%',
		flexGrow: 1,
		marginTop: 30,
	},
	control: {
		padding: theme.spacing.unit * 2,
	}
});

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		const { auth, classes } = this.props;
		return (
			<MuiThemeProvider theme={muiTheme}>
				<Grid container className={classes.root}>
					<Grid item xs={12}>
		                <BrowserRouter>
							<div>
		                        <Route exact path="/" component={Login} />
								<Route exact path="/new" component={NewGame} />
								<Route exact path="/on" component={auth ? Layout : Login} />
							</div>
		                </BrowserRouter>
					</Grid>
	            </Grid>
			</MuiThemeProvider>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps({ auth }) {
	return { auth }
}
export default connect(mapStateToProps, { fetchUser })(withStyles(styles)(App));

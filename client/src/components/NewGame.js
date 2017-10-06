import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import styles from '../style';

class NewGame extends Component {
	render() {
		const classes = this.props.classes;
		return (
			<Grid item xs={12}>
				<Paper className={classes.paper}>New Game! dfouafgdshouasdoiagoiafdsoiasdfgoiafsdojiafdsoifadoigfgaiodaogfid</Paper>

				<a href="/on">
					<Button raised>
						Start Pushing
					</Button>
				</a>
            </Grid>
		)
	}
}
NewGame.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(NewGame);

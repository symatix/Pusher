import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { calculatePrices } from '../actions';
import Typography from 'material-ui/Typography';
import CallEnd from 'material-ui-icons/CallEnd';

const styles = theme => ({
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    link:{
        textDecoration:'none',
    }
});

const NewGame = (props) => {
	const { calculatePrices, start, classes } = props;

	return (
      	<Grid
			container
			align="center"
			direction="row"
			justify="center">
			<Grid item xs={8} sm={6} md={4} lg={3}>
		      	<Paper className={classes.paper} elevation={4}>
			        <Typography type="headline" component="h3">
			          	You seem to check out...
			        </Typography>
			        <Typography type="body1" component="p">
			          	...if google vouched for you..
			        </Typography>
					<CallEnd />
					<br/>
					<Link className={classes.link} to="/on" onClick={()=>calculatePrices(start)}>
						<Button raised color="default">
							Start Pushing
						</Button>
					</Link>
			      </Paper>
		        </Grid>
			</Grid>
	)
}

NewGame.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({ cities }) {
	const randomCity = Math.floor(Math.random() * cities.length);
	console.log(randomCity)
	return { start: cities[randomCity].prices }
}

export default connect(mapStateToProps, { calculatePrices })(withStyles(styles)(NewGame));

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import { calculatePrices } from '../actions';

const NewGame = (props) => {
	const { calculatePrices, start } = props;

	return (
		<Grid item xs={12}>
				<Paper >New Game!</Paper>
				<Link to="/on" onClick={()=>calculatePrices(start)}>
					<Button raised >
						Start Pushing
					</Button>
				</Link>
            </Grid>
	)
}

function mapStateToProps({ cities }) {
	const randomCity = Math.floor(Math.random() * cities.length);
	console.log(randomCity)
	return { start: cities[randomCity].prices }
}
export default connect(mapStateToProps, { calculatePrices })(NewGame);

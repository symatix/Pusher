import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import NavListItem from './NavListItem';

const styles = theme => ({
	card: {
		minWidth: 275
	}
});

function NavCard(props) {
	const {classes, stats} = props;
	return (
		<Card className={classes.card}>
			<CardContent>
				{stats.map(({type, data, label, text, action}) => {
					return <NavListItem key={label + data} type={type} primary={data} secondary={label} action={action} text={text} label={label}/>
				})}
			</CardContent>
		</Card>
	);
}

NavCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavCard);

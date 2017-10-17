import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Icon from '../icons/Icon';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: theme.mixins.gutters({
		margin: 15,
		paddingTop: 16,
		paddingBottom: 16,
		textAlign: 'center'
	}),
	box: {
		display: 'inline-block',
		width: '50%'
	}
});

const DialogItemIconLeft = props => {
	const { classes, icon, main, sub, stats, action } = props;

	return (
		<div>
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" gutterBottom>{main}</Typography>
                <div className={classes.box}>
                    <Typography type="title" gutterBottom>
                        <Icon id={icon} width={40} height={40}/>
                    </Typography>
                </div>
                <div className={classes.box}>
                    <Typography type="body1">{sub}</Typography>
                    <Typography type="body2" gutterBottom>{stats}</Typography>
                </div>
				{action}
            </Paper>
        </div>
	);
}

DialogItemIconLeft.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DialogItemIconLeft);

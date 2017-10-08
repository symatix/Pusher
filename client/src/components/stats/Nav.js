import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import NavCard from './NavCard';

function TabContainer(props) {
	return <div style={{ padding: 20 }}>{props.children}</div>;
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

const styles = theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
	},
});

class Nav extends React.Component {
	state = {
		value: 0,
	};

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	render() {
		const { classes, stats } = this.props;
		const cardStats = [stats.city, stats.money, stats.pusher];

		return (
			<div className={classes.root} style={{ width: '100%' }}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth>
            <Tab label="City" />
            <Tab label="Money" />
            <Tab label="Pusher" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
			{cardStats.map((card, index) => {
				return(
					<TabContainer key={index}>
		                <NavCard stats={card} />
		            </TabContainer>
				)
			})}
        </SwipeableViews>
      </div>
		);
	}
}
Nav.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);

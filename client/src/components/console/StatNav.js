import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import StatCard from './StatCard'
import formatPrice from '../../utils/formatPrice';
import formatPercentage from '../../utils/formatPercentage';

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

class StatNav extends React.Component {
	state = { value: 0 };

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	extractCityNames() {

	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root} style={{ width: 500 }}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="City" />
            <Tab label="Pusher" />
            <Tab label="Money" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
          <TabContainer>
              	<StatCard
					cityName={this.props.activeCity.name}
					cities={this.props.cities}
				  	stats={[
						{ data: formatPercentage(this.props.activeCity.priceDrop), label: "LUCKY DROP" },
						{ data: formatPercentage(this.props.activeCity.raids), label: "RAIDS" },
						{ data: formatPercentage(this.props.activeCity.gangs), label: "GANGS" },
						{ data: this.props.activeCity.gangMembers, label: "GANG MEMBERS" }
					]}
					actions={[
						{ action: "", label: "travel" },
						{ action: "", label: "pay loaner" }
					]}
				/>
          </TabContainer>
          <TabContainer>
				<StatCard
					cities={this.props.cities}
					stats={[
						{ data: this.props.pusher.days, label: "DAYS ACTIVE" },
						{ data: this.props.pusher.health, label: "HEALTH" },
						{ data: this.props.pusher.storage, label: "STORAGE" },
						{ data: `${this.props.pusher.gun[2]}`, label: "GUNS" },
						{ data: `THUGS ${this.props.pusher.thugs[2]} | PUSHERS ${this.props.pusher.pushers[2]}`, label: "CREW" },
					]}
					actions={[{ action: "", label: "travel" }]}
				/>
          </TabContainer>
          <TabContainer>
				<StatCard
					cities={this.props.cities}
					stats={[
						{ data: formatPrice(this.props.money.cash), label: "CASH" },
						{ data: formatPrice(this.props.money.deposit), label: "DEPOSIT" },
						{ data: formatPrice(this.props.money.bank), label: "BANK DEPT" },
						{ data: formatPrice(this.props.money.loaner), label: "LOANER SHARK" }
					]}
					actions={[{ action: "", label: "travel" }]}
				/>
          </TabContainer>
        </SwipeableViews>
      </div>
		);
	}
}
//imgUrl, heading, stats, actions

StatNav.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatNav);

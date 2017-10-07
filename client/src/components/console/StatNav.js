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
	constructor(props) {
		super(props);
		this.state = {}
		this.payLoaner = this.payLoaner.bind(this)
	}
	componentDidMount() {
		this.setState({ value: 0 })
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	handleChangeIndex = index => {
		this.setState({ value: index });
	};

	extractCityNames() {

	}
	payLoaner(amount) {
		console.log("paying loaner", amount)
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
            <Tab label="Money" />
            <Tab label="Pusher" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
          <TabContainer>
              	<StatCard
					cityName={this.props.activeCity.name}
					cities={this.props.cities}
				  	stats={[
						{ data: formatPercentage(this.props.activeCity.priceDrop), label: "LUCKY DROP", action:"infoLucky" },
						{ data: formatPercentage(this.props.activeCity.raids), label: "RAIDS", action:"infoRaids" },
						{ data: formatPercentage(this.props.activeCity.gangs), label: "GANGS", action:"infoGangs" },
						{ data: this.props.activeCity.gangMembers, label: "GANG MEMBERS", action:"infoGangMembers" }
					]}

				/>
          </TabContainer>

          <TabContainer>
				<StatCard
					cities={this.props.cities}
					stats={[
						{ data: formatPrice(this.props.money.cash), label: "CASH", action:"infoCash" },
						{ data: formatPrice(this.props.money.bribe), label: "BRIBE", action:"infoBribe" },
						{ data: formatPrice(this.props.money.salary), label: "CREW SALARY", action:"infoSalary" },
						{ data: formatPrice(this.props.money.deposit), label: "DEPOSIT", action:"moneyDeposit" },
						{ data: formatPrice(this.props.money.bank), label: "BANK DEPT", action:"moneyDept" },
						{ data: formatPrice(this.props.money.loaner), label: "LOANER SHARK", action:"moneyLoaner" }
					]}
				/>
          </TabContainer>

		  <TabContainer>
				<StatCard
					cities={this.props.cities}
					stats={[
						{ data: this.props.pusher.days, label: "DAYS ACTIVE" },
						{ data: this.props.pusher.health, label: "HEALTH", action:"pusherHealth" },
						{ data: `${this.props.pusher.possession} | ${this.props.pusher.storage}`, label: "POSSESSION | STORAGE", action:"pusherStorage" },
						{ data: `${this.props.pusher.gun[2]}`, label: "GUNS", action:"pusherGuns" },
						{ data: `${this.props.pusher.cops}`, label: "COPS", action:"pusherCops" },
						{ data: `${this.props.pusher.thugs[2]} | ${this.props.pusher.pushers[2]}`, label: "THUGS | PUSHERS", action:"pusherCrew" },
					]}
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

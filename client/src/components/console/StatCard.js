import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import StatList from './StatList';
import TravelDialog from '../dialogs/TravelDialog';
import MoneyDialog from '../dialogs/MoneyDialog';
import InfoDialog from '../dialogs/InfoDialog';
import * as actions from '../../actions';
import formatPrice from '../../utils/formatPrice';
import formatPercentage from '../../utils/formatPercentage';

const styles = {
	card: {
		maxWidth: '100%',
		height: 450
	},
	media: {
		height: 200,
	},
	btn: {
		width: '100%',
		fontSize: '1.5em'
	},
	btnList: {
		position: 'fixed',
		width: '90%',
		bottom: 20,
		align: 'center'
	}
};

class StatCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			travel: false,
			moneyLoaner: false,
			travelValue: this.props.cities[0].name,
			activeDialog: {
				open: false,
			},
			activeInfo: {
				open: false
			}
		}
		this.handleTravelOpen = this.handleTravelOpen.bind(this)
		this.handleDialog = this.handleDialog.bind(this)
		this.handleLoanerClose = this.handleLoanerClose.bind(this)
		this.resetActiveInfo = this.resetActiveInfo.bind(this)
	}
	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		this.setState({
			actions: {
				reset: {
					open: false,
					title: "",
					onRequestClose: null,
					max: 0
				},
				moneyLoaner: {
					open: true,
					title: "Show me the money!",
					onRequestClose: this.handleLoanerClose,
					max: nextProps.money.loaner < nextProps.money.cash ? nextProps.money.loaner : nextProps.money.cash,
				},
				moneyDept: {
					open: true,
					title: "Bank requests it's money back.",
					onRequestClose: this.handleBankClose,
					max: nextProps.money.bank < nextProps.money.cash ? nextProps.money.bank : nextProps.money.cash,
				},
				moneyDeposit: {
					open: true,
					title: "Bank is interested in your money!",
					onRequestClose: this.handleDepositClose,
					max: nextProps.money.cash,
				}
			},
			info: {
				reset: {
					open: false,
					title: "",
					text: "",
					onRequestClose: null,
				},
				infoCash: {
					open: true,
					title: "Cash",
					text: `If you didn't know, you have ${formatPrice(nextProps.money.cash)}.
					Try better.`,
					onRequestClose: this.resetActiveInfo
				},
				infoLucky: {
					open: true,
					title: "Luck",
					text: `There is a ${formatPercentage(nextProps.activeCity.priceDrop)} chance there will be a good drop in this city.
					More cops on the payroll, more chance a good merchant appears.`,
					onRequestClose: this.resetActiveInfo
				},
				infoRaids: {
					open: true,
					title: "Raids",
					text: `There is a ${formatPercentage(nextProps.activeCity.raids)} chance that cops bust on your drop.
					Bribe them to back off. Maybe even a big drop appears then!`,
					onRequestClose: this.resetActiveInfo
				},
				infoGangs: {
					open: true,
					title: "Gangs",
					text: `There is a ${formatPercentage(nextProps.activeCity.gangs)} chance that a rival gang will attack you!
					To lower the odds, hire some of the thugs and attack them first!`,
					onRequestClose: this.resetActiveInfo
				},
				infoGangMembers: {
					open: true,
					title: "Cash",
					text: `There are ${nextProps.activeCity.gangMembers} gang mebers in this town..
					Kill them or hire them to work for you!`,
					onRequestClose: this.resetActiveInfo
				},
				infoBribe: {
					open: true,
					title: "Bribe",
					text: `Daily ${formatPrice(nextProps.money.bribe)} goes to cops to get of your back..
					If you want to pay lower, you can always...diss them... But that will increase raids!`,
					onRequestClose: this.resetActiveInfo
				},
				infoSalary: {
					open: true,
					title: "Crew Salary",
					text: `Your crew works for ${formatPrice(nextProps.money.salary)} daily.
					If that is too much, accidents can happend... But voids bring chaos, so look out for more gang violence!`,
					onRequestClose: this.resetActiveInfo
				}
			}
		})
	}

	// oh boy, here we go, gonna define all actions and pass them down to list elements for click trigger
	// takes care of travel
	resetActiveDialog() {
		console.log(this.state.info.reset)
		this.setState({ activeDialog: this.state.actions.reset });
	}
	resetActiveInfo() {
		this.setState({ activeInfo: { open: false } })
	}
	handleDialog(action) {
		if (action.includes("money")) {
			this.setState({ activeDialog: this.state.actions[action] })
			return;
		}
		if (action.includes("info")) {
			this.setState({ activeInfo: this.state.info[action] })
			return;
		}
	}
	handleTravelOpen = () => {
		this.setState({
			travel: true,
		});
	};
	handleTravelClose = city => {
		if (!city || city.name === this.state.travelValue) {
			this.setState({ travel: false })
			return;
		}
		this.props.changeActiveCity(city)
		this.setState({ travelValue: city.name, travel: false });
		return;
	};

	handleLoanerClose = amount => {
		if (!amount) {
			this.resetActiveDialog()
			return;
		}
		const dept = {
			loaner: this.props.money.loaner - amount,
			cash: this.props.money.cash - amount
		}
		this.props.moneyTransaction(dept);
		this.resetActiveDialog();
		return;
	};
	handleBankClose = amount => {
		if (!amount) {
			this.setState({ activeDialog: { open: false } })
			return;
		}
		const dept = {
			bank: this.props.money.bank - amount,
			cash: this.props.money.cash - amount
		}
		this.props.moneyTransaction(dept);
		this.resetActiveDialog();
		return;
	};
	handleDepositClose = amount => {
		if (!amount) {
			this.setState({ activeDialog: { open: false } })
			return;
		}
		const deposit = {
			deposit: this.props.money.deposit + amount,
			cash: this.props.money.cash - amount
		}
		this.props.moneyTransaction(deposit);
		this.resetActiveDialog();
		return;
	};






	render() {
		const { classes, stats, actions } = this.props;
		return (

			<div>
            <Card className={classes.card}>
                <CardContent>
					{this.props.cityName ? <StatList primary={this.props.cityName} secondary="CITY" action={this.handleTravelOpen}/>: ""}
                    {stats.map(({data, label, action}) => {
						return <StatList key={label} primary={data} secondary={label} action={()=>this.handleDialog(action)} />


                    })}

                </CardContent>
                <CardActions className={classes.btnList}>
                </CardActions>
            </Card>
            <TravelDialog
                selectedValue={this.state.travelValue}
                open={this.state.travel}
                onRequestClose={this.handleTravelClose}
                cities={this.props.cities}
				active={this.props.activeCity.name}
            />
            <MoneyDialog
                open={this.state.activeDialog.open}
                onRequestClose={this.state.activeDialog.onRequestClose}
                max={this.state.activeDialog.max}
				title={this.state.activeDialog.title}
				min={0}
            />
			<InfoDialog
				open={this.state.activeInfo.open}
				onRequestClose={this.state.activeInfo.onRequestClose}
				title={this.state.activeInfo.title}
				text={this.state.activeInfo.text}
			/>
        </div>
		);
	}

}

function mapStateToProps(state) {
	return { ...state }
}
StatCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, actions)(withStyles(styles)(StatCard));

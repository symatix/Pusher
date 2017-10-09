import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import TravelDialog from '../components/stats/TravelDialog';
import * as actions from '../actions';
import generateStats from '../utils/generateStats.js'
import Nav from '../components/stats/Nav';
import InfoDialog from '../components/InfoDialog';
import NavCheckoutDialog from '../components/stats/NavCheckoutDialog';


class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			travelDialog: false,
			infoDialog: false,
			infoText: '',
			transferDialog: false,
			transferData: {
				title: "",
				maxDept: 0,
				btnText: ["Default"]
			},
			infoData: {
				text: '',
				heading: ''
			}
		}
		this.handleLocation = this.handleLocation.bind(this);
		// functions to be passed as props to children
		this.passTravelDialog = this.passTravelDialog.bind(this);
		this.passInfoDialog = this.passInfoDialog.bind(this);
		this.passTransferDialog = this.passTransferDialog.bind(this);
		// functions that handle redux state
		this.handleMoney = this.handleMoney.bind(this);
	}
	passTravelDialog() {
		this.setState({
			travelDialog: !this.state.travelDialog
		});
	}
	// set state for info dialogs, values are passed from NavListItem
	passInfoDialog(text, label) {
		const heading = label
			? label[0].toUpperCase() + label.substring(1).toLowerCase() : '';
		this.setState({
			infoDialog: !this.state.infoDialog,
			infoData: {
				heading: heading,
				text: text ? text : ''
			}
		})
	}
	passTransferDialog(decision) {
		const {cash, bank, deposit, loaner} = this.props.money;
		if (decision === "loaner") {
			this.setState({
				transferData: {
					title: decision[0].toUpperCase() + decision.substring(1),
					firstMax: loaner > cash ? cash : loaner,
					secondMax: 0,
					total: loaner,
					btnText: ["Pay"],
					cash: this.props.cash,
					action: this.handleMoney
				},
				transferDialog: true
			})
		}
		if (decision === "bank") {
			const { days } = this.props.pusher;
			this.setState({
				transferData: {
					title: decision[0].toUpperCase() + decision.substring(1),
					firstMax: bank > cash ? cash : bank,
					secondMax: days < 30 ? days * 200 : 1000000, // maximum amount to borrow from bank
					total: bank,
					btnText: ["Pay", "Borrow"],
					cash: this.props.cash,
					action: this.handleMoney
				},
				transferDialog: true
			})
		}
		if (decision === "deposit") {
			this.setState({
				transferData: {
					title: decision[0].toUpperCase() + decision.substring(1),
					firstMax: cash,
					secondMax: deposit,
					total: cash,
					btnText: ["Deposit", "Withdraw"],
					action: this.handleMoney
				},
				transferDialog: true
			})
		}
	}
	handleLocation(name) {
		if (!name) {
			this.setState({
				travelDialog: !this.state.travelDialog
			});
			return;
		}
		const newCity = _.merge(_.find(this.props.cities, name), name);
		this.props.changeActiveCity(newCity, this.props.activeCity);
		this.setState({travelDialog: false})
	}
	handleMoney(state, storeLocation, pay) {
		if (!state) {
			this.setState({transferDialog: false});
			return;
		}
		const newCash = pay ? state : -state;
		// catch deposit case, it adds if deposit is made
		const newMoney = storeLocation !== "deposit" ? newCash : -newCash;
		const newState = {
			cash: this.props.money.cash - newCash,
			[storeLocation]: this.props.money[storeLocation] - newMoney
		}
		this.props.moneyTransaction(newState)
		this.setState({transferDialog: false})
	}
	render() {
		const {activeCity, money, pusher} = this.props;
		const cityList = this.props.cities.map(({name}) => name);
		const actions = {
			travel: this.passTravelDialog,
			info: this.passInfoDialog,
			transfer: this.passTransferDialog
		}
		// generate all the items in the list, their callbacks and text
		const stats = generateStats({activeCity, money, pusher, actions});
		return (
			<div>
				<Nav stats={stats}/>
				<TravelDialog open={this.state.travelDialog} handleLocation={this.handleLocation} cityList={cityList} activeCity={this.props.activeCity.name}/>
				<NavCheckoutDialog open={this.state.transferDialog} {...this.state.transferData}/>
				<InfoDialog open={this.state.infoDialog} text={this.state.infoData.text} heading={this.state.infoData.heading} action={this.passInfoDialog}/>
			</div>
		)
	}
}
function mapStateToProps({activeCity, cities, money, pusher}) {
	return {activeCity, cities, money, pusher}
}
export default connect(mapStateToProps, actions)(Stats);

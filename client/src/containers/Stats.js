import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import TravelDialog from '../components/stats/TravelDialog';
import * as actions from '../actions';
import generateStats from '../utils/generateStats.js'
import Nav from '../components/stats/Nav';
import InfoDialog from '../components/InfoDialog';
import NavCheckoutDialog from '../components/stats/NavCheckoutDialog';
import PusherDialog from '../components/stats/PusherDialog';
import ForbidDialog from '../components/stats/ForbidDialog';
import config from '../config';
import handlePusherDialogData from '../utils/handlePusherDialogData';

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			travelDialog: false,
			infoDialog: false,
			pusherDialog:false,
			forbidDialog:false,
			pusherDialogActiveCops: true,
			pusherDialogActiveThugs: true,
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
			},
			pusherData:{
				crew:20,
				expense:30000,
				defVal:0,
				text:["malo", "puno"],
				action:this.handleOrders
			}
		}
		// functions to be passed as props to children - they will mostly open/close dialogs
		this.passForbidDialog = this.passForbidDialog.bind(this);
		this.passTravelDialog = this.passTravelDialog.bind(this);
		this.passInfoDialog = this.passInfoDialog.bind(this);
		this.passTransferDialog = this.passTransferDialog.bind(this);
		this.passPusherDialog = this.passPusherDialog.bind(this);
		// functions that handle redux state - doing some calculations and generating objects for action creators
		this.handleLocation = this.handleLocation.bind(this);
		this.handleMoney = this.handleMoney.bind(this);
		this.handleOrders = this.handleOrders.bind(this);
	}
	passTravelDialog() {
		this.setState({ travelDialog: !this.state.travelDialog });
	}
	passForbidDialog() {
		this.setState({ forbidDialog: false });
	}
	// set state for info dialogs, values are returned from NavListItem (onClick)
	passInfoDialog(text, label) {
		const heading = label ? label[0].toUpperCase() + label.substring(1).toLowerCase() : '';
		this.setState({
			infoDialog: !this.state.infoDialog,
			infoData: {
				heading: heading,
				text: text ? text : ''
			}
		})
	}
	// passing down state as props to PusherDialog
	passPusherDialog(decision){
		// decision will return string - "cops" || "thugs"
		// hande case where decision was done, in that case, activate forbid dialog
		if (decision === "cops" && !this.state.pusherDialogActiveCops){
			this.setState({forbidDialog: true})
			return null;
		}
		if (decision === "thugs" && !this.state.pusherDialogActiveThugs){
			this.setState({forbidDialog: true})
			return null;
		}

		const { activeCity } = this.props;
		const text = decision === "cops" ? ["Arrest Thugs", "Raid The Narket"] : ["Harass The Cops", "Flood The Market"];

		this.setState({
			pusherData:{
				crew:activeCity[decision].owned,
				text:text,
				icon:decision,
				expense:activeCity[decision].owned * config[decision].expense,
				defVal:activeCity[decision].drug,
				action:this.handleOrders
			},
			pusherDialog: true
		})
	}
	passTransferDialog(decision) { // string - "loaner" || "bank" || "deposit" - used for setting state for checkout dialog
		const {cash, bank, deposit, loaner, days} = this.props.money;

		switch(decision){
			case "loaner":
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
				break;

			case "bank":
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
				break;

			case "deposit":
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
				break;

			default:
				this.setState({transferDialog:false})
		}
	}
	// handles change of location
	handleLocation(name) { // receives a string with the name of the future activeCity
		if (!name) {
			this.setState({
				travelDialog: !this.state.travelDialog
			});
			return;
		}
		const newCity = _.merge(_.find(this.props.cities, name), name);
		this.props.changeActiveCity(newCity, this.props.activeCity);
		this.setState({travelDialog: false, pusherDialogActiveThugs:true, pusherDialogActiveCops:true})
	}
	handleMoney(state, storeLocation, pay) { // state - new value (number), storeLocation - key name in money object, pay - boolean
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
	handleOrders(orders){ // object - {crew:cops || thugs, allocate:how many will go to priceDrop, doThis:recruit || dispose}
		if (orders !== null){
			const { activeCity, money } = this.props;
			const newStats = handlePusherDialogData({orders, activeCity, money})

			this.props.dealWithCrew(newStats);
			orders.crew === "thugs" ? this.setState({pusherDialogActiveThugs:false}) : this.setState({pusherDialogActiveCops:false});
		}
		this.setState({pusherDialog: false})
	}
	render() {
		const {activeCity, money, pusher} = this.props;
		const cityList = this.props.cities.map(({name}) => name);

		// now bind all functions that are used for dialog state (show/hide)
		const actions = {
			travel: this.passTravelDialog,
			info: this.passInfoDialog,
			transfer: this.passTransferDialog,
			pusher:this.passPusherDialog
		}
		// generate all the items in the list, their callbacks and text
		const stats = generateStats({activeCity, money, pusher, actions});

		return (
			<div>
				<Nav stats={stats}/>
				<TravelDialog open={this.state.travelDialog} handleLocation={this.handleLocation} cityList={cityList} activeCity={this.props.activeCity.name}/>
				<NavCheckoutDialog open={this.state.transferDialog} {...this.state.transferData}/>
				<PusherDialog open={this.state.pusherDialog} {...this.state.pusherData} cash={money.cash}/>
				<InfoDialog open={this.state.infoDialog} text={this.state.infoData.text} heading={this.state.infoData.heading} action={this.passInfoDialog}/>
				<ForbidDialog open={this.state.forbidDialog} text="Feeling bossy today?" title="Bad Boss" action={this.passForbidDialog} />
			</div>
		)
	}
}
function mapStateToProps({activeCity, cities, money, pusher}) {
	return {activeCity, cities, money, pusher}
}
export default connect(mapStateToProps, actions)(Stats);

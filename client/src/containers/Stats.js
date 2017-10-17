import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Nav from '../components/stats/Nav';
import TravelDialog from '../components/stats/TravelDialog';
import TransferDialog from '../components/stats/TransferDialog';
import DialogMain from '../components/stats/Dialog';
import generateStats from '../utils/generateStats.js'
import generateDialog from '../utils/generateDialog.js'
import generateTransfer from '../utils/generateTransfer.js'

class Stats extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dialogTravel: false,
			dialog: false,
			dialogStats: {
				alert: false,
				iconLabel: '',
				label: '',
				content: [{ icon: '', main: '', sub: '', stats: '', alert: false }],
				action: this.passDialog,
			},
			dialogTransferStats: {
				title: '',
				firstMax: 0,
				secondMax: 0,
				total: 0,
				btnText: [""],
				action: this.passTransfer
			}
		}

		// functions to be passed as props to children - they will mostly open/close dialogs
		this.passTravel = this.passTravel.bind(this);
		this.passDialog = this.passDialog.bind(this);
		this.passTransfer = this.passTransfer.bind(this);
		// functions that handle redux state - doing some calculations and generating objects for action creators
		this.handleLocation = this.handleLocation.bind(this);
		this.handleDialog = this.handleDialog.bind(this);
		this.handleMoney = this.handleMoney.bind(this);
	}
	passTravel() {
		this.setState({ dialogTravel: true });
	}

	passDialog(about) { // String
		// avoid generating stats if closing case
		if (about) {
			const action = this.handleDialog;
			const { activeCity, cities, pusher, money, crew, guns, storage, health } = this.props;
			const propsToStats = { activeCity, cities, pusher, money, crew, guns, storage, health, action };
			// handle all cases and return an object with stats for Dialog component
			const stats = generateDialog(about, propsToStats);
			this.setState({ dialogStats: stats });
		}
		this.setState({ dialog: !this.state.dialog })
	}
	passTransfer(toWho, amount, pay) {
		if (toWho) {
			const { cash, bank, deposit, loaner, interest } = this.props.money;
			const { days } = this.props.pusher;
			const action = this.handleMoney;
			const transferStats = { cash, bank, deposit, loaner, interest, days, action }

			const transfer = generateTransfer(transferStats, toWho)
			this.setState({ dialogTransferStats: transfer })
		}
		this.setState({ dialogTransfer: !this.state.dialogTransfer })
	}
	// handles change of location
	handleLocation(name) { // String
		// future active city, updated current activeCity
		if (name) {
			this.props.changeActiveCity(
				_.merge(_.find(this.props.cities, name), name),
				this.props.activeCity
			)
		}
		this.setState({ dialogTravel: false })
	}
	handleDialog(action, data) {
		switch (action) {
		case "hospital":
			this.props.selfCare(data)
			break;

		case "storage":
			this.props.buyStorage(data);
			break;

		case "guns":
			this.props.buyGun(data);
			break;

		case "crew":
			console.log(action, data)
			break;

		default:
			break;
		}
		this.setState({ dialog: false })
	}

	handleMoney(toWho, amount, pay) { // state - new value (number), storeLocation - key name in money object, pay - boolean
		if (toWho) {
			console.log(toWho, amount, pay)
			const newCash = pay ? amount : -amount;
			// catch deposit case, it adds if deposit is made
			const newMoney = toWho !== "deposit" ? newCash : -newCash;
			const newState = {
				cash: this.props.money.cash - newCash,
				[toWho]: this.props.money[toWho] - newMoney
			}
			console.log(newState)
			this.props.moneyTransaction(newState)
		}
		this.setState({ dialogTransfer: false })
	}

	render() {
		const { activeCity, money, pusher, crew, guns, storage } = this.props;
		const cityList = this.props.cities.map(({ name }) => name);

		// now bind all functions that are used for dialog state (show/hide)
		const actions = {
			travel: this.passTravel,
			dialog: this.passDialog,
			transfer: this.passTransfer,
		}
		// generate all the items in the list, their callbacks and text
		const stats = generateStats({ activeCity, money, pusher, actions, crew, guns, storage });

		return (
			<div>
				<Nav stats={stats}/>
				<TravelDialog
					open={this.state.dialogTravel}
					handleLocation={this.handleLocation}
					cityList={cityList}
					activeCity={this.props.activeCity.name}/>
				<DialogMain
					open={this.state.dialog}
					close={this.passDialog}
					{...this.state.dialogStats}/>
				<TransferDialog
					open={this.state.dialogTransfer}
					{...this.state.dialogTransferStats}/>

			</div>
		)
	}
}

function mapStateToProps(store) {
	return { ...store }
}
export default connect(mapStateToProps, actions)(Stats);

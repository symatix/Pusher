import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrugList from '../components/drugs/DrugList';
import DrugCheckoutDialog from '../components/drugs/DrugCheckoutDialog';
import * as actions from '../actions';

class Drugs extends Component {
	constructor(props) {
		super(props);
		this.state = { dialog: false }

		this.selectDrug = this.selectDrug.bind(this);
		this.drugCheckout = this.drugCheckout.bind(this);
	}

	// calculate new prices every time there is a change of location
	componentWillUpdate(nextProps) {
		if (nextProps.activeCity.name !== this.props.activeCity.name) {
			this.props.calculatePrices(nextProps.activeCity.prices)
		}
	}

	// injects drug inside activeDrug reducer and activates buy/sell dialog
	selectDrug(drug) {
		const { name, price, possession } = drug;

		// calculate all needed for the activeDrug reducer
		const buy = Math.floor(this.props.money.cash / drug.price);
		const storage = this.props.pusher.storage - this.props.pusher.possession;
		const maxBuy = buy > storage ? storage : buy;

		// initiate new object and pass it to action dispatch
		const newDrug = { name, price, possession, maxBuy }
		this.props.setActiveDrug(newDrug);
		this.setState({ dialog: true })
	}

	// calculates changes when buy/sell action is triggered and prepares object for 3 reducers (money, pusher, drugs)
	drugCheckout(amount, buy) {

		// extract all variables and calculate all needed for the reducers
		const { pusher, money, activeDrug } = this.props;
		let price = amount * this.props.activeDrug.price;
		price = buy ? -price : price;
		amount = buy ? amount : -amount;

		// create object with reducer keys => 3 reducers triggered
		const newState = {
			money: { cash: money.cash + price },
			pusher: { possession: pusher.possession + amount },
			drugs: { name: activeDrug.name, possession: activeDrug.possession + amount },
		}
		this.props.drugTansaction(newState)
		this.setState({ dialog: false })
	}

	render() {
		return (
			<div>
                <DrugList
                    drugs={this.props.drugs}
                    selectDrug={this.selectDrug}/>
				<DrugCheckoutDialog
					open={this.state.dialog}
					drugCheckout={this.drugCheckout}
					maxStore={this.props.pusher.storage - this.props.pusher.possession}
					{...this.props.activeDrug}/>
            </div>
		)
	}
}

function mapStateToProps(store) {
	return { ...store }
}
export default connect(mapStateToProps, actions)(Drugs);

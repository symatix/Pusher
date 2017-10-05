import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cityTransfers } from '../../actions';
import decideCityAction from '../../utils/decideCityAction';
import InputRange from '../InputRange';

class CityActions extends Component {
	constructor(props) {
		super(props);
		this.state = { input: 0 };

		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e) {
		this.setState({ input: e.target.value })
	}
	handleSubmit(e) {
		e.preventDefault();
		const { cityAction } = this.props;
		const amount = parseInt(this.state.input, 10)
		if (cityAction === 'loaner') {
			const newMoney = {
				loanerDept: this.props.money.loanerDept - amount,
				cash: this.props.money.cash - amount
			}
			this.props.payLoaner(newMoney);
		}
		if (cityAction === 'bank') {
			const newMoney = {
				bankDept: this.props.money.bankDept + amount,
				cash: this.props.money.cash + amount
			}
			this.props.cityTransfers(newMoney);
		}
		this.setState({ input: 0 })
	}
	renderCityAction() {

		const childProps = decideCityAction(this.props.cityAction, this.props.money, this.state.input);

		return (
			<InputRange
                handleSubmit={this.handleSubmit}
                handleInput={this.handleInput}
                content={this.state.input}
                {...childProps}
            />
		)
	}

	render() {
		return (
			<div>
				{ this.renderCityAction() }
			</div>
		)
	}
}

export default connect(null, { cityTransfers })(CityActions);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStash } from '../actions';
import formatNumber from '../utils/formatNumber'
import decideAction from '../utils/decideAction'
import calculateAction from '../utils/calculateAction'
import InputRange from './InputRange';

class Actions extends Component {
	constructor(props) {
		super(props);
		this.state = { input: 0 }
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ input: 0 });
	}
	handleInput(e) {
		this.setState({ input: e.target.value, buy: true })
	}
	handleSubmit(e) {
		e.preventDefault();
		const pockets = Object.values(this.props.stats.drugs).reduce((a, b) => a + b, 0);
		const data = {
			name: this.props.drug.name,
			cash: this.props.cash,
			price: this.props.drug.price,
			pockets: pockets,
			amount: parseInt(this.state.input, 10),
			stash: parseInt(this.props.stats.drugs[this.props.drug.name], 10),
			sell: this.sell()
		}
		const newStats = calculateAction(data);
		this.props.updateStash(newStats);
	}
	sell() {
		return this.props.stash[this.props.drug.name] > 0 ? true : false;
	}

	renderCheckout() {
		if (this.props.drug) {
			const { stash, cash, pockets } = this.props;
			const { name, price } = this.props.drug;
			const { input } = this.state;
			const fork = { stash, cash, pockets, name, price, input };
			const childProps = decideAction(fork);

			if ((childProps.max > 0 && price * this.state.input <= this.props.cash) || stash[name] > 0) {
				return (
					<InputRange
						handleSubmit={this.handleSubmit}
						handleInput={this.handleInput}
						content={this.state.input}
						{...childProps}
					/>
				)
			}
			if (childProps.max === 0) {
				return (<div className="alert alert-warning">Bro, ur pockets r full...</div>)
			} else {
				return (<div className="alert alert-danger">Bro, u broke...</div>)
			}
		}
		return;
	}

	renderContent() {
		if (this.props.drug) {
			const { name, price } = this.props.drug;
			return (
				<div>
					There is some <strong>{name}</strong> on the market for <strong>${formatNumber(price)}</strong>!<br/>
	            </div>
			)
		}
	}


	render() {
		return (
			<div>
				{ this.renderContent() }
				{ this.renderCheckout() }
			</div>
		)
	}
}

function mapStateToProps({ drug, stats }) {
	return { drug, stats }
}
export default connect(mapStateToProps, { updateStash })(Actions)

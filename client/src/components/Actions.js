import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateStash } from '../actions';
import InputRange from './InputRange';

class Actions extends Component {
	constructor(props) {
		super(props);
		this.state = { input: 0 }
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		this.setState({ input: 0 })
	}
	handleInput(e) {
		this.setState({ input: e.target.value })
	}
	handleSubmit(e) {
		e.preventDefault();
		const { cash } = this.props;
		const { name, price } = this.props.drug;
		const amount = parseInt(this.state.input);
		const oldStash = parseInt(this.props.stats.drugs[name]);
		const newCash = cash - price * amount;
		const newStash = parseInt(oldStash + amount);

		const newStats = { money: {}, drugs: {} };
		newStats.money.cash = newCash;
		newStats.drugs = this.props.stats.drugs;
		newStats.drugs[name] = newStash;
		this.props.updateStash(newStats);

	}

	checkCash() {
		const { name, price } = this.props.drug;
		const max = Math.floor(this.props.cash / price)

		if (max > 0) {
			return (
				<InputRange
					handleSubmit={this.handleSubmit}
					name={name}
					amount={this.state.input}
					max={max}
					handleInput={this.handleInput}
					content={this.state.input}
				/>
			)
		}
		return (
			<label>
				U broke
			</label>
		)
	}

	renderContent() {
		if (this.props.drug) {
			const { name, price } = this.props.drug;
			return (
				<div>
	                Cash: {this.props.cash}<br/>
					Drug: {name}<br/>
					Price: {price}
					<br/>
					{this.checkCash()}
	            </div>
			)
		}
	}


	render() {
		return (
			<div>
				{ this.renderContent() }
			</div>
		)
	}
}

function mapStateToProps({ drug, stats }) {
	return { drug, stats }
}
export default connect(mapStateToProps, { updateStash })(Actions)

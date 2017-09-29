import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Table from './game/Table';
import Dashboard from './Dashboard';

class Game extends Component {
	componentDidMount() {
		const { name } = this.props.city;
		this.props.getCityList();
		this.props.getPrices({ name });
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<h1>Pusher</h1>
				<div className="row">
					<div className="col-xs-8">
	                	<Table
							drugs={this.props.stats.drugs}
							prices={this.props.prices}
						 	buySell={this.props.buySell}/>
					</div>
					<div className="col-xs-4">
						<Dashboard
							stats={this.props.stats}
							city={this.props.city.name}
							user={this.props.auth}
							cash={this.props.stats.money.cash}
							drug={this.props.drug}
							getPrices={this.props.getPrices}
							getCity={this.props.getCity}
							cityList={this.props.cities}
						/>
					</div>
	        	</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps, actions)(Game)

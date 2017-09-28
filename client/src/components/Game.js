import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import Table from './game/Table';
import Dashboard from './Dashboard';
import Actions from './Actions';

class Game extends Component {
	componentDidMount() {
		const { name } = this.props.city;
		this.props.getPrices({ name });
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-8">
	                	<Table drugs={this.props.stats.drugs} prices={this.props.prices} />
					</div>
					<div className="col-xs-4">
						<Dashboard stats={this.props.stats} city={this.props.city.name} user={this.props.auth} />
					</div>
	        	</div>
				<div className = "row" >
					<div className="col-xs-4">
						<Actions cash={this.props.stats.money.cash} drug={this.props.drug}/>
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

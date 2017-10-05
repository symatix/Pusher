import React, { Component } from 'react';
import Actions from './dashboard/Actions'
import CityActions from './dashboard/CityActions';
import Stats from './dashboard/Stats';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = { cityAction: '' }
		this.handleCityBtn = this.handleCityBtn.bind(this);
	}
	renderAction() {
		if (this.props.drug) {
			return (
				<Actions
					cash={this.props.cash}
					drug={this.props.drug}
					stash={this.props.stats.drugs}
					pockets={this.props.stats.assets.pockets}/>
			)
		}
		if (this.state.cityAction) {
			return (
				<div>
					<CityActions
						cityAction={this.state.cityAction}
						money={this.props.stats.money}
						health={this.props.stats.health}
					/>
				</div>
			)
		}
		return (<p>What u wanna do here?</p>)
	}

	handleCityBtn(e) {
		this.setState({ cityAction: e.target.textContent })
		this.props.buySell(null);
	}

	changeLocation(city, money) {
		if (city !== this.props.city.name) {
			this.setState({ cityAction: '' })
			this.props.updateDept(money);
			this.props.getCity(city);
			this.props.getPrices(city);
			this.props.buySell(null);
		}
	}

	renderLocations() {
		const { money } = this.props.stats;
		return this.props.cityList.map(({ name }, index) => {
			return (
				<button
					key={name+index}
					onClick={()=> this.changeLocation(name, money)}
					className={name === this.props.city.name ? "btn btn-info" : "btn btn-default"}>
					{name}
				</button>
			)
		})
	}
	render() {
		return (
			<div>
				<Stats
					{...this.props.stats}
					city={this.props.city}
					user={this.props.user}
					handleCityBtn={this.handleCityBtn}
				 />
				<div className="panel panel-default">
					<div className="panel-body btn-group">
						{this.renderLocations()}
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-body">
						{this.renderAction()}
					</div>
				</div>
			</div>
		)
	}

}
export default Dashboard;

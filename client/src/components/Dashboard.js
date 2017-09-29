import React from 'react';
import Actions from './Actions'
import Progress from 'react-progressbar';
import formatNumber from '../utils/formatNumber'


const Dashboard = (props) => {

	function renderAction() {
		if (props.drug) {
			return (
				<div className="panel panel-default">
					<div className="panel-body">
						<Actions cash={props.cash} drug={props.drug} stash={props.stats.drugs} pockets={props.stats.assets.pockets}/>
					</div>
				</div>
			)
		}
	}

	function changeLocation(city) {
		props.getCity(city);
		props.getPrices(city);
	}

	function renderLocations() {
		return props.cityList.map(({ name }, index) => {
			return (
				<button
					key={name+index} onClick={()=> changeLocation({name})}
					className={name === props.city ? "btn btn-info" : "btn btn-default"}>
					{name}
				</button>
			)
		})
	}

	return (
		<div>
		<div className="panel panel-default">
            <div className="panel-body">
               <dl className="dl-horizontal">
                   <dt>Pusher</dt><dd>{props.user ? props.user.name : "Hacker"}</dd>
                   <dt>Health</dt><dd><Progress completed={props.stats.health} /></dd>
                   <dt>City</dt><dd>{props.city}</dd>
				   <dt>Cash</dt><dd>${formatNumber(props.stats.money.cash)}</dd>
                   <dt>Stash</dt><dd>{props.stats.assets.pockets.current} / {props.stats.assets.pockets.total}</dd>
                   <dt>Deposit</dt><dd>{props.stats.money.bankDeposit}</dd>
                   <dt>Bank dept</dt><dd>{props.stats.money.bankDept}</dd>
                   <dt>Loaner shark</dt><dd>{props.stats.money.loanerDept}</dd>
              </dl>
            </div>
        </div>
		<div className="panel panel-default">
			<div className="panel-body btn-group">
				{renderLocations()}
			</div>
		</div>
		{renderAction()}
	</div>
	)
}
export default Dashboard;

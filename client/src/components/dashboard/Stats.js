import React from 'react';
import formatNumber from '../../utils/formatNumber'
import Progress from 'react-progressbar';

const Stats = (props) => {
	return (
		<div className="panel panel-default">
            <div className="panel-body">
               <dl className="dl-horizontal">
                   <dt>Pusher</dt><dd>{props.user ? props.user.name : "Hacker"}</dd>
                   <dt>Health</dt><dd><Progress completed={props.health} /></dd>
                   <dt>City</dt><dd>{props.city.name}</dd>
				   <dt>Stash</dt><dd>{props.assets.pockets.current} / {props.assets.pockets.total}</dd>
				   <dt>Cash</dt><dd>{formatNumber(props.money.cash)}</dd>
                   <dt>Deposit</dt><dd>{formatNumber(props.money.bankDeposit)}</dd>
                   <dt>Bank dept</dt><dd>{formatNumber(props.money.bankDept)}</dd>
                   <dt>Loaner shark</dt><dd>{formatNumber(props.money.loanerDept)}</dd>
              </dl>
			  <button onClick={props.handleCityBtn} className="btn btn-default btn-block">{props.city.status}</button>
            </div>
        </div>
	)
}

export default Stats;

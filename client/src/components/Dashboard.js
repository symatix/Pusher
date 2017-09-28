import React from 'react';

const Dashboard = (props) => {
	return (
		<div className="panel panel-default">
            <div className="panel-body">
               <dl className="dl-horizontal">
                   <dt>Pusher</dt><dd>{props.user ? props.user.name : "Hacker"}</dd>
                   <dt>Health</dt><dd>{props.stats.health}</dd>
                   <dt>City</dt><dd>{props.city}</dd>
                   <dt>Cash</dt><dd>{props.stats.money.cash}</dd>
                   <dt>Deposit</dt><dd>{props.stats.money.bankDeposit}</dd>
                   <dt>Bank dept</dt><dd>{props.stats.money.bankDept}</dd>
                   <dt>Loaner shark</dt><dd>{props.stats.money.loanerDept}</dd>
              </dl>
            </div>
        </div>
	)
}
export default Dashboard;

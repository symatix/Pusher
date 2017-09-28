import _ from 'lodash';
import React from 'react';
import formatNumber from '../../utils/formatNumber';
import TableList from './TableList';
import ExampleApp from './Modal';

const Table = (props) => {

	function renderList() {
		const { prices, drugs } = props;
		return _.map(drugs, (amount, name) => {
			const price = prices.filter(price => price.name === name).map(drug => drug.price)[0];

			return (
				<TableList
					key={name}
					name={name}
					price={formatNumber(price)}
					amount={amount}/>
			);
		});
	}

	return (
		<div className="panel panel-default">
			<div className="panel-body">
				<div className="table-responsive">
		            <table className="table table-hover">
		                <thead>
		                    <tr>
		                        <th>Drug</th>
		                        <th>Price</th>
		                        <th>Pocket</th>
								<th></th>
		                    </tr>
		                </thead>
		                <tbody>
		                    {renderList()}
		                </tbody>
		            </table>
		        </div>
			</div>
		</div>

	)
}
export default Table

import React from 'react';
import formatNumber from '../../utils/formatNumber';

const TableList = (props) => {
	const { name, price, amount, buySell } = props;

	return (
		<tr onClick={() => buySell({name, price})}>
            <td>{name}</td>
            <td>{formatNumber(price)}</td>
            <td>{amount}</td>
		</tr>
	)
};

export default TableList;

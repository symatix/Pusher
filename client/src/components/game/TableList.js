import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buySell } from '../../actions';

class TableList extends Component {

	handleClick(drug) {
		this.props.buySell(drug)
	}

	render() {
		const { name, price, amount } = this.props;
		const drug = { name, price }
		return (
			<tr onClick={() => this.handleClick(drug)}>
                <td>{name}</td>
                <td>{price}</td>
                <td>{amount}</td>
			</tr>
		)
	}
};

export default connect(null, { buySell })(TableList);

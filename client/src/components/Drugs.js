import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { calculatePrices } from '../actions';
import formatPrice from '../utils/formatPrice';

const styles = theme => ({
	paper: {
		width: '100%',
		height: '100%',
		margin: '0 auto',
		overflowX: 'auto',
	},
	tableRow: {
		fontSize: '1.5em',
		cursor: 'pointer'
	},
	table: {
		marginTop: '1em'
	}
});

class Drugs extends Component {

	shouldComponentUpdate(nextProps) {
		if (nextProps.activeCity.name !== this.props.activeCity.name) {
			this.props.calculatePrices(nextProps.activeCity.prices)
			return true;
		}
		return false;
	}
	render() {
		return (
			<Paper className={this.props.classes.paper}>
				<Table className={this.props.classes.table}>
	                <TableHead>
	                  <TableRow>
	                    <TableCell>Merch</TableCell>
	                    <TableCell>Price ($)</TableCell>
	                    <TableCell numeric>Possesion</TableCell>
	                  </TableRow>
	                </TableHead>
	                <TableBody>
	                  {this.props.drugs.map(({name, price, possession}, index) => {
	                    return (

	                    <TableRow hover className={this.props.classes.tableRow} key={name+index}>

	                        <TableCell>{name}</TableCell>
	                        <TableCell>{formatPrice(price)}</TableCell>
	                        <TableCell numeric>{possession}</TableCell>
					    </TableRow>
	                    );
	                  })}
	                </TableBody>
	              </Table>
			</Paper>
		)
	}
}

function mapStateToProps({ drugs, activeCity }) {
	return { drugs, activeCity }
}
Drugs.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, { calculatePrices })(withStyles(styles)(Drugs));

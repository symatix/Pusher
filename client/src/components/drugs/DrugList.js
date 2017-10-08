import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import formatPrice from '../../utils/formatPrice'

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
		margin: '1.3em 0'
	}
});

const DrugList = (props) => {
	const { classes } = props;

	const handleClick = (drug) => {
		props.selectDrug(drug)
	}

	return (
		<Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Merch</TableCell>
            <TableCell numeric>Price</TableCell>
            <TableCell numeric>Possession</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.drugs.map(d => {
            return (
              <TableRow
                  className={classes.tableRow}
                  key={d.name}
                  hover
                  onClick={()=> handleClick(d)}
                  >
                <TableCell>{d.name}</TableCell>
                <TableCell numeric>{formatPrice(d.price)}</TableCell>
                <TableCell numeric>{d.possession}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
	);
}

DrugList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrugList);

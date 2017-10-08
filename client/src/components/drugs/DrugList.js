import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import formatPrice from '../../utils/formatPrice'

const styles = theme => ({
	paper: {
		width: '100%',
		height: '100%',
		margin: '0 auto',
	},
	tableRow: {
		fontSize: '1.5em',
		cursor: 'pointer'
	},
	headCell:{
		padding:'0 10px'
	}
});

const DrugList = (props) => {
	const { classes } = props;

	const handleClick = (drug) => {
		props.selectDrug(drug)
	}

	return (
		<Paper className={classes.paper}>
			<Card className={classes.card}>
				<CardContent>
					<Table>
					    <TableHead>
					        <TableRow>
					            <TableCell className={classes.headCell}>Merch</TableCell>
					            <TableCell className={classes.headCell} >Price</TableCell>
					            <TableCell numeric className={classes.headCell} >Possession</TableCell>
					        </TableRow>
					    </TableHead>
					    <TableBody>
					        {props.drugs.map(d => { return (
					        <TableRow className={classes.tableRow} key={d.name} hover onClick={()=> handleClick(d)} >
					            <TableCell>{d.name}</TableCell>
					            <TableCell  >{formatPrice(d.price)}</TableCell>
					            <TableCell numeric >{d.possession}</TableCell>
					        </TableRow>
					        ); })}
					    </TableBody>
					</Table>
				</CardContent>
			 </Card>
    	</Paper>
	);
}

DrugList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrugList);

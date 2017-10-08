import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import { GridList, GridListTile } from 'material-ui/GridList';
import {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import formatPrice from '../../utils/formatPrice'

const styles = theme => ({
	paper: {
		width: '100%',
		height: '100%',
		margin: '0 auto',
	},
	gridList: {
		width: "100%",
		padding:"5px 10px",
	    backgroundColor:'#212121',
		cursor:'pointer',
	    boxShadow:'0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
	},
	gridListTile:{
		padding:'0 !important'
	},
	subheader: {
		width: '100%',
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
		      		<GridList style={{color:'white'}} cellHeight={30} cols={12}>
						<GridListTile  cols={5}>
							<Typography type="button" gutterBottom>Merch</Typography>
						</GridListTile>
						<GridListTile cols={4}>
							<Typography type="button" gutterBottom>Price</Typography>
						</GridListTile>
						<GridListTile cols={3}>
							<Typography type="button" gutterBottom align="right">Possession</Typography>
						</GridListTile>
		      		</GridList>
			        {props.drugs.map(d => { return (
						<ListItem button>
				      		<GridList
								key={d.name}
								cellHeight={15}
								cols={12}
								onClick={()=> handleClick(d)}
								className={classes.gridList} >

								<GridListTile className={classes.gridListTile} cols={5}>
									<Typography type="subheading" gutterBottom>{d.name}</Typography>
								</GridListTile>
								<GridListTile className={classes.gridListTile} cols={4}>
									<Typography type="subheading" gutterBottom>{formatPrice(d.price)}</Typography>
								</GridListTile>
								<GridListTile className={classes.gridListTile} cols={3}>
									<Typography type="subheading" gutterBottom align="right">{d.possession}</Typography>
								</GridListTile>
				      		</GridList>
						</ListItem>
			        ); })}
					<Typography style={{color:'white'}} type="button" gutterBottom align="center">
						Open Market
					</Typography>
				</CardContent>
			 </Card>
    	</Paper>
	);
}

DrugList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrugList);

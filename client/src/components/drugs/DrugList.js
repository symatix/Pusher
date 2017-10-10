import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {CardContent} from 'material-ui/Card';
import { GridList, GridListTile } from 'material-ui/GridList';
import {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import formatPrice from '../../utils/formatPrice';
import Icon from '../icons/Icon';
// icons


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
	gridListIcon:{
		padding:'0 !important',
		textAlign:'center'
	},
	gridListTile:{
		padding:'0 !important'
	},
	footerBtn:{
	},
	marketMenu:{
		margin:0,
		padding:'15px 0 5px 0',
		borderTop:'2px solid #00695C',
		backgroundColor:'#212121',
		boxShadow:' 0px -11px 8px -10px rgba(0, 0, 0, 0.2), 0px -11px 8px -10px rgba(0, 0, 0, 0.2) ',
	},
	subheader: {
		width: '100%',
	},
	headCell:{
		padding:'0 10px'
	},
	ripple:{
		display:'block !important',
		overflow:'visible !important'
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
				<CardContent >
			        {props.drugs.map(d => { return (
						<ListItem
							key={d.name}
							onClick={()=> handleClick(d)}
							button>

				      		<GridList
								cellHeight={15}
								cols={12}
								className={classes.gridList} >
								<GridListTile className={classes.gridListIcon} cols={2}>
									<Icon id={d.name} width="19px" height="19px" />
								</GridListTile>
								<GridListTile className={classes.gridListTile} cols={4}>
									<Typography type="body1" gutterBottom>{d.name}</Typography>
								</GridListTile>
								<GridListTile className={classes.gridListTile} cols={4}>
									<Typography type="body1" gutterBottom>{formatPrice(d.price)}</Typography>
								</GridListTile>
								<GridListTile className={classes.gridListTile} cols={2}>
									<Typography type="body1" gutterBottom align="center">{d.possession}</Typography>
								</GridListTile>
				      		</GridList>
						</ListItem>
			        ); })}
				</CardContent>
			 </Card>
				<GridList ripple="ripple" className={classes.marketMenu} id="toTop" style={{color:'white'}} cellHeight={30} cols={12}>
					<GridListTile  cols={4}>
						<Typography type="button" gutterBottom align="center">Merch</Typography>
					</GridListTile>
					<GridListTile cols={4}>
						<Typography type="button" gutterBottom align="center">Price</Typography>
					</GridListTile>
					<GridListTile cols={4}>
						<Typography type="button" gutterBottom align="center">Possession</Typography>
				 	</GridListTile>
				</GridList>
    	</Paper>
	);
}

DrugList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrugList);


/*
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
						<GridListTile  cols={4}>
							<Typography type="button" gutterBottom>Merch</Typography>
						</GridListTile>
						<GridListTile cols={4}>
							<Typography type="button" gutterBottom>Price</Typography>
						</GridListTile>
						<GridListTile cols={4}>
							<Typography type="button" gutterBottom align="right">Possession</Typography>
						</GridListTile>
		      		</GridList>
			        {props.drugs.map(d => { return (
						<ListItem key={d.name} button>
				      		<GridList
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
*/

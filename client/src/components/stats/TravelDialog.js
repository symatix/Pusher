import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Icon from '../icons/Icon';
import Dialog from 'material-ui/Dialog';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		background: theme.palette.background.paper,
	}
});

function TravelDialog(props) {
	const { classes, cityList, handleLocation, open } = props;

	const handleClick = (city) => {
		handleLocation(city);
	}

	return (
		<Dialog onRequestClose={()=>handleLocation(null)} open={open}>
		<div className={classes.root}>
	      <List>
	        	{cityList.map((city, index) => {
					return (
						<ListItem
							button
							disabled={props.activeCity === city ? true : false}
							key={city+index}
							onClick={()=>handleClick({name:city})}>
				          <ListItemIcon>
							 <Icon id="airplane" />
				          </ListItemIcon>
				          <ListItemText primary={city}/>
				        </ListItem>
					)
				})}
	      </List>
        </div>
	</Dialog>
	);
}


export default withStyles(styles)(TravelDialog);

import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import FlightTakeoff from 'material-ui-icons/FlightTakeoff';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

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
        <DialogTitle>Change city</DialogTitle>
		<div className={classes.root}>
	      <List>
	        	{cityList.map((city, index) => {
					return (
						<ListItem key={city+index} button onClick={()=>handleClick({name:city})}>
				          <ListItemIcon>
				            <FlightTakeoff />
				          </ListItemIcon>
				          <ListItemText primary={city} />
				        </ListItem>
					)
				})}
	      </List>
        </div>
	</Dialog>
	);
}


export default withStyles(styles)(TravelDialog);

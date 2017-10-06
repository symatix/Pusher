import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';


function StatList(props) {
	return (
		<ListItem onClick={props.action} button component="a" href="#">
          <ListItemText primary={props.primary} secondary={props.secondary} />
        </ListItem>
	);
}

export default StatList;

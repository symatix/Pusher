import React from 'react';
import {ListItem, ListItemText, ListItemIcon} from 'material-ui/List';
import Icon from '../icons/Icon';

function NavListItem(props) {
	return (
		<ListItem disabled={props.action === "" ? true : false} onClick={() => props.action(props.text, props.label)} button>
			<ListItemText  primary={props.primary} secondary={props.secondary}/>
			<ListItemIcon>
				<Icon id={props.type} />
			</ListItemIcon>
		</ListItem>
	);
}

export default NavListItem;

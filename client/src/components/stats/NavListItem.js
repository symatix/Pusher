import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Icon from '../icons/Icon';

function NavListItem(props) {
	// generate text for stats if crew is present in the city
	const secondaryText = props.influence ? `${props.secondary} (${props.influence} influence)` : props.secondary;

	return (
		<ListItem disabled={props.action === "" ? true : false} onClick={() => props.action(props.text, props.label)} button>
			<ListItemText primary={props.primary} secondary={secondaryText} />
			<ListItemIcon>
				<Icon id={props.type} />
			</ListItemIcon>
		</ListItem>
	);
}

export default NavListItem;

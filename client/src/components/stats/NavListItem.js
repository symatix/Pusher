import React from 'react';
import {ListItem, ListItemText, ListItemIcon} from 'material-ui/List';
import InfoOutline from 'material-ui-icons/InfoOutline';
import AttachMoney from 'material-ui-icons/AttachMoney';
import Flight from 'material-ui-icons/Flight';
import SupervisorAccount from 'material-ui-icons/SupervisorAccount';
import LocalHospital from 'material-ui-icons/LocalHospital';

function NavListItem(props) {

	function icon() {
		if (props.type === "info") {
			return <InfoOutline/>
		}
		if (props.type === "transaction") {
			return <AttachMoney/>
		}
		if (props.type === "people") {
			return <SupervisorAccount/>
		}
		if (props.type === "hospital") {
			return <LocalHospital/>
		}
		if (props.type === "travel") {
			return <Flight/>
		}
	}
	return (
		<ListItem onClick={() => props.action(props.text, props.label)} button>
			<ListItemText primary={props.primary} secondary={props.secondary}/>
			<ListItemIcon>
				{icon()}
			</ListItemIcon>
		</ListItem>
	);
}

export default NavListItem;

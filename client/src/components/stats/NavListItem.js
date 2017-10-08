import React from 'react';
import {ListItem, ListItemText, ListItemIcon} from 'material-ui/List';
import InfoOutline from 'material-ui-icons/InfoOutline';
import AttachMoney from 'material-ui-icons/AttachMoney';
import Flight from 'material-ui-icons/Flight';
import SupervisorAccount from 'material-ui-icons/SupervisorAccount';
import Fingerprint from 'material-ui-icons/Fingerprint';
import LocalPharmacy from 'material-ui-icons/LocalPharmacy';
import SentimentNeutral from 'material-ui-icons/SentimentNeutral';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import MyLocation from 'material-ui-icons/MyLocation';

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
			return <LocalPharmacy/>
		}
		if (props.type === "cops"){
			return <Fingerprint />
		}
		if (props.type ==="thugs"){
			return <SentimentNeutral />
		}
		if (props.type ==="storage"){
			return <ShoppingBasket />
		}
		if (props.type ==="gun"){
			return <MyLocation />
		}
		if (props.type === "travel") {
			return <Flight/>
		}
	}
	return (
		<ListItem disabled={props.action === "" ? true : false} onClick={() => props.action(props.text, props.label)} button>
			<ListItemText  primary={props.primary} secondary={props.secondary}/>
			<ListItemIcon>
				{icon()}
			</ListItemIcon>
		</ListItem>
	);
}

export default NavListItem;

import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import Icon from './icons/Icon';
import dialogStyle from '../style/dialog'

const InfoDialog = (props) => {
	return (
		<Dialog open={props.open} onRequestClose={() => props.action()}>
			<DialogTitle style={dialogStyle}>
				<Icon id="info" />&emsp;{props.heading}
			</DialogTitle>
			<DialogContent style={{paddingTop:'15px'}}>
				<DialogContentText>
					{props.text}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => props.action(null)} color="primary">
					Okay
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default InfoDialog

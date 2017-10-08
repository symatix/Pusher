import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {DialogActions, DialogContent, DialogContentText, DialogTitle} from 'material-ui/Dialog';
import dialogStyle from '../style/dialog'

const InfoDialog = (props) => {
	return (
		<Dialog open={props.open} onRequestClose={() => props.action()}>
			<DialogTitle style={dialogStyle}>
				Info - {props.heading}
			</DialogTitle>
			<DialogContent style={{paddingTop:'15px'}}>
				<DialogContentText>
					{props.text}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => props.action(null)} color="primary">
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default InfoDialog

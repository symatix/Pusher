import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog';

export default class InfoDialog extends React.Component {

	handleRequestClose = () => {
		this.props.onRequestClose();
	};

	render() {
		return (
			<Dialog open={this.props.open} onRequestClose={this.handleRequestClose}>
              <DialogTitle>{this.props.title}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {this.props.text}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleRequestClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
		);
	}
}

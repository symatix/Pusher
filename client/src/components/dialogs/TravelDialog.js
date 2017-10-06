import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import FlightTakeoff from 'material-ui-icons/FlightTakeoff';
import teal from 'material-ui/colors/teal';

const styles = {
	avatar: {
		background: teal[100],
		color: teal[600],
	},
};

class TravelDialog extends React.Component {
	handleRequestClose = () => {
		this.props.onRequestClose();
	};

	handleListItemClick = value => {
		const city = _.filter(this.props.cities, { name: value })
		this.props.onRequestClose(city[0]);
	};

	render() {
		const { classes, onRequestClose, selectedValue, cities, ...other } = this.props;
		return (
			<Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle>Go to</DialogTitle>
                <div>
                  <List>
                    {cities.map(({name}) => (
                      <ListItem
						  	disabled={name === this.props.active ? true: false}
						  	button
							onClick={() => this.handleListItemClick(name)} key={name}>
                        <ListItemAvatar>
                          <Avatar className={classes.avatar}>
                            <FlightTakeoff />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={name} />
                      </ListItem>
                    ))}
                  </List>
                </div>
            </Dialog>
		);
	}
}

TravelDialog.propTypes = {
	classes: PropTypes.object.isRequired,
	onRequestClose: PropTypes.func,
	selectedValue: PropTypes.string,
	changeCity: PropTypes.func
};


export default withStyles(styles)(TravelDialog);

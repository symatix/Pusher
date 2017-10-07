import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Slider from '@graphistry/rc-slider';
import '@graphistry/rc-slider/assets/index.css';
import formatPrice from '../../utils/formatPrice';
import { teal, red } from 'material-ui/colors';

const styles = theme => ({
	row: {
		display: 'flex',
		flexWrap: 'nowrap',
		justifyContent: 'center',
		width: '100%',
		marginTop: '1.5em'
	},
	dialog: {
		minWidth: '280px'
	},
	chip: {
		backgroundColor: teal[700],
		margin: theme.spacing.unit / 2,
		width: '50%'
	},
	button: {
		width: '50%'
	}

});

class MoneyDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: 0 }
		this.handleAfterChange = this.handleAfterChange.bind(this);
	}
	handleAfterChange = (input) => {
		this.setState({ input });
	}
	handleRequestClose = () => {
		this.props.onRequestClose();
		this.setState({ input: 0 })
	};

	handleConfirm = input => {
		this.props.onRequestClose(input);
		this.setState({ input: 0 });
	};
	renderValues() {
		const max = this.props.max ? this.props.max : 0;
		if (max) {
			return `${formatPrice(this.state.input)} / ${formatPrice(max)}`
		}
		return 'Nothing to do here..';
	}

	render() {
		const { classes, onRequestClose, title, max, range, ...other } = this.props;
		return (
			<Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle className={classes.dialog}>{this.props.title}</DialogTitle>
                <form onSubmit={()=>{this.handleConfirm(this.state.value)}}>
                    <div style={{padding:'5px 15px'}}>
                        <Slider
                            max={max}
							onAfterChange={this.handleAfterChange}
                            railStyle={{backgroundColor:max ? teal[100]: red[900], height: 10}}
                            trackStyle={{backgroundColor: max? teal[800]: red[900], height: 10}}
                            handleStyle={{
                              borderColor: max? teal[800]: red[900],
                              height: 28,
                              width: 28,
                              marginLeft: -14,
                              marginTop: -9,
                              backgroundColor: max? teal[800]: red[900],
                            }}
                        />
                    </div>
                    <div className={classes.row}>
                        <Chip label={this.renderValues()} className={classes.chip} />

                        <Button
                            className={classes.button}
                            action="submit"
                            dense
							onClick={()=>this.handleConfirm(this.state.input)}
                            color="primary">
                            Confirm
                        </Button>
                    </div>

                </form>
            </Dialog>
		);
	}
}

MoneyDialog.propTypes = {
	onRequestClose: PropTypes.func,
};

export default withStyles(styles)(MoneyDialog);

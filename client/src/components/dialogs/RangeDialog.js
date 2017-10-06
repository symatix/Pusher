import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Slider from '@graphistry/rc-slider';
import '@graphistry/rc-slider/assets/index.css';
import { teal } from 'material-ui/colors'

const styles = theme => ({
	row: {
		display: 'flex',
		flexWrap: 'nowrap',
		justifyContent: 'center',
		width: '100%',
		marginTop: '1.5em'
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

class RangeDialog extends React.Component {
	state = { value: 0 }

	handleChange(value) {
		this.setState({ value });
	}
	handleRequestClose = () => {
		this.props.onRequestClose();
	};

	handleConfirm = value => {
		this.props.onRequestClose(value);
	};
	renderValues() {
		return `${this.state.value} / ${this.props.range.max}`
	}

	render() {
		const { classes, onRequestClose, selectedValue, title, range, ...other } = this.props;
		return (
			<Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle>{this.props.title}</DialogTitle>
                <form onSubmit={()=>{this.handleConfirm(this.state.value)}}>
                    <div style={{padding:'5px 15px'}}>
                        <Slider
                            defaultValue={0}
                            min={this.props.range.min}
                            max={this.props.range.max}
                            onChange={this.handleChange.bind(this)}
                            railStyle={{backgroundColor:teal[100], height: 10}}
                            trackStyle={{backgroundColor:teal[800], height: 10}}
                            handleStyle={{
                              borderColor: teal[800],
                              height: 28,
                              width: 28,
                              marginLeft: -14,
                              marginTop: -9,
                              backgroundColor: teal[800],
                            }}
                        />
                    </div>
                    <div className={classes.row}>
                        <Chip label={this.renderValues()} className={classes.chip} />

                        <Button
                            className={classes.button}
                            action="submit"
                            dense
                            color="primary">
                            Confirm
                        </Button>
                    </div>

                </form>
            </Dialog>
		);
	}
}

RangeDialog.propTypes = {
	onRequestClose: PropTypes.func,
};

export default withStyles(styles)(RangeDialog);

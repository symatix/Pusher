import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Slider from '@graphistry/rc-slider';
import '@graphistry/rc-slider/assets/index.css';
import { teal, red } from 'material-ui/colors'
import formatPrice from '../../utils/formatPrice';

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

const initState = {
	value: 0,
	buy: true,
	max: 100,
	min: 0,
	maxBuy: 0
}

class DrugDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = initState
	}

	shouldComponentUpdate(nextProps) {

		if ((nextProps.drug.price !== this.props.drug.price) || (this.props.drug.possession !== nextProps.drug.possession)) {
			const buy = Math.floor(nextProps.cash / nextProps.drug.price);
			const space = nextProps.storage - nextProps.possession;
			const maxBuy = buy > space ? space : buy
			this.setState({ maxBuy, max: maxBuy, min: 0, value: 0 })
		}
		return true;

	}
	handleChange(value) {
		this.setState({ value });
	}
	handleRequestClose = () => {
		this.props.onRequestClose();
	};

	handleConfirm = () => {
		const payload = {
			amount: this.state.value,
			price: this.props.drug.price * this.state.value,
			name: this.props.drug.name,
		}
		if (!this.state.buy) {
			payload.amount = -payload.amount;
			payload.price = -payload.price;
		}
		payload.cash = this.props.cash - payload.price;
		payload.possession = this.props.drug.possession + payload.amount;
		this.props.onRequestClose(payload);
		this.setState(initState)
	};
	toggleAction = () => {
		const max = !this.state.buy ? this.state.maxBuy : this.props.drug.possession;
		this.setState({ buy: !this.state.buy, max: max, value: 0 })
	}
	renderValues() {
		if (this.state.max === 0) {
			if (this.props.cash < this.props.drug.price) {
				return 'No money, no fun!'
			}
			return 'Increase your storage!'
		}
		return `${this.state.value} / ${this.state.max} | ${formatPrice(this.props.drug.price * this.state.value)}`
	}
	renderSell() {
		if (this.props.drug.possession > 0) {
			return (
				<Button
					raised={!this.state.buy}
					disabled={!this.state.buy} onClick={this.toggleAction}>
					Sell
				</Button>
			)
		}
	}

	renderBtnLabel() {
		if (this.state.max) {
			return this.state.buy ? "Buy" : "Sell"
		}
		return 'Okay';
	}

	render() {
		const { classes, onRequestClose, selectedValue, drug, ...other } = this.props;
		return (
			<Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle className={classes.dialog}>
                    {drug.name}&emsp;
                    <Button raised={this.state.buy} disabled={this.state.buy} onClick={this.toggleAction}>
                        Buy
                    </Button>
					{this.renderSell()}

                </DialogTitle>
                <form onSubmit={()=>{this.handleConfirm()}}>
                    <div style={{padding:'5px 15px'}}>
                        <Slider
                            defaultValue={0}
                            min={this.state.min}
                            max={this.state.max}
                            onChange={this.handleChange.bind(this)}
                            trackStyle={{backgroundColor:teal[800], height: 10}}
                            railStyle={{
								backgroundColor:!this.state.max ? red[900] : teal[100],
								height: 10}}
                            handleStyle={{
                              borderColor: !this.state.max ? red[900] : teal[800],
                              height: 28,
                              width: 28,
                              marginLeft: -14,
                              marginTop: -9,
                              backgroundColor: !this.state.max ? red[900] : teal[800],
                            }}
                        />
                    </div>
                    <div className={classes.row}>
                        <Chip label={this.renderValues()} className={classes.chip} />

                        <Button
                            className={classes.button}
                            action="submit"
                            dense
                            onClick={()=>this.handleConfirm()}
                            color="primary">
                            {this.renderBtnLabel()}
                        </Button>
                    </div>

                </form>
            </Dialog>
		);
	}
}

DrugDialog.propTypes = {
	onRequestClose: PropTypes.func,
};

export default withStyles(styles)(DrugDialog);

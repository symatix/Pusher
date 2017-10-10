import React from 'react';
import Button from 'material-ui/Button';
import Slider from '@graphistry/rc-slider';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogContent } from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import formatPrice from '../../utils/formatPrice'
import { teal, red } from 'material-ui/colors'
import '@graphistry/rc-slider/assets/index.css';


const styles = theme => ({
	menu:{
		width:'300px'
	},
	tabButton:{
		minWidth:'100px !important'
	}
});

class DrugCheckoutDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { buy: true, value: 0, action:1 }

		this.toggleAction = this.toggleAction.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	toggleAction(e, value) {
		console.log(value)
		this.setState({ buy: !this.state.buy, action:value})
	}
	handleChange(value) {
		this.setState({ value })
	}
	handleClose() {
		this.props.drugCheckout(null);
		this.setState({ action: 1, value: 0, buy: true })
	}
	handleSubmit() {
		this.props.drugCheckout(this.state.value, this.state.buy);
		this.setState({ action: 1, value: 0, buy: true })
	}

	renderSell() {
		if (this.props.possession) {
			return 	<Tab className={this.props.classes.tabButton} label="Sell" />
		}
	}
	renderChipLabel() {
		const { maxBuy, maxStore, possession, price } = this.props;
		const max = this.state.buy ? maxBuy : possession;
		if (max === 0) {
			return maxStore === 0 ? "Your pockets are full!" : "Pushing too hard!";
		}
		return `${this.state.value} / ${max} | ${formatPrice(price * this.state.value)}`;
	}
	render() {
		const { classes, name, maxBuy, possession, open } = this.props;
		const max = this.state.buy ? maxBuy : possession;
		const btnText = this.state.buy ? "Buy" : "Sell";
		const color = !max ? red[900] : teal[800];
		const labelColor = !max ? 'rgba(183, 28, 28, 0.2)' : 'rgba(0, 121, 107, 0.2)';

		return (
			<div>
            <Dialog open={open} className={classes.dialog} onRequestClose={this.handleClose}>

					<AppBar className={classes.menu} position="static" color="default">
						<Tabs
							value={this.state.action}
							onChange={this.toggleAction}
							indicatorColor="primary"
							textColor="primary"
							fullWidth>
							<Tab disabled className={classes.tabButton} label={name} />
							<Tab className={classes.tabButton} label="Buy" />
							<Tab className={classes.tabButton} disabled={!possession ? true : false} label={possession ? "Sell" : ""} />
						</Tabs>
					</AppBar>


                <DialogContent>
                    <form
                        style={{padding:'25px 15px 5px 15px'}}
                        onSubmit={this.handleSubmit}>
	                    <Slider
	                        defaultValue={0}
	                        min={0}
	                        max={max}
	                        onChange={this.handleChange}
	                        trackStyle={{backgroundColor:teal[800], height: 10}}
	                        railStyle={{
	                            backgroundColor: teal[200],
	                            height: 10}}
	                        handleStyle={{
	                          borderColor: color,
	                          height: 28,
	                          width: 28,
	                          marginLeft: -14,
	                          marginTop: -9,
	                          backgroundColor: color,
	                        }}
	                    />
                    </form>

                </DialogContent>
                <div style={{
              		display: 'flex',
              		flexWrap: 'nowrap',
              		justifyContent: 'center',
              		width: '98%',
                    margin:'1%'
              	}}>
					<Button raised disabled color="primary" style={{backgroundColor:labelColor, color:'white', width:'80%'}}>
						{this.renderChipLabel()}
					</Button>
                    <Button
                        onClick={this.handleSubmit}
                        color="primary"
                        style={{width:'30%'}}>
                      {btnText}
                    </Button>
                </div>
            </Dialog>
          </div>);
	}
}

DrugCheckoutDialog.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrugCheckoutDialog);

import React from 'react';
import Button from 'material-ui/Button';
import Slider from '@graphistry/rc-slider';
import Chip from 'material-ui/Chip';
import Dialog, { DialogContent,	DialogTitle } from 'material-ui/Dialog';
import formatPrice from '../../utils/formatPrice'
import { teal, red } from 'material-ui/colors'
import dialogStyle from '../../style/dialog'
import '@graphistry/rc-slider/assets/index.css';


export default class DrugCheckoutDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { buy: true, value: 0 }
		this.toggleAction = this.toggleAction.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	toggleAction() {
		this.setState({ buy: !this.state.buy })
	}
	handleChange(value) {
		this.setState({ value })
	}
	handleClose() {
		this.props.drugCheckout(null);
		this.setState({ value: 0, buy: true })
	}
	handleSubmit() {
		this.props.drugCheckout(this.state.value, this.state.buy);
		this.setState({ value: 0, buy: true })
	}
	renderSell() {
		if (this.props.possession) {
			return (<Button raised={!this.state.buy} disabled={!this.state.buy} onClick={this.toggleAction} color="default">
                  Sell
                </Button>)
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
		const { name, maxBuy, possession, open } = this.props;
		const max = this.state.buy ? maxBuy : possession;
		const btnText = this.state.buy ? "Buy" : "Sell";
		const color = !max ? red[900] : teal[800];
		return (<div>
            <Dialog open={open} onRequestClose={this.handleClose}>
				<DialogTitle
				style={dialogStyle}>
					{name}
					&emsp;
					<Button raised={this.state.buy} disabled={this.state.buy} onClick={this.toggleAction} color="default">
					Buy
					</Button>
					{this.renderSell()}

				</DialogTitle>
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
                    <Chip
                        label={this.renderChipLabel()}
                        style={{backgroundColor:color, width:'50%'}}/>
                    <Button
                        onClick={this.handleSubmit}
                        color="primary"
                        style={{width:'50%'}}>
                      {btnText}
                    </Button>
                </div>
            </Dialog>
          </div>);
	}
}

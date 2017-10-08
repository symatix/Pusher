import React from 'react';
import Button from 'material-ui/Button';
import Slider from '@graphistry/rc-slider';
import Chip from 'material-ui/Chip';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import formatPrice from '../../utils/formatPrice'
import { teal, red } from 'material-ui/colors'
import dialogStyle from '../../style/dialog'
import '@graphistry/rc-slider/assets/index.css';


export default class NavCheckoutDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pay: true, value: 0 }
		this.toggleAction = this.toggleAction.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	toggleAction() {
		this.setState({ pay: !this.state.pay })
	}
	handleChange(value) {
		this.setState({ value })
	}
	handleClose() {
		this.props.action(null);
		this.setState({ value: 0, pay: true })
	}
	handleSubmit() {
		const stateChange = this.props.title.toLowerCase()
		// 3 variables, first the value, than the key in store and after that does it add or substract money
		this.props.action(this.state.value, stateChange, this.state.pay);
		this.setState({ value: 0, pay: true })
	}
	renderSell() {
		if (this.props.btnText[1]) {
			return (<Button raised={!this.state.pay} disabled={!this.state.pay} onClick={this.toggleAction} color="default">
                  {this.props.btnText[1]}
                </Button>)
		}
	}
	render() {
		const { title, firstMax, secondMax, total, btnText, open } = this.props;
		const max = this.state.pay ? firstMax : secondMax;
		const maxTotal = this.state.pay ? total : secondMax;
		const color = !max ? red[900] : teal[800];
		const button = this.state.pay ? btnText[0] : btnText[1];
		const chipText = !max ? "Pushing too hard!" : `${formatPrice(this.state.value)} / ${formatPrice(max)} | ${formatPrice(maxTotal)}`;
		return (<div>
            <Dialog open={open} onRequestClose={this.handleClose}>
              <DialogTitle
				  style={dialogStyle}>
                  {title}
                  &emsp;
                 <Button raised={this.state.pay} disabled={this.state.pay} onClick={this.toggleAction} color="default">
                   {btnText[0]}
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
                        label={chipText}
                        style={{backgroundColor:color, width:'50%'}}/>
                    <Button
                        onClick={this.handleSubmit}
                        color="primary"
                        style={{width:'50%'}}>
                      {button}
                    </Button>
                </div>
            </Dialog>
          </div>);
	}
}

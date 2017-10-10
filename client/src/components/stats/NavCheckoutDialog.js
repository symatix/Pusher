import React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import Slider from '@graphistry/rc-slider';
import Dialog, { DialogContent } from 'material-ui/Dialog';
import formatPrice from '../../utils/formatPrice'
import { teal, red } from 'material-ui/colors'
import '@graphistry/rc-slider/assets/index.css';


export default class NavCheckoutDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pay: true, value: 0, action:1 }
		this.toggleAction = this.toggleAction.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleClose = this.handleClose.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	toggleAction(e, action) {
		if (this.props.btnText[1]){
			this.setState({ pay: !this.state.pay, action  })
		}
	}
	handleChange(value) {
		this.setState({ value })
	}
	handleClose() {
		this.props.action(null);
		this.setState({ value: 0, pay: true, action: 1 })
	}
	handleSubmit() {
		const stateChange = this.props.title.toLowerCase();

		// 3 variables, first the value, than the key in store and after that does it add or substract money
		this.props.action(this.state.value, stateChange, this.state.pay);
		this.setState({ action: 1, value: 0, pay: true })
	}
	render() {
		const { title, firstMax, secondMax, total, btnText, open } = this.props;
		const max = this.state.pay ? firstMax : secondMax;
		const maxTotal = this.state.pay ? total : secondMax;
		const color = !max ? red[900] : teal[800];
		const labelColor = !max ? 'rgba(183, 28, 28, 0.2)' : 'rgba(0, 121, 107, 0.2)';
		const button = this.state.pay ? btnText[0] : btnText[1];
		const chipText = !max ? "Pushing too hard!" : `${formatPrice(this.state.value)} / ${formatPrice(max)} | ${formatPrice(maxTotal)}`;
		return (<div>
            <Dialog open={open} onRequestClose={this.handleClose}>

				<AppBar style={{minWidth:'300px'}} position="static" color="default">
					<Tabs
						value={this.state.action}
						onChange={this.toggleAction}
						indicatorColor="primary"
						textColor="primary"
						fullWidth>
						<Tab style={{minWidth:'100px'}} disabled label={title} />
						<Tab style={{minWidth:'100px'}} label={btnText[0]} />
						<Tab style={{minWidth:'100px'}} disabled={!btnText[1] ? true : false} label={ btnText[1] ? btnText[1] : ""} />
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
						{chipText}
					</Button>
                    <Button
                        onClick={this.handleSubmit}
                        color="primary"
                        style={{width:'30%'}}>
                      {button}
                    </Button>
                </div>
            </Dialog>
          </div>);
	}
}

// ya, i know..wiiierd name for a dialog that handles health and storage

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import Slider from '@graphistry/rc-slider';
import Dialog, { DialogContent } from 'material-ui/Dialog';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Typography from 'material-ui/Typography';
import formatPrice from '../../utils/formatPrice'
import { teal, red, grey } from 'material-ui/colors'
import '@graphistry/rc-slider/assets/index.css';
import Icon from '../icons/Icon';

export default class SelfDialog extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { doIt: false }
		this.handleChange = this.handleChange.bind( this )
		this.handleClose = this.handleClose.bind( this )
		this.handleSubmit = this.handleSubmit.bind( this )
	}
	handleChange( event, checked ) {
		this.setState( { doIt: checked } );
	}
	handleClose() {
		this.props.action( null );
		this.setState( { doIt: false } )
	}
	handleSubmit() {
		const decision = this.props.title.toLowerCase()
		this.props.action( decision, this.state.doIt );
		this.setState( { doIt: false } )
	}
	render() {
		const { open, title, label, poor } = this.props;
		const color = poor ? red[ 900 ] : teal[ 400 ];
		const iconTitle = title ? title.toLowerCase() : "";
		return (
			<Dialog open={open} onRequestClose={this.handleClose}>

				<AppBar style={{minWidth:'300px'}} position="static" color="default">
					<Tabs
						value={0}
                        indicatorColor={color}
                        textColor={color}
						fullWidth>
						<Tab style={{minWidth:'100%'}} label={<Icon id={iconTitle} />} />
					</Tabs>
				</AppBar>
              <DialogContent>
                       <form
                            style={{padding:'25px 15px 5px 15px'}}
                            onSubmit={this.handleSubmit}>
                            <FormControlLabel
                                disabled={poor}
                                control={
                                    <Checkbox
                                        checked={this.state.doIt}
                                        onChange={this.handleChange}
                                        value="doIt"/>
                                }
                                label={label}/>
                        </form>


                </DialogContent>


                <div style={{
              		display: 'flex',
              		flexWrap: 'nowrap',
              		justifyContent: 'center',
              		width: '98%',
                    margin:'1%'}}>
                    <Button
                        onClick={this.handleClose}
                        color="primary"
                        style={{width:'50%', color:teal[ 400 ]}}>
                        Don't do it
                    </Button>
                    <Button
                        disabled={poor }
                        onClick={this.handleSubmit}
                        color="primary"
                        style={{width:'50%', color:color}}>
                        Do it
                    </Button>
                </div>

                 </Dialog>
		);
	}
}

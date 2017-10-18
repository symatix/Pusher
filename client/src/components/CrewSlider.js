import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import { GridList, GridListTile } from 'material-ui/GridList';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Slider from '@graphistry/rc-slider';
import { teal, grey } from 'material-ui/colors'
import '@graphistry/rc-slider/assets/index.css';

const listStyle = {
	backgroundColor: '#212121',
	marginTop: 20,
	boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
}

class CrewSlider extends Component {
	state = { actionOne: this.props.data.altVal, actionTwo: this.props.data.defVal }

	handleClick() {
		const { crew, city, conf } = this.props.data;

		let newOrders = {
			activeCity: {
				[crew]: {
					enemy: this.state.actionOne,
					drug: this.state.actionTwo,
				}
			}
		}

		if (crew === 'cops') {
			newOrders.activeCity.wickedRaid = city.wickedRaid + (conf.drug * this.state.actionTwo)
			newOrders.activeCity.robbery = city.robbery + (conf.enemy * this.state.actionOne)
		}
		if (crew === 'thugs') {
			newOrders.activeCity.luckyDrop = city.luckyDrop + (conf.drug * this.state.actionTwo)
			newOrders.activeCity.busts = city.busts + (conf.enemy * this.state.actionOne)
		}
		this.props.data.action('crew', newOrders);
	}

	handleNumbers(value) {
		this.setState({
			actionTwo: value,
			actionOne: this.props.data.maxVal - value
		})
	}
	render() {
		const { actionOne, actionTwo, defVal, maxVal } = this.props.data;
		return (
			<ListItem style={listStyle}>
            <GridList
                style={{width:"100%"}}
                cellHeight="auto"
                cols={10}>
                <GridListTile cols={2}>
                    <Typography  type="body2" gutterBottom align="center">
                        {actionOne}
                        <Typography  type="caption" align="center">
                            {this.state.actionOne} assigned
                        </Typography>
                    </Typography>
                </GridListTile>

				<GridListTile cols={6}>
                    <Slider
                        style={{margin:'15px auto', width:'70%'}}
                        defaultValue={defVal}
                        min={0}
                        max={maxVal}
                        onChange={value=>this.handleNumbers(value)}
                        trackStyle={{backgroundColor:grey[800], height: 3}}
                        railStyle={{
                            backgroundColor: grey[500],
                            height: 3}}
                        handleStyle={{
                          borderColor: teal[ 800 ],
                          height: 28,
                          width: 28,
                          marginLeft: -14,
                          marginTop: -12,
                          backgroundColor: teal[ 800 ],
                        }}
                    />
                </GridListTile>

                <GridListTile cols={2}>
                    <Typography  type="body2" gutterBottom align="center">
                        {actionTwo}
                        <Typography  type="caption" align="center">
                            {this.state.actionTwo} assigned
                        </Typography>
                    </Typography>
                </GridListTile>

                <GridListTile cols={10}>
                    <Button
                        onClick={this.handleClick.bind(this)}
                        color="primary"
                        style={{width:'100%'}}>
                        Send The Word
                    </Button>
                </GridListTile>
            </GridList>
        </ListItem>
		)
	}
}

export default CrewSlider;

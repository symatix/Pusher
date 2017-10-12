import React from 'react';
import config from '../../config';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import {ListItem} from 'material-ui/List';
import Slider from '@graphistry/rc-slider';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { GridList, GridListTile } from 'material-ui/GridList';
import { FormControlLabel } from 'material-ui/Form';
import Icon from '../icons/Icon';
import Dialog, { DialogContent, DialogActions } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import formatPrice from '../../utils/formatPrice'
import { teal, red, grey } from 'material-ui/colors'
import '@graphistry/rc-slider/assets/index.css';



const listStyle = {
    backgroundColor:'#212121',
    marginTop:20,
    boxShadow:'0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
}


export default class NavCheckoutDialog extends React.Component {
	constructor(props) {
		super(props);
        this.state = { doThis:"chill", slider:this.props.defVal }

        this.handleRadio = this.handleRadio.bind(this);
        this.handleSlider = this.handleSlider.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.descriptionOne = this.descriptionOne.bind(this);
        this.descriptionTwo = this.descriptionTwo.bind(this);
	}
    handleRadio(e){
        this.setState({doThis:e.target.value})
    }
    handleSlider(value){
        this.setState({slider: value})
    }
	handleClose() {
		this.props.action(null);
		this.setState({ slider:0, doThis:"chill"})
	}
    handleSubmit(e){
        let { doThis, slider } = this.state;

        const orders = { doThis, allocate:slider, crew:this.props.icon }
        this.props.action(orders)
        this.setState({ doThis:"chill" })
    }
    descriptionOne(){
        const { crew } = this.props;
        const onEnemy = crew ? `- ${crew - this.state.slider}%`: '0%';
        const textEnemy = this.props.icon === "cops" ? 'robbery' : 'raids';
        return `${onEnemy} ${textEnemy}`
    }
    descriptionTwo(){
        const { crew } = this.props;
        const onDrugs = crew ? `+ ${this.state.slider}%`: '0%';
        return `${onDrugs} lucky drop`
    }
	render() {
        const { icon, crew, expense, defVal, text, cash } = this.props;
        const color = crew ? teal[800] : red[900];
        const radioCrew = icon ? icon : "cops"; // set default to cops until props arrive
        const disableRecruit = cash < config[radioCrew].recruit ? true : false;
        const disableDispose = (cash < config[radioCrew].dispose) || !crew ? true : false;
        const recruitLabel = `Recruit (${formatPrice(config[radioCrew].recruit)} | daily ${formatPrice(config[radioCrew].expense)})`;
        const disposeLabel = `Dispose (${formatPrice(config[radioCrew].dispose)})`;
		return (
        <div>
            <Dialog open={this.props.open} onRequestClose={this.handleClose}>
				<AppBar style={{minWidth:'300px'}} position="static" color="default">
					<Tabs
						value={1}
						indicatorColor="primary"
						textColor="primary"
						fullWidth>
						<Tab style={{minWidth:'100px'}} disabled label={<Icon id={icon} />} />
						<Tab style={{minWidth:'100px'}} label="Crew" />
					</Tabs>
				</AppBar>
                <DialogContent>
                    <ListItem style={listStyle}>
                        <GridList
                            style={{width:'100%'}}
                            cellHeight="auto"
                            cols={10}>
                            <GridListTile cols={7}>
                                <form style={{paddingLeft:20}}
                                    onSubmit={this.handleSubmit}>
                                    <RadioGroup
                                        aria-label="crew"
                                        name="crew"
                                        value={this.state.doThis}
                                        onChange={this.handleRadio}>
                                        <FormControlLabel value="chill" control={<Radio />} label="Chill" />
                                        <FormControlLabel value="recruit" control={<Radio disabled={disableRecruit} />} label={recruitLabel} />
                                        <FormControlLabel value="dispose" control={<Radio disabled={disableDispose} />} label={disposeLabel} />
                                    </RadioGroup>
                                </form>
                            </GridListTile>
                            <GridListTile style={{paddingTop:15, textAlign:'center'}} cols={3}>
                                    <Icon id={icon} /> <Typography  type="body2" gutterBottom>{crew ? crew : "0"}</Typography>
                                    <Icon id="funds" /> <Typography  type="body2" gutterBottom>{expense ? formatPrice(expense) : "$ 0"}</Typography>
                            </GridListTile>
                            <GridListTile cols={5}>
                                <Typography  type="body2" gutterBottom>
                                    {text[0]}
                                    <Typography  type="caption" align="center">
                                        {this.descriptionOne()}
                                    </Typography>
                                </Typography>
                            </GridListTile>
                            <GridListTile cols={5}>
                                <Typography  type="body2" gutterBottom align="right">
                                    {text[1]}
                                    <Typography  type="caption" align="center">
                                        {this.descriptionTwo()}
                                    </Typography>
                                </Typography>
                            </GridListTile>
                            <GridListTile cols={10}>
                                <Slider
                                    style={{margin:'15px auto', width:'70%'}}
                                    defaultValue={defVal}
                                    min={0}
                                    max={crew}
                                    onChange={this.handleSlider}
                                    trackStyle={{backgroundColor:grey[800], height: 3}}
                                    railStyle={{
                                        backgroundColor: grey[500],
                                        height: 3}}
                                    handleStyle={{
                                      borderColor: color,
                                      height: 28,
                                      width: 28,
                                      marginLeft: -14,
                                      marginTop: -12,
                                      backgroundColor: color,
                                    }}
                                />
                            </GridListTile>
                            <GridListTile cols={10}>
                                <Button
                                    onClick={this.handleSubmit}
                                    color="primary"
                                    style={{width:'100%'}}>
                                    Send The Word
                                </Button>
                            </GridListTile>
                        </GridList>
                    </ListItem>


                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={this.handleClose}
                        color="primary"
                        style={{width:'100%'}}>
                        Close
                    </Button>
                </DialogActions>

            </Dialog>
          </div>
        );
	}
}

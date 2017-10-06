import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import StatList from './StatList';
import TravelDialog from '../dialogs/TravelDialog';
import RangeDialog from '../dialogs/RangeDialog';
import * as actions from '../../actions';
import { formatPrice } from '../../utils/formatPrice';

const styles = {
	card: {
		maxWidth: '100%',
		height: 450
	},
	media: {
		height: 200,
	},
	btn: {
		width: '100%',
		fontSize: '1.5em'
	},
	btnList: {
		position: 'fixed',
		width: '90%',
		bottom: 20,
		align: 'center'
	}
};

class StatCard extends Component {
	state = {
		travel: false,
		loaner: false,
		travelValue: this.props.cities[0].name,
		activeDialog: {
			open: false,
			onRequestClose: null
		}
	}
	// oh boy, here we go, gonna define all actions and pass them down to list elements for click trigger
	// takes care of travel
	handleTravelOpen = () => {
		this.setState({
			travel: true,
		});
	};
	handleTravelClose = city => {
		if (!city || city.name === this.state.travelValue) {
			this.setState({ travel: false })
			return;
		}
		this.props.changeActiveCity(city)
		this.setState({ travelValue: city.name, travel: false });
		return;
	};
	handleLoanerOpen = () => {
		console.log("open")
		this.setState({
			loaner: true,
		});
	};
	handleLoanerClose = amount => {
		if (!amount) {
			this.setState({ activeDialog: { open: false } })
			return;
		}
		const dept = {
			loaner: this.props.money.loaner - amount,
			cash: this.props.money.cash - amount
		}
		this.props.payLoaner(dept);
		this.setState({ activeDialog: { open: false } });
		return;
	};




	handleDialog(action) {
		if (action === 'moneyLoaner') {
			this.setState({
				activeDialog: {
					open: true,
					onRequestClose: this.handleLoanerClose,
					max: this.props.money.loaner < this.props.money.cash ? this.props.money.loaner : this.props.money.cash,
					min: 0
				}
			})
		}
	}

	render() {
		const { classes, stats, actions } = this.props;
		return (

			<div>
            <Card className={classes.card}>
                <CardContent>
					{this.props.cityName ? <StatList primary={this.props.cityName} secondary="CITY"/>: ""}
                    {stats.map(({data, label, action}) => {
						return <StatList key={label} primary={data} secondary={label} action={()=>this.handleDialog(action)} />


                    })}

                </CardContent>
                <CardActions className={classes.btnList}>
                    {actions.map(({action, label}) => {
                        return (
							<Button
								onClick={label === 'travel' ? this.handleTravelOpen : this.handleActionOpen}
								key={label}
								dense
								action={action}
								color="primary"
								className={classes.btn}>
								{label}
							</Button>
						)
                    })}
                </CardActions>
            </Card>
            <TravelDialog
                selectedValue={this.state.travelValue}
                open={this.state.travel}
                onRequestClose={this.handleTravelClose}
                cities={this.props.cities}
				active={this.props.activeCity.name}
            />
            <RangeDialog
                open={this.state.activeDialog.open}
                onRequestClose={this.state.activeDialog.onRequestClose}
				min={this.state.activeDialog.min}
                max={this.state.activeDialog.max}
				title="PAY UP! Buoii.."
            />
        </div>
		);
	}

}

function mapStateToProps(state) {
	return { ...state }
}
StatCard.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, actions)(withStyles(styles)(StatCard));

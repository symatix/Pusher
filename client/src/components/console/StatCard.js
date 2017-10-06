import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import StatList from './StatList';
import TravelDialog from '../dialogs/TravelDialog';
import RangeDialog from '../dialogs/RangeDialog';
import { changeActiveCity } from '../../actions';

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
		action: false,
		travelValue: this.props.cities[0].name
	}

	handleTravelOpen = () => {
		this.setState({
			travel: true,
		});
	};
	handleActionOpen = () => {
		this.setState({
			action: true,
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

	handleActionClose = amount => {
		if (!amount) {
			this.setState({ action: false })
			return;
		}
		console.log(amount)
		this.setState({ action: false });
		return;
	};

	render() {
		const { classes, stats, actions } = this.props;
		return (

			<div>
            <Card className={classes.card}>
                <CardContent>
					{this.props.cityName ? <StatList primary={this.props.cityName} secondary="CITY"/>: ""}
                    {stats.map(({data, label}) => {
                      return <StatList key={label} primary={data} secondary={label} />
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
                open={this.state.action}
                onRequestClose={this.handleActionClose}
                range={{min:0,max:100}}
				title="Pay the loaner shark"
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

export default connect(mapStateToProps, { changeActiveCity })(withStyles(styles)(StatCard));

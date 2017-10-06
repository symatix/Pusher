import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatNav from './console/StatNav';

class Console extends Component {
	render() {
		return (
			<div>
                <StatNav
                    {...this.props}/>
            </div>
		)
	}
}

function mapStateToProps({ pusher, money, activeCity, cities }) {

	return { pusher, money, activeCity, cities }
}

export default connect(mapStateToProps)(Console);

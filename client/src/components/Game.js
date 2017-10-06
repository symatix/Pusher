import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexgrid';
import Drugs from './Drugs';
import Console from './Console';


class Game extends Component {
	render() {
		return (
			<Grid>
				<Row center="sm">
					<Col xs={12} sm={6}>
						<Drugs />
					</Col>

					<Col xs={12} sm={4}>
						<Console />
					</Col>
				</Row>
            </Grid>
		)
	}
}

export default Game;

import React from 'react';
import { Grid, Row, Col } from 'react-flexgrid';
import Drugs from '../containers/Drugs';
import Stats from '../containers/Stats';


const Layout = () => {
	return (
		<Grid>
			<Row center="sm">
				<Col xs={12} sm={6}>
					<Drugs />
				</Col>

				<Col xs={12} sm={4}>
					<Stats />
				</Col>
			</Row>
        </Grid>
	)
}

export default Layout;

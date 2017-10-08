import React from 'react';
import Grid from 'material-ui/Grid';
//import { Grid, Row, Col } from 'react-flexgrid';
import Options from '../containers/Options';
import Drugs from '../containers/Drugs';
import Stats from '../containers/Stats';


const Layout = () => {
	return (
		<div>
			<Grid container justify="center">
				<Grid item xs={12} md={12} lg={8}>
					<Options />
				</Grid>
			</Grid>
			<Grid container justify="center" direction="row">
				<Grid item xs={12} md={6} lg={4}>
					<Drugs />
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<Stats />
				</Grid>
			</Grid>
		</div>
	)
}

export default Layout;

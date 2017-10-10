import React from 'react';
import Grid from 'material-ui/Grid';
import Drugs from '../containers/Drugs';
import Stats from '../containers/Stats';
import Global from '../containers/Global';
import Icons from './icons';


const Layout = () => {
	return (
		<div>
			<Icons />
			<Global />
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

import React from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Icon from '../icons/Icon';
import { teal, red } from 'material-ui/colors';

import Icons from '../icons';


const DialogTitle = props => {
	const { alert, iconLabel, label, handleClick, width } = props;
	const color = !alert ? teal[500] : red[900];
	return (
		<AppBar
			onClick={handleClick}
            style={width}
            position="static"
            color="default">
            <Icons />
            <Tabs
                value={1}
                indicatorColor={color}
                textColor={color}
                fullWidth>
				<Tab
					label={<Icon fill={color} id={iconLabel} />}/>
				<Tab
                    label={label}/>
            </Tabs>
        </AppBar>
	)
}
DialogTitle.defaultProps = {
	alert: false,
};
export default DialogTitle

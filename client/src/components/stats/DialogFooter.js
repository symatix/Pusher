import React from 'react';
import Typography from 'material-ui/Typography';

const DialogFooter = props => {
	const { width, description } = props;
	return (
		<div style={width}>
			<Typography style={{padding:15}} type='subheading'>
		        {description}
		    </Typography>
		</div>
	)
}
export default DialogFooter;

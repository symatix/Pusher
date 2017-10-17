import React from 'react';
import Icon from '../icons/Icon';
import Button from 'material-ui/Button';

const DialogItemAction = props => {
	const { alert, handleClick } = props;
	return (
		<Button raised color="primary" onClick={handleClick} disabled={alert}>
            {<Icon id="funds" />}
        </Button>
	)
}
export default DialogItemAction;

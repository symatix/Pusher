import React from 'react';
import DialogItemAction from './DialogItemAction';
import DialogItemIconTop from './DialogItemIconTop';
import DialogItemIconLeft from './DialogItemIconLeft';

const DialogItem = props => {
	const { iconTop, alert, icon, main, sub, stats, action } = props;
	return (
		<div>
            {iconTop
                ? <DialogItemIconTop
					action={action ? <DialogItemAction alert={alert} handleClick={action} /> : false}
                    icon={icon}
                    main={main}
                    sub={sub}
					stats={stats}
                    alert={alert} />
                : <DialogItemIconLeft
					action={action ? <DialogItemAction alert={alert} handleClick={action} /> : false}
                    icon={icon}
                    main={main}
                    sub={sub}
                    stats={stats}
                    alert={alert}/>
            }
        </div>
	)
}

DialogItemIconTop.defaultProps = {
	iconTop: false,
	alert: false,
};
export default DialogItem;

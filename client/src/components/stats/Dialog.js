/**
 * PROPS NEEDED
 * open, iconLabel, label , icon, main, sub, stats, description, action
 *
 **/
import React from 'react';
import Dialog from 'material-ui/Dialog';
import DialogTitle from './DialogTitle';
import DialogItem from './DialogItem';
import DialogFooter from './DialogFooter';
import { GridList, GridListTile } from 'material-ui/GridList';
import CrewSlider from '../CrewSlider';

const width = { width: 400 };

const DialogMain = props => {
	const { open, close, slider, iconLabel, label, content, description } = props;
	return (
		<Dialog open={open} onRequestClose={()=>close(null)}>
            <DialogTitle
				style={{marginBottom:15}}
				handleClick={()=>close(null)}
				iconLabel={iconLabel}
				label={label}
				width={width}/>
            <GridList
                style={width}
                cellHeight="auto"
                cols={2}>
				{content.map(({icon, main, sub, stats, alert, iconTop, action}) => {
					return(
						<GridListTile cols={1} key={icon}>
		                    <DialogItem
								iconTop={iconTop ? iconTop : false}
								icon={icon}
								main={main}
								sub={sub}
								stats={stats}
								alert={alert}
								action={action ? action : false }/>
		                </GridListTile>
					)
				})}
            </GridList>
			{slider
			? <CrewSlider data={slider}/>
			: ""
			}
			{description
			? <DialogFooter description={description} width={width}/>
			: ""
			}
        </Dialog>
	)
}
export default DialogMain;

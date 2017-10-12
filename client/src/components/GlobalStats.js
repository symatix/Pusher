import React from 'react';
import { GridList, GridListTile } from 'material-ui/GridList';
import {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Icon from '../components/icons/Icon';
import formatPrice from '../utils/formatPrice';

const GlobalStats = (props) => {
    const { classes, cash, possession, health, cops, thugs, city } = props;
    return(
        <ListItem>
            <GridList
                className={classes.gridList}
                cellHeight="auto"
                align="center"
                cols={4}>
                <GridListTile cols={4}>
                    <Icon id="funds" /> <Typography type="headline" gutterBottom>{formatPrice(cash)}</Typography>
                </GridListTile>
                <GridListTile cols={1}>
                    <Icon id="storage" /> <Typography type="body1" gutterBottom>{possession}</Typography>
                </GridListTile>
                <GridListTile cols={1}>
                    <Icon id="hospital" /> <Typography type="body1" gutterBottom>{health}</Typography>
                </GridListTile>
                <GridListTile cols={1}>
                    <Icon id="cops" /> <Typography type="body1" gutterBottom>{cops}</Typography>
                </GridListTile>
                <GridListTile cols={1}>
                    <Icon id="thugs" /> <Typography type="body1" gutterBottom>{thugs}</Typography>
                </GridListTile>
                <GridListTile cols={4}>
                    <Typography type="caption" gutterBottom>{city}</Typography>
                </GridListTile>
            </GridList>
        </ListItem>
    )
}

export default GlobalStats;

import React from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogActions, DialogContent } from 'material-ui/Dialog';
import { GridList, GridListTile } from 'material-ui/GridList';
import {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Slide from 'material-ui/transitions/Slide';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Icon from '../components/icons/Icon';
import formatPrice from '../utils/formatPrice'
import {teal, grey} from 'material-ui/colors';

const styles = theme => ({
    button: {
        position:'fixed',
        bottom:5,
        left:5,
        zIndex:100,
        margin: theme.spacing.unit,
        opacity:'0.5',
        backgroundColor:grey[700]
    },
    actionButtons:{
        justifyContent:'center'
    },
	gridList: {
		width: "100%",
		padding:"5px 10px",
		backgroundColor:'#212121',
		cursor:'pointer',
	    boxShadow:'0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
	},
    title:{
        backgroundColor:'#212121',
        boxShadow:'0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
        marginBottom:15
    },
    iconHoverOff: {
        width:'100%',
        height:'100%',
        fontSize:'35px',
        fill: 'black',
        '&:hover': {
            fill: teal[600],
        },
        transform: 'rotate(180deg)',
        transition:'transform 0.2s ease-in'
    },
    iconHoverOn: {
        width:'100%',
        height:'100%',
        fontSize:'35px',
        fill: teal[400],
        transition:'transform 0.2s ease-in'
    },
});

class GlobalNav extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
      const { classes, cash, health, cops, thugs, city, possession } = this.props;
    return (
      <div>
        <Button fab aria-label="add" className={classes.button}>
            <ExpandMore className={this.state.open ? classes.iconHoverOn : classes.iconHoverOff} onClick={this.handleClickOpen} />
        </Button>
        <Dialog open={this.state.open} transition={<Slide direction="up"/>} onRequestClose={this.handleRequestClose}>

                <ListItem>
                    <GridList
                        className={classes.gridList}
                        cellHeight="auto"
                         align="center"
                        cols={4}>
                        <GridListTile cols={4}>
                            <Typography type="headline" gutterBottom>{formatPrice(cash)}</Typography>
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


          <DialogContent>


          </DialogContent>
          <DialogActions className={classes.actionButtons}>
            <Button onClick={this.handleRequestClose} color="primary">
              New
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Load
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

GlobalNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({activeCity, money, pusher}){
    let props = {
        cash:money.cash,
        health:pusher.health,
        possession:pusher.possession,
        city:activeCity.name,
        cops:activeCity.ownedCops,
        thugs:activeCity.ownedThugs,
    }
    return props;
}
export default connect(mapStateToProps)(withStyles(styles)(GlobalNav));

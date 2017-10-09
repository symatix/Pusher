import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import ExpandMore from 'material-ui-icons/ExpandMore';
import dialogStyle from '../style/dialog'

import {teal, red, grey} from 'material-ui/colors';

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
    buttonOption:{
            width:'33%',
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
            fill: teal[400],
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
      const { classes } = this.props;
    return (
      <div>
        <Button fab aria-label="add" className={classes.button}>
            <ExpandMore className={this.state.open ? classes.iconHoverOn : classes.iconHoverOff} onClick={this.handleClickOpen} />
        </Button>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleRequestClose}>
          <DialogTitle className={classes.title}>{"Options"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Imagine some stats here...
            </DialogContentText>
          </DialogContent>
          <DialogActions align="center">
            <Button className={classes.buttonOption} onClick={this.handleRequestClose} color="primary">
              New
            </Button>
            <Button className={classes.buttonOption} onClick={this.handleRequestClose} color="primary">
              Load
            </Button>
            <Button className={classes.buttonOption} onClick={this.handleRequestClose} color="primary">
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
export default withStyles(styles)(GlobalNav);

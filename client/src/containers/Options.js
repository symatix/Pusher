import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = theme => ({
  paper: {
    padding: '15px 5px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link:{
      textDecoration:'none',
  }
});

function Options(props) {
    const classes = props.classes;
    return (
            <Paper className={classes.paper} elevation={4}>
                <Link className={classes.link} to="/new">
                    <Button raised color="primary">
                        New Game
                    </Button>
                </Link>
                <Button disabled raised color="primary">
                    Load Game
                </Button>
                <Button disabled raised color="primary">
                    Save Game
                </Button>
            </Paper>
    );
}

Options.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Options);

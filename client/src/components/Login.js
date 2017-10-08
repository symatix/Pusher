import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Fingerprint from 'material-ui-icons/Fingerprint';

const styles = theme => ({
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  link:{
      textDecoration:'none',
  }
});

function Login(props) {
    const classes = props.classes;
    return (
      	<Grid
    		container
    		align="center"
    		direction="row"
    		justify="center">
            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Paper className={classes.paper} elevation={4}>
                    <Typography type="headline" component="h3">
                        Want to be The Pusher?
                    </Typography>
                    <Typography type="body1" component="p">
                        Gotta see some ID first....
                    </Typography>
                    <Fingerprint />
                    <br/>
                    <a className={classes.link} href="/auth/google">
                        <Button raised color="default">
                        	Google
                        </Button>
                    </a>
                </Paper>
            </Grid>
        </Grid>
    );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

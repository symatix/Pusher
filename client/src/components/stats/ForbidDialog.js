import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

const ForbidDialog = (props) => {
    return (
        <div>
            <Dialog open={props.open} transition={Slide} onRequestClose={props.action}>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.action} color="primary">
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default ForbidDialog;

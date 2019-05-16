import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}

class SimpleDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.showDialog,
            teammembers: []
        }
        console.log("this.props", this.props)
    }


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.callbackFromTeamMembers(false)
    };

    showAvailableMembers = () => {
        return (
            <React.Fragment>
                {
                    this.props.currentTeammembers.length > 0 
                    ? this.props.currentTeammembers.map((member) => {return member + ", "}) 
                    : <span>No team members currently included</span>
                }
            </React.Fragment>
        )
    }

    addOrModifyTeammembers = (event) => {
        let teammembersRaw = event.target.value
        let teammembersArray = teammembersRaw.split(",")
        console.log("event: ", event.target.value)
        this.setState({teammembers: teammembersArray})
    }

    callbackUpdateTeammembers = () => {
        this.props.callbackFromTeamMembersForMembers(this.state.teammembers)
        this.handleClose()
    }

    render() {
        const addOrModifyTeammembersContent = (
            <React.Fragment>
                <input 
                    type="text" 
                    placeholder="input team members comma seperated" 
                    onChange={this.addOrModifyTeammembers} 
                />
            </React.Fragment>
        )
    return (
        <div>
            <Dialog
                open={this.props.showDialog}
                onClose={this.handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
            <DialogTitle id="draggable-dialog-title">Available Team Members</DialogTitle>
            <DialogContent>
            <DialogContentText>
                {this.showAvailableMembers()}
            </DialogContentText>
            </DialogContent>
            <DialogTitle id="draggable-dialog-title">Add or Modify Team Members</DialogTitle>
            <DialogContent>
            <DialogContentText>
                {addOrModifyTeammembersContent}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={this.callbackUpdateTeammembers} color="primary">
                Add/Modify
            </Button>
            </DialogActions>
            </Dialog>
        </div>
    );
    }
}

export default SimpleDialog;

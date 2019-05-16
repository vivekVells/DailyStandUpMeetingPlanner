import React from 'react'
import SimpleDialog from './SimpleDialog';
import Button from '@material-ui/core/Button';

class TeamMembers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false,
            teammembers: []
        }
    }

    handleOnClick = () => {
        console.log("add/modify team members")
        this.setState({
            showDialog: true
        })
    }

    showOrHideCallback = (flag) => {
        this.setState({showDialog: flag})
    }

    getTeammembers = (members) => {
        console.log("getTeammembers: ", members)
        this.setState({teammembers: members})
    }

    render() {
        return(
            <React.Fragment>
                <Button variant="outlined" color="primary" onClick={this.handleOnClick}>
                Add/Modify Team Members
                </Button>
                {
                    this.state.showDialog 
                    ? 
                        <SimpleDialog 
                            showDialog={this.state.showDialog}
                            callbackFromTeamMembers={this.showOrHideCallback}
                            callbackFromTeamMembersForMembers={this.getTeammembers}
                            currentTeammembers={this.state.teammembers}
                        /> 
                    : ""
                }
            </React.Fragment>
        )
    }
}

export default TeamMembers
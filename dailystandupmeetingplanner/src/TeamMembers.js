import React from 'react'
import SimpleDialog from './SimpleDialog';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';
import RandomMembers from './RandomMembers';
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

    showAvailableMembers = () => {
        return (
            <React.Fragment>
                {
                    this.state.teammembers.length > 0 
                    ? this.state.teammembers.map((member) => {return member + ", "}) 
                    : <span>No team members currently included</span>
                }
            </React.Fragment>
        )
    }

    render() {
        return(
            <React.Fragment>
                <div style={{paddingLeft: 20, paddingRight: 20}}>
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
                    <br /> <br />
                    <Paper>
                        <Typography variant="h5" component="h3">
                            Available Team Members
                        </Typography>
                        <Typography component="p">
                            {this.showAvailableMembers()}
                        </Typography>
                    </Paper>
                    
                    <br /> <br />
                    <RandomMembers
                        currentTeammembers={this.state.teammembers}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default TeamMembers
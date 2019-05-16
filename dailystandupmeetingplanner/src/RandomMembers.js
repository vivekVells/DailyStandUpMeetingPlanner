import React from 'react'
import { Paper, Typography, Button } from '@material-ui/core';

class RandomMembers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalrandommembers: 1,
            randomMembersList: []
        }
    }

    randomArrayGen = (arr, count) => {
        let _arr = [...arr];
        return [...Array(count)].map(()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]); 
    }

    generateRandomMembers = () => {
        let currentTeammembers = this.props.currentTeammembers;
        
        // let currentRandomMembersList = []
        // for(let i=0; i<this.state.totalrandommembers; i++) {
        //     currentRandomMembersList.push(currentTeammembers[Math.floor(Math.random()*currentTeammembers.length)])

        // }
        // this.setState({randomMembersList: currentRandomMembersList})
        
        this.setState({randomMembersList: this.randomArrayGen(currentTeammembers, this.state.totalrandommembers)})
    }

    render() {
        const RandomMembersContent = (
            <React.Fragment>
                Total Random Members: <input 
                                            type="text" 
                                            onChange={(evt) => { console.log(evt.target.value); this.setState({totalrandommembers: evt.target.value})}}
                                            placeholder="Count" 
                                            value={this.state.totalrandommembers}
                                        />
                
                <br /> <br />

                <Button 
                    ariant="outlined" 
                    color="primary" 
                    onClick={this.generateRandomMembers}
                    disabled={this.props.currentTeammembers.length <= 0}
                >
                    Generate
                </Button>

                <br /> <br />
                <ol>
                    {this.state.randomMembersList.map(
                        (member) => {return <li>{member}</li>}
                    )}
                </ol>

            </React.Fragment>
        )

        return(
            <React.Fragment>
                <div>
                    <Paper>
                        <Typography variant="h5" component="h3">
                                Random Member Selection
                        </Typography>
                        {RandomMembersContent}
                    </Paper>
                </div>
            </React.Fragment>
        )
    }
}

export default RandomMembers
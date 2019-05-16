import React from 'react'
import { Paper, Typography, Button } from '@material-ui/core';
import TimerMgr from './TimerMgr';

class MeetingTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalTime: 0,
            isStartTimer: false
        }
    }

    startTimer = () => {
        this.setState({isStartTimer: true})
    }

    render() {
        const meetingTimerContent = (
            <React.Fragment>
                <Button variant="outlined" color="primary" onClick={this.startTimer}>
                    Start Timer
                </Button>
            </React.Fragment>
        )

        return (
            <React.Fragment>
                <div style={{paddingLeft: 20, paddingRight: 20}}>
                    <Paper>
                        <Typography variant="h5" component="h3">
                                Meeting Timer
                        </Typography>
                        <br />
                        {meetingTimerContent}
                        <br /> <br />
                        {
                            this.state.isStartTimer 
                            ? <TimerMgr
                                    initialTimeState={0}
                                />
                            : ""
                        }
                    </Paper>
                </div>
            </React.Fragment>
        )
    }
}

export default MeetingTimer
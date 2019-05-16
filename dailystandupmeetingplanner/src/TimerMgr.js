import React from 'react'
import Timer from 'react-compound-timer';

class TimerMgr extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const timerContent = (
            <React.Fragment>
                <Timer
                    initialTime={this.props.initialTimeState}
                    startImmediately={true}
                    onStart={() => console.log('onStart hook')}
                    onResume={() => console.log('onResume hook')}
                    onPause={() => console.log('onPause hook')}
                    onStop={() => console.log('onStop hook')}
                    onReset={() => console.log('onReset hook')}
                >
                    {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
                        <React.Fragment>
                            <div>
                                <pre>
                                    <Timer.Days /> days <br />
                                    <Timer.Hours /> hours <br />
                                    <Timer.Minutes /> minutes <br />
                                    <Timer.Seconds /> seconds <br />
                                    <Timer.Milliseconds /> milliseconds <br />
                                </pre>
                            </div>
                            <div>
                                {/* {getTimerState()} {getTime()/1000} seconds */}
                            </div>
                            <br />
                            <div>
                                <button onClick={start}>Start</button>
                                <button onClick={pause}>Pause</button>
                                <button onClick={resume}>Resume</button>
                                <button onClick={stop}>Stop</button>
                                <button onClick={reset}>Reset</button>
                            </div>
                        </React.Fragment>
                    )}
                </Timer>
            </React.Fragment>
        )

        return(
            <React.Fragment>
                {timerContent}
            </React.Fragment>
        )
    }
}

export default TimerMgr
import React from 'react';
import './App.css';
import TeamMembers from './TeamMembers';
import MeetingTimer from './MeetingTimer';

class App extends React.Component {
  render() {
    const basicInfo = (
      <div className="App">
          <h1>Welcome To Daily Stand Up Meeting Planner</h1>
      </div>
    )
    return (
      <React.Fragment>
        {basicInfo}
        <TeamMembers
        />  
        <br /> <br />
        
        <MeetingTimer
        />      
      </React.Fragment>
    );
  }
}

export default App;

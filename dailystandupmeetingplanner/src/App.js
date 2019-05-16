import React from 'react';
import './App.css';
import TeamMembers from './TeamMembers';

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
      </React.Fragment>
    );
  }
}

export default App;

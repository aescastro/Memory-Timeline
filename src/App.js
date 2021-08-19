import React, { useState, useEffect } from 'react'; 
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TimelineElement() {
  return(
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentArrowStyle={{ borderRight: '7px solid  #fff' }}
      iconStyle={{ background: '#586BA4', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title">Lorem ipsum dolor</h3>
      <h4 className="vertical-timeline-element-subtitle">Consectetur adipiscing </h4>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
    </VerticalTimelineElement>
  );
}

class App extends React.Component {
 
  minimizeEvent() {

  }

  render() {
    return (
      <div className="all">
        <VerticalTimeline>
          
          <TimelineElement></TimelineElement>
          <TimelineElement></TimelineElement>
          <TimelineElement></TimelineElement>
          <TimelineElement></TimelineElement>
          
        </VerticalTimeline>
      </div>
      
      // Example of backend connected to frontend
      // <div className="App">
      //   <header className="App-header">

      //     <img src={logo} className="App-logo" alt="logo" />
      //       <p>
      //         Edit <code>src/App.js</code> and save to reload.
      //       </p>
      //       <a
      //         className="App-link"
      //         href="https://reactjs.org"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Learn React
      //       </a>

      //     {/* <p>The current time is {currentTime}.</p> */}
      //   </header>
      // </div>
    );
 }
}

export default App;
import React, { useState, useEffect } from 'react'; 
import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function DummyElement() {
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

class TimelineElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      img: props.img,
      desc: props.desc,
    }

  }

  render() {
    return(
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        iconStyle={{ background: '#586BA4', color: '#fff' }}
      >
      
        <h3 className="vertical-timeline-element-title" style={{paddingBottom: "10px"}}>{this.state.title}</h3>
         
        <div className="image-and-caption"
                      style={{display: this.state.img === undefined ? 'none' : 'block',
                              float: this.state.img === undefined ? 'none' : 'left'}}
                      >
          <img  src={this.state.img}
                id="event-image"
                alt=""
                >
          </img>
        </div>

        <div className="event-text">
          <p>
            {this.state.desc}
          </p>
        </div>
        
      </VerticalTimelineElement>
    );
  }
}

class App extends React.Component {

  render() {
    return (
        <VerticalTimeline>
          <TimelineElement 
            title="test reuse" 
            img="https://image.shutterstock.com/image-vector/smile-icon-vector-face-emoticon-260nw-1721368459.jpg" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident">
          </TimelineElement>
          <TimelineElement 
            title="test reuse" 
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident">
          </TimelineElement>

          <DummyElement></DummyElement>
          <DummyElement></DummyElement>
          <DummyElement></DummyElement>
          <DummyElement></DummyElement>
          
        </VerticalTimeline>
    );
 }
}

export default App;
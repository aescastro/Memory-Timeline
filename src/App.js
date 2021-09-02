import React, { useState, useEffect } from 'react'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function DummyElement() {
    return(
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        iconStyle={{ background: '#003B36', color: '#fff' }}
        contentStyle={{background: "#fff", }}
      >
        <h3 className="vertical-timeline-element-title">Lorem ipsum dolor</h3>
        <h4 className="vertical-timeline-element-subtitle">Consectetur adipiscing </h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </VerticalTimelineElement>
    );
}

function DescriptionElement(props) {
  if (props.info) {
    return (
      <div className="desc-container">
        {props.title} 
        
        <span className="event-text">
          {props.info}
        </span>
      </div>
    );
  }
  return null;
}

function TaggedElements(props) {
  if (props.info) {
    var tags = new Set(props.info);
    tags = Array.from(tags).map(x =>
      <span className="tag" key={x} style={{backgroundColor: props.color, borderColor: props.color}}>{x}</span>)
      
      return (<div className="desc-container"> 
                {props.title} {tags}
              </div>  );
  }
  return null;
}

class TimelineElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      img: props.img,
      people: props.people,
      tags: props.tags,
      date: props.date,
      desc: props.desc,
    }
  }

  render() {
    return(
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        iconStyle={{ background: '#003B36', color: '#fff' }}
        contentStyle={{background: "#fff"}}
      >
      
        <h3 className="vertical-timeline-element-title">{this.state.title}</h3>
         
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

        <div className="event-info">
          <DescriptionElement title="Date:" info={this.state.date}></DescriptionElement>
          <TaggedElements title="People:" info={this.state.people} color="59114D"></TaggedElements>
          <TaggedElements title="Tags:" info={this.state.tags} color="#59114D"></TaggedElements>
          <DescriptionElement title="Decription:" info={this.state.desc}></DescriptionElement>
        </div>
        
      </VerticalTimelineElement>
    );
  }
}

class App extends React.Component {

  render() {
    var tags = ["food", "vacation", "food"];

    return (
        <VerticalTimeline>
          <TimelineElement 
            title="test reuse" 
            date="08/01/2021"
            tags={tags}
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
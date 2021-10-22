import React, { useState, useEffect } from 'react'; 
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {OverflowMenu, OverflowMenuItem} from 'carbon-components-react';
import Image from 'react-bootstrap/Image'
function DummyElement() {
    return(
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
        iconStyle={{ background: '#553E4E', color: '#fff' }}
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

class Overflow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: props.expand,
      view: props.view,
    }
  }

  render() {
    return(<OverflowMenu
      data-floating-menu-container
      // selectorPrimaryFocus={'.optionOne'}
    >
      <OverflowMenuItem
        itemText={this.state.expand ? "Expand" : "Minimize"}
      />
      <OverflowMenuItem
        itemText={"Edit"}
        style={{display: this.state.view ? "block" : "none"}}
      />

      <OverflowMenuItem itemText="Delete" isDelete/>

    </OverflowMenu>);
    }
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
    tags = Array.from(tags).map(x => <Badge bg="primary" key={x} style={{margin: "1px"}}>{x}</Badge>)
      
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
        iconStyle={{ background: '#553E4E', color: '#fff' }}
        contentStyle={{background: "#fff"}}
      >

        <div className=".container-fluid">  
          <div className="row">

            <div className="col-lg-11"> 
              <h3 className="vertical-timeline-element-title">{this.state.title}</h3>
            </div>

            <div className="col-lg-1">
              <Overflow expand={true} view={true}></Overflow>
            </div>
          </div>
        </div> 

        <div className=".container-fluid"> 
          <div className="row"> 
            <div className={this.state.img === undefined ? "col-lg-0" : "col-lg-6 text-center"}
                          style={{display: this.state.img === undefined ? 'none' : 'block',
                                  float: this.state.img === undefined ? 'none' : 'left'}}
                          >
              <Image  src={this.state.img} alt="" rounded fluid></Image>
            </div>

            <div className={this.state.img === undefined ? "col-lg-12" : "col-lg-6"}>
              <div className="row"><DescriptionElement title="Date: " info={this.state.date}></DescriptionElement></div> 
              <div className="row"><TaggedElements title="People: " info={this.state.people} color=""></TaggedElements></div>
              <div className="row"><TaggedElements title="Tags: " info={this.state.tags} color="#D3AB9E"></TaggedElements></div>
              <div className="row"><DescriptionElement title="Decription: " info={this.state.desc}></DescriptionElement></div>
            
            </div>
          </div>
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
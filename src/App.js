import React, { useState, useEffect } from 'react'; 
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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

function Overflow(props) {
  return( 
    <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown-button-drop-start" bsPrefix="p-0">
        <i class="bi bi-three-dots-vertical"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item style={{display: props.minimized ? "block" : "none"}} onClick={() => props.modal(true)}>
          View <i class="bi bi-eye-fill"></i>
        </Dropdown.Item>
        <Dropdown.Item style={{display: props.view ? "block" : "none"}}>Edit <i class="bi bi-pencil-fill"></i> </Dropdown.Item>
        <Dropdown.Item>Delete <i class="bi bi-trash-fill"></i></Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>);
   
}

function TimelineInfo(props){
  return(
    <div>
      <div className=".container-fluid">  
        <div className="row">

          <div className="col-lg-11"> 
            <h3 className="vertical-timeline-element-title">{props.title}</h3>
          </div>

          <div className="col-lg-1" style={{display: props.showOverflow ? "block" : "none"}}>
            <Overflow  modal={props.modal} minimized={props.minimized} view={props.view}></Overflow>
          </div>
        </div>
      </div> 

      <div className=".container-fluid"> 
        <div className="row"> 
          <div className={props.img === undefined ? "col-lg-0" : "col-lg-6 text-center"}
                        style={{display: props.img === undefined ? 'none' : 'block',
                                float: props.img === undefined ? 'none' : 'left'}}
                        >
            <Image  src={props.img} alt="" rounded fluid></Image>
          </div>

          <div className={props.img === undefined ? "col-lg-12" : "col-lg-6"}>
            <div className="row"><DescriptionElement title="Date: " info={props.date}></DescriptionElement></div> 
            <div className="row"><TaggedElements title="People: " info={props.people} color=""></TaggedElements></div>
            <div className="row"><TaggedElements title="Tags: " info={props.tags} color="#D3AB9E"></TaggedElements></div>
            <div className="row"><DescriptionElement title="Decription: " info={props.desc}></DescriptionElement></div>
          
          </div>
        </div>
      </div> 
    </div>
  ); 
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
      minimized: true,
      view: true,
    }
    this.activateModal = this.activateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  activateModal(view){
    this.setState({
      minimized: false,
      view: view,
    });
  }

  closeModal(){
    this.setState({
      minimized: true,
      view: true,
    })
  }

  render() {
    return(
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #fff' }}
          iconStyle={{ background: '#553E4E', color: '#fff' }}
          contentStyle={{background: "#fff"}}
        >
          <TimelineInfo
            title={this.state.title}
            img={this.state.img}
            people={this.state.people}
            tags={this.state.tags}
            date={this.state.date}
            desc={this.state.desc}
            minimized={this.state.minimized}
            view={this.state.view}
            modal={this.activateModal}
            showOverflow={true}
          >
          </TimelineInfo>
          
          <Modal 
            show={!this.state.minimized}
            size='lg'
            centered={true}
            onHide= {this.closeModal}
            showOverflow={false}
            >

            <Modal.Header closeButton>
              <Modal.Title> 
                {this.state.view ? "View Memory - " : "Edit Memory - "}  {this.state.title}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <TimelineInfo
                  title=""
                  img={this.state.img}
                  people={this.state.people}
                  tags={this.state.tags}
                  date={this.state.date}
                  desc={this.state.desc}
                  minimized={this.state.minimized}
                  view={this.state.view}
                >
              </TimelineInfo> 
              </Modal.Body>
        </Modal>
        
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
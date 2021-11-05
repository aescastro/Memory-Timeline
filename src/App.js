import React, { useState, useEffect } from 'react'; 
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import TextareaAutosize from 'react-textarea-autosize';

import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Row, Col, Container} from 'react-bootstrap';


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

class DescriptionElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: props.info,
      title: props.title,
      view: props.view,
      type: props.type,
      as: props.as,
    }

  }

  render(){
    if (this.state.info || !this.state.view) {
      return (
        <Form.Group>
              <div className="desc-container" size="lg">
                {this.state.title} 
                <Form.Control
                  type={this.state.type} 
                  as={this.state.as}
                  value={this.state.info}
                  disabled={this.state.view}
                  plaintext={this.state.view}
                  onChange={this.handleChange}
                  > 
                </Form.Control>
              </div>
        </Form.Group>
      );
    }

    return null;
  }
}

function TaggedElements(props) {
  if (props.info) {
    var tags = new Set(props.info);
    tags = Array.from(tags).map(x => <Badge bg="primary" key={x} style={{margin: "1px"}}>{x}</Badge>)
      
      return (<Col className="desc-container"> 
                {props.title} {tags}
              </Col>  
              );
  }
  return null;
}

function Overflow(props) {
  
  return( 
    <Dropdown>
      <Dropdown.Toggle variant="link" id="dropdown-button-drop-start" bsPrefix="p-0">
        <i className="bi bi-three-dots-vertical"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item style={{display: props.minimized || !props.view ? "block" : "none"}} onClick={() => props.modal(true)}>
          View <i className="bi bi-eye-fill"></i>
        </Dropdown.Item>

        <Dropdown.Item style={{display: props.view ? "block" : "none"}} onClick={() => props.modal(false)}>
          Edit <i className="bi bi-pencil-fill"></i> 
        </Dropdown.Item>

        <Dropdown.Item>Delete <i className="bi bi-trash-fill"></i></Dropdown.Item>
      </Dropdown.Menu>

    </Dropdown>);
   
}

function TimelineInfo(props){
  return(
    <div>
      <Container fluid> 
        <Row>

          <Col xs="11" >
            <h3 className="vertical-timeline-element-title">{props.title}</h3>
          </Col>

          <Col xs="1" style={{display: props.showOverflow ? "block" : "none"}}>
            <Overflow  modal={props.modal} minimized={props.minimized} view={props.view}></Overflow>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Form>
          <Row>
            <Col xs={props.img === undefined ? "0" : "6"}
                          style={{display: props.img === undefined ? 'none' : 'block',
                                  float: props.img === undefined ? 'none' : 'left'}}
                          >
              <div className="text-center"><Image src={props.img} alt="" rounded fluid></Image></div>
            </Col>

            <Col xs={props.img === undefined ? "12" : "6"}>
              <DescriptionElement title="Date" info={props.date} view={props.view} type="date" ></DescriptionElement>
              <TaggedElements title="People" info={props.people} color=""></TaggedElements>
              <TaggedElements title="Tags" info={props.tags} color="#D3AB9E"></TaggedElements>
              <DescriptionElement title="Description" info={props.desc} view={props.view} as={TextareaAutosize}></DescriptionElement>
            </Col>
            
          </Row>
        </Form>
      </Container>
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
    this.handleChange = this.handleChange.bind(this);
  }

  activateModal(view){
    console.log(view);
    this.setState({
      minimized: false,
      view: view,
    });
  }

  closeModal(){
    this.setState({
      minimized: true,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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
            onExited={() => this.setState({view: true})}
            dialogClassName="modal"
            >
            
            <Modal.Header 
              style={{backgroundColor: !this.state.view ? "#e0c1b4" : "#D6D6D6", 
                      color: "#FFFFFF"}}
              closeButton>
              
                <Col>
                  <Modal.Title style={{textShadow:  "2px 2px 4px #000000"}}> 
                    {this.state.view ? "View Memory - " : "Edit Memory - "}  {this.state.title}
                  </Modal.Title>
                </Col>

                <Col style={{position: 'absolute', right: 40}}>
                  <Overflow modal={this.activateModal} minimized={this.state.minimized} view={this.state.view}></Overflow>
                </Col>

            </Modal.Header>

            <Container fluid>
              <Modal.Body>
                <Row>
                  <Col 
                    xs={this.state.img === undefined ? "0" : "6"}
                    style={{display: this.state.img === undefined ? 'none' : 'block', float: this.state.img === undefined ? 'none' : 'left'}}>
                    <div className="text-center"><Image src={this.state.img} alt="" rounded fluid></Image></div>
                  </Col>

                  

                  <Col xs={this.state.img === undefined ? "12" : "6"}>
                    <Form.Group>
                      <div className="desc-container" size="lg">
                        Date
                        <Form.Control name="date" type="date" value={this.state.date} disabled={this.state.view} plaintext={this.state.view} onChange={this.handleChange}></Form.Control>
                      </div>
                    </Form.Group>

                    <TaggedElements title="Tags" info={this.state.tags} color="#D3AB9E"></TaggedElements>

                    <Form.Group>
                      <div className="desc-container" size="lg">
                        Description 
                        <Form.Control name="desc" as={TextareaAutosize} value={this.state.desc} disabled={this.state.view} plaintext={this.state.view} onChange={this.handleChange}> </Form.Control>
                      </div>
                    </Form.Group> 
                  </Col>
                </Row>
              </Modal.Body>
            </Container>
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
          date={"2021-08-24"}
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
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import ChatWrapper from './ChatWrapper';

class Chat extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Friend:'Name',
             time:'time'
        }
    }
    
    updateVal = (e) =>{
        console.log(e.target.innerText)
        
        this.setState({
            [e.target.getAttribute("name")]:e.target.innerText,
        })
        console.log(e.target.getAttribute("name"))
    }

    render() {
        console.log(this.state)
        
        // const Friends=[1,2,3,4,5,6,7,8,9,10]
        const ActiveTime =[21,23,46,1,34,6,34,9,56,3]
        return (
                <Container>
                <Row>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item active>Active Friends</ListGroup.Item>
                            {ActiveTime.map((time,key)=>
                            <ListGroup.Item key={key} >
                                <Image src={'https://via.placeholder.com/40'} roundedCircle className="mr-3" />
                                <p style={styles.listLeft} name="Friend" onClick={this.updateVal}>Friend {key+1}</p>
                                <p style={styles.listRight} name="time" onClick={this.updateVal}>{time} min ago</p>
                            </ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                    <Col md={8}>
                        <ChatWrapper name={this.state.Friend} time={this.state.time} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

const styles = {
    listLeft:{
        width: '40%',
        display: 'inline-block',
        padding:0,
        margin: 0                
    },
    listRight:{
        width: '40%',
        display: 'inline-block',
        padding:0,
        margin: 0,
        fontSize:"x-small",
        textAlign:"Right"
    },
    align:{
        display:'inline-block'
    }
}

export default Chat

import React,{Component} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class ChatWrapper extends Component{
    render(){
        return(
            <Row >
                <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <Col style={styles.listLeft}>
                                <h5>{this.props.name}</h5>
                            </Col>
                            <Col style={styles.listRight}>
                                <p>{this.props.time}</p>
                            </Col>
                        </ListGroup.Item>
                        <ListGroup.Item style={styles.liHeight}></ListGroup.Item>
                        <ListGroup.Item>
                        <InputGroup >
                            <FormControl style={styles.liInput} placeholder="Type your text here" />
                            <InputGroup.Append>
                            <Button variant="outline-primary" style={styles.liBtn}>Send</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        )
    }
}

    
    const styles = {
        listLeft:{
            width: '50%',
            display: 'inline-block',
            padding:0,
            margin: 0,
            verticalAlign:'middle'  
        },
        listRight:{
            width: '50%',
            display: 'inline-block',
            padding:0,
            margin: 0,
            fontSize:"small",
            textAlign:"Right",
            verticalAlign:'middle'
        },
        liHeight:{
            height:400
        },
        liInput:{
            border:'none'
        },
        liBtn:{
            fontWeight:600
        }
    }


export default ChatWrapper;
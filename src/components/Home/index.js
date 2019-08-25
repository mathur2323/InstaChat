import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Status from './Status';
import ConnectionPost from './ConnectionPost';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             statusPictures:['https://via.placeholder.com/100',
             'https://via.placeholder.com/100', 
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100',
             'https://via.placeholder.com/100']
        }
    }
    
    render() {
        return (
            <Container>
                <Row>
                    <Col style={styles.statusPictures} className="mt-3">
                    {
                        this.state.statusPictures.map((picture, key)=><Status source={picture} id={key} />)
                    }       
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ConnectionPost />
                    </Col>
                </Row>

            </Container>
        )
    }
}
const styles = {
    statusPictures:{
        display:'flex',
        justifyContent:'space-around'
    }
}
export default Home

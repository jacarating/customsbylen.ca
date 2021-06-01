import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

class Gallery extends React.Component{
    render(){
        return(
            <div>
                <h1>Gallery</h1>
                <Container>
                    <Row>
                        <Col> 1 </Col>
                        <Col> 2 </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Gallery;
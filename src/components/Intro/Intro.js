import { Col, Container, Row } from 'react-bootstrap';

import './Intro.css';

export default function Intro(){
    return (
        <Container className="intro">
            <Row>
                <Col xs={{span: 12, order: 2}} md={{span: 4, order: 1}} className="title">
                    <span className="title-text">Hi I'm<br/>Adam!</span>
                </Col>
                <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}} className="avatar">
                    <img src="Adam.png" className="avatar-image" alt="adam avatar"></img>
                </Col>
                <Col xs={0} md={{span: 2, order: 3}}></Col>
                </Row>
        </Container>
    )
    
}
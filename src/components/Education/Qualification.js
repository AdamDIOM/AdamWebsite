import { Col, Row } from "react-bootstrap";

export default function Qualification(props){
    return (
        <Col xs={12} md={6} lg={4} className="box">
            <Row>
                <Col xs={9}>
                    <h4>{props.subject}</h4>
                    <p>{props.body} {props.level}</p>
                </Col>
                <Col xs={3}>
                    <h1>{props.grade}</h1>
                </Col>
            </Row>
            
        </Col>
    )
    
}
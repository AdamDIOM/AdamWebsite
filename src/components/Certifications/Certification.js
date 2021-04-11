import { Col, Row } from "react-bootstrap";

import './Certification.css';

export default function Certification(props) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer" className="certification-link">
            <div className="Certification">
                <Row>
                    <Col xs={12} md={2} className="image-col"><img src={`certification-images/${props.name}.png`} className="cert-image" alt={`certification badge - ${props.name}`}/></Col>

                    <Col xs={12} className="d-md-none score-xs">
                        <SmallScore score={props.score}/>
                    </Col>
                    <Col md={1} className="d-none d-md-block score-md">
                        <MedScore score={props.score}/>
                    </Col>

                    <Col xs={12} md={9}>
                        <h3>{props.title}</h3>
                        {
                            props.date !== undefined ? `Date Earned: ${props.date}` : ""
                        }
                    </Col>
                </Row>
            </div>
        </a>
    )
}

function SmallScore(props){
    if(props.score !== undefined){
        return (
            <Row>
                <Col xs={5} className="text-right">{props.score}</Col>
                <Col xs={2} className="text-center">/</Col>
                <Col xs={5} className="text-left">1000</Col>
            </Row>
        )
    }
    else{
        return(
            <Row>
                <Col xs={5} className="text-right"></Col>
                <Col xs={2} className="text-center">-</Col>
                <Col xs={5} className="text-left"></Col>
            </Row>
        )
    }
}

function MedScore(props){
    if(props.score !== undefined){
        return (
            <Row className="score-container">
                <Col md={12} className="text-center score-piece first-score">{props.score}</Col>
                <Col md={12} className="text-center score-piece">1000</Col>
            </Row>
        )
    }
    else{
        return(
            <Row className="score-container">
                <Col md={12} className="small-text text-center score-piece first-score">-</Col>
                <Col md={12} className="small-text text-center score-piece">-</Col>
            </Row>
        )
    }
}
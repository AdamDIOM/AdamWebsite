import { Row, Col } from "react-bootstrap";

import './Box.css';

export default function Box(props) {
    if(props.link !== undefined){
        return(
            <a href={props.link} target="_blank" rel="noreferrer">
                <InnerBox {...props}/>
            </a>
        )
    }
    else{
        return (
            <InnerBox {...props}/>
        )
    }
}

function InnerBox(props){
    return (
        <div className="box">
            <span className="box-title">{props.title}</span>
            <Row>
                <Col>
                    <span className="box-date">{props.date !== undefined ? `Date: ${props.date}` : ""}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="box-text">{props.text !== undefined ? `${props.text}` : ""}</div>
                </Col>
            </Row>
        </div>
    )
}
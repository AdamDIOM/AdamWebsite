import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Header.css';

export default function Header(){

    const lightStyles = `
    --background: white;
    --font: #343a40;
    --font-fade: rgba(52, 58, 64, 0.25);
    `

    const darkStyles = `
        --background: #343a40;
        --font: white;
        --font-fade: rgba(255,255,255,0.05)
    `
    const [rootStyles, setRootStyles] = useState(darkStyles);

    return (
        <Container className="header" id="header">
            <Row>
                <Col className="name" xs={6}>
                    Adam Drummond
                </Col>
                <Col className="color-selector" xs={6}>
                    Light mode: <input type="checkbox" data-toggle="toggle" onChange={handleChange}/>
                </Col>
            </Row>

            <style jsx global>{`
                :root{
                    ${rootStyles}
                }
            `}
            </style>

        </Container>
    )

    function handleChange(event){
        if(event.target.checked){
            setRootStyles(lightStyles);
        }
        else{
            setRootStyles(darkStyles);
        }
    }

}
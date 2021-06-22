import { Button, Col, Container, Row } from 'react-bootstrap';

import './Social.css';

export default function Social(){

    return (
        <Container className="social" id="social">
            <h1>Find me on Socials</h1>
            <Row>
                <Col xs={12} md={6} lg={3}>
                    <Button variant="light" className="social-button" size="lg" href="https://twitter.com/Mista_Koo1" target="_blank">
                        <img src="social-logos/twitter.png" alt="twitter logo"/>
                        <span>Twitter</span>
                    </Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Button variant="light" className="social-button" size="lg" href="https://instagram.com/mista_koo1" target="_blank">
                        <img src="social-logos/instagram.png" alt="instagram logo"/>
                        <span>Instagram</span>
                    </Button> 
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Button variant="light" className="social-button" size="lg" href="https://linkedin.com/in/adam-drummond" target="_blank">
                        <img src="social-logos/linkedin.png" alt="linkedin logo"/>
                        <span>Linkedin</span>
                    </Button>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <Button variant="light" className="social-button" size="lg" href="https://github.com/AdamDIOM" target="_blank">
                        <img src="social-logos/github.png" alt="github logo"/>
                        <span>GitHub</span>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

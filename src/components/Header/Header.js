import { Col, Container, Navbar, Row } from 'react-bootstrap';

export default function Header(){
    return (
        <Container className="header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    Adam Drummond
                </Navbar.Brand>
            </Navbar>
        </Container>
    )
}
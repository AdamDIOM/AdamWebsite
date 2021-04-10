import { Container, Navbar } from 'react-bootstrap';

import './Header.css';

export default function Header(){
    return (
        <Container className="header" id="header">
            <Navbar variant="dark">
                <Navbar.Brand>
                    Adam Drummond
                </Navbar.Brand>
            </Navbar>
        </Container>
    )
}
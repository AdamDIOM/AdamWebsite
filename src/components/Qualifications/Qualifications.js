import { Container } from 'react-bootstrap';

import './Qualifications.css';

export default function Qualifications(){
    return (
        <Container className="qualifications" id="qualifications">
            <h1>Qualifications</h1>
            <h2>Find below the qualifications I have earned as part of my formal education</h2>

            <ul className="list">
                <li>Mathematics</li>
                <li>English Language</li>
                <li>Chemistry</li>
                <li>Physics</li>
                <li>Coordinated Sciences</li>
                <li>Computer Science</li>
                <li>Digital Applications</li>
                <li>Spanish</li>
                <li>Business Studies</li>
            </ul>
        </Container>
    )
    
}
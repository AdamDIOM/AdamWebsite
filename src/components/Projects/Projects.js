import { Container } from 'react-bootstrap';
import Box from '../Box/Box';

import './Projects.css';

export default function Projects(){
    return (
        <Container className="projects" id="projects">
            <h1>Some of my Projects</h1>
            <h2>Below are links to some of my favourite websites, games and other projects I have worked on</h2>

            <Box
                title="BLAHAJgang: A Major Leauge Hacking Guild"
                link="https://melon.blahajgang.lol"
            />

        </Container>
    )
    
}
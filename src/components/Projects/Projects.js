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
                text="BLAHAJgang is a community (referred to as a cult by some) of people all working towards one goal: spreading awareness and love of a 1m long stuffed shark from IKEA all through hacking!"
            />

            <Box
                title="What a Surprise: Egg Hunting Site"
                link="https://competent-tesla-ad5ffe.netlify.app/"
                text="Try to find the hidden easter eggs on this site. This was my first ever React site that I kept maintained and It also won third place at a Major League Hacking Hackathon - Surprise Hacks (April 2021)"
            />

        </Container>
    )
    
}
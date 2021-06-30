import { Container } from 'react-bootstrap';
import Box from '../Box/Box';

import './Experience.css';

export default function Achievements(){
    return (
        <Container className="experience" id="experience">
            <h1>Experience</h1>
            <h2>All of my work experience, both paid and voluntary is here</h2>

            <Box
                title="Isle of Man Code Club: Volunteer Educator"
                date="2017 - Present"
                text="I volunteer at the IOM Code Club as the Assets Manager. This means that I get to handle all the cool tech that we deal with on a weekly basis! Furthermore, as a member of the committee, I have an insight & a say into how the club is run."
            />

            <Box
                title="Junior Achievement Ambassador"
                date="September 2020 - June 2021"
                text="I helped to mentor a team into the JA Company of the Year Competition 2021. After months of hard work, the team came in as THE Company of the Year."
            />

        </Container>
    )
    
}
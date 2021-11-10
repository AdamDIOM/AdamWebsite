import { Container } from 'react-bootstrap';

import './About.css';

export default function About(){
    return (
        <Container className="about" id="about">
            <h1>About me</h1>
            <h2>Hi, I'm Adam, an undergraduate student on the Isle of Man!</h2>

            <p>Currently a student at <a className="link" href="https://ucm.ac.im" target="_blank" rel="noreferrer">University College Isle of Man</a>, studying a BSc (Hons) in Computer Science.</p>

            <p>In the past, I studied GCSEs and IGCSEs accross a variety of STEM subjects, as well as A Levels in Mathematics and Computer Science. I have also undertaken a number of extra-curricular certifications across professional products, such as Microsoft Office</p>

            <p>Out of university, I currently volunteer at the <a className="link" href="https://codeclub.im" target="_blank" rel="noreferrer">Isle of Man Code Club</a>, where I am the official Assets Manager. This role required me to organise and categorise our large range of objects. I am also a barista at a local branch of the Costa Coffee chain.</p>
            

        </Container>
    )
    
}
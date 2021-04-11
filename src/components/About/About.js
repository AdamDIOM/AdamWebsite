import { Container } from 'react-bootstrap';

import './About.css';

export default function About(){
    return (
        <Container className="about" id="about">
            <h1>About me</h1>
            <h2>Hi, I'm Adam, a secondary school student on the Isle of Man!</h2>

            <p>Currently, a Student at <a className="link" href="https://snhs.sch.im">St Ninian's High School</a>, Isle of Man, studying A Levels in Computer Science and Mathematics. I also study a BTEC Level 3 Extended Certificate in Enterprise and Entrepreneurship.</p>

            <p>In the past, I studied GCSEs and IGCSEs accross a variety of STEM subjects. I have also undertaken a number of extra-curricular certifications across professional products, such as Microsoft Office</p>

            <p>Out of school, I currently volunteer at the <a className="link" href="https://codeclub.im">Isle of Man Code Club</a>, where I am the official Assets Manager. This role required me to organise and categorise our large range of objects. I am also a barista at a local branch of the Costa Coffee chain.</p>
            

        </Container>
    )
    
}
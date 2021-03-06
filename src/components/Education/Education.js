import { Container, Row } from 'react-bootstrap';
import Qualification from './Qualification';

import './Education.css';

export default function Education(){
    return (
        <Container className="qualifications" id="qualifications">
            <h1>Education</h1>
            <i>Section still under development</i>
            <h2>Find below the qualifications I have earned as part of my formal education</h2>
            <h3 className="school"><a href="https://snhs.sch.im" target="_blank" rel="noreferrer">St Ninian's High School</a></h3>

            
            <Row>
                {/* <Qualification
                    body={"Awarding Body"}
                    level={"Level"}
                    subject={"Subject"}
                    grade={"Grade"}
                /> */}
                <Qualification
                    body={"WJEC"}
                    level={"GCSE"}
                    subject={"Mathematics"}
                    grade={"A*"}
                />
                {/* <Qualification
                    body={"Cambridge"}
                    level={"IGCSE"}
                    subject={"Mathematics (Core)"}
                    grade={"C"}
                /> */}
                <Qualification
                    body={"Cambridge"}
                    level={"IGCSE"}
                    subject={"English Language"}
                    grade={"B"}
                />
                <Qualification
                    body={"Cambridge"}
                    level={"IGCSE"}
                    subject={"Co-ordinated Sciences"}
                    grade={"A*A*"}
                />
                <Qualification
                    body={"Cambridge"}
                    level={"IGCSE"}
                    subject={"Chemistry"}
                    grade={"A"}
                />
                <Qualification
                    body={"Cambridge"}
                    level={"IGCSE"}
                    subject={"Physics"}
                    grade={"A*"}
                />
                <Qualification
                    body={"Cambridge"}
                    level={"IGCSE"}
                    subject={"Computer Science"}
                    grade={"A*"}
                />
                <Qualification
                    body={"Cambridge"}
                    level={"IGCSE"}
                    subject={"Business Studies"}
                    grade={"A"}
                />
                <Qualification
                    body={"WJEC"}
                    level={"GCSE"}
                    subject={"Spanish"}
                    grade={"A*"}
                />
                <Qualification
                    body={"Edexcel"}
                    level={"CiDA"}
                    subject={"Digital Applications"}
                    grade={"A*"}
                />
                <Qualification
                    body={"AQA"}
                    level={"A Level"}
                    subject={"Mathematics"}
                    grade={"A*"}
                />
                <Qualification
                    body={"AQA"}
                    level={"A Level"}
                    subject={"Computer Science"}
                    grade={"A*"}
                />
                <Qualification
                    body={"OCR"}
                    level={"AS Level"}
                    subject={"Chemistry"}
                    grade={"B"}
                />
                <Qualification
                    body={"BTEC"}
                    level={"Extended Certificate"}
                    subject={"Enterprise & Entrepreneurship"}
                    grade={"D*"}
                />
            </Row>
        </Container>
    )
    
}
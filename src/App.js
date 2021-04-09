import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './App.css';
import Certification from './components/Certification';

function App() {
  return (
    <div className="App">
      <Container className="header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            Adam Drummond
          </Navbar.Brand>
        </Navbar>
      </Container>
      

      <Container className="main">
        <Row>
          <Col xs={{span: 12, order: 2}} md={{span: 4, order: 1}} className="title">
            <span className="title-text">Hi I'm<br/>Adam!</span>
          </Col>
          <Col xs={{span: 12, order: 1}} md={{span: 6, order: 2}} className="avatar">
            <img src="Adam.png" className="avatar-image"></img>
          </Col>
          <Col xs={0} md={{span: 2, order: 3}}></Col>
        </Row>
      </Container>

      {/* about? */}

      <Container className="certifications">
        <h1>Certifications</h1>
        <Certification score={"963"} name={"MOS_Word"}>Microsoft Office Specialist: Word 2016</Certification>
        <Certification score={"888"} name={"MOS_Word_Expert"}>Microsoft Office Specialist: Word 2016 Expert</Certification>
        <Certification score={"1000"} name={"MOS_Excel"}>Microsoft Office Specialist: Excel 2016</Certification>
        <Certification score={"925"} name={"MOS_Excel_Expert"}>Microsoft Office Specialist: Excel 2016 Expert</Certification>
      </Container>


    </div>
  );
}

export default App;

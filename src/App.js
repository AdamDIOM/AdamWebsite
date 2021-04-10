import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro';
import CertificationList from './components/Certifications/CertificationList';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      {/* about? */}
      <CertificationList />

    </div>
  );
}

export default App;

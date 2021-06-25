import './App.css';
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro';
import CertificationList from './components/Certifications/CertificationList';
import About from './components/About/About';
import Social from './components/Social/Social';
import Projects from './components/Projects/Projects';
import News from './components/News/News';
import Education from './components/Education/Education';
import Achievements from './components/Achievements/Achievements';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <About/>
      <Social/>
      <Education/>
      <CertificationList/>
      <Projects/>
      <News/>
      <Achievements/>
      <Experience/>
    </div>
  );
}

export default App;

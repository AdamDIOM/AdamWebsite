import './App.css';
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro';
import CertificationList from './components/Certifications/CertificationList';
import About from './components/About/About';
import Social from './components/Social/Social';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Social />
      <CertificationList />
      <Projects />

    </div>
  );
}

export default App;

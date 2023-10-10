import './App.css';
import Header from './components/Header/Header.js';
import InitalBody from './components/InitialBody/InitialBody.js';
import BodyContent from './components/BodyContent/BodyContent.js';
import Services from './components/Services/Services.js';
import Projects from './components/Projects/Projects.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="App">
        <Header/>
        <InitalBody/>
        <BodyContent/>
        <Services/>
        <Projects/>
        <AboutUs/>
        <ContactUs/>
    </div>
  );
}

export default App;

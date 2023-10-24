import './App.css';
import Header from './components/Header/Header.js';
import InitalBody from './components/InitialBody/InitialBody.js';
import BodyContent from './components/BodyContent/BodyContent.js';
import Services from './components/Services/Services.js';
import Projects from './components/Projects/Projects.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import Jobs from './components/Jobs/Jobs.js';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "*",
      element: (
        <div>
          <Header />
          <InitalBody />
          <BodyContent />
          <Services />
          <Projects />
          <AboutUs />
          <ContactUs />
        </div>
      ),
    },
    {
      path: "jobs",
      element: (
        <div>
          <Header />
          <Jobs />
          <ContactUs />
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import "./App.css";
import Homepage from "./COMPONENTS/Homepage";
import AboutMe from "./COMPONENTS/AboutMe";
import Resume from "./COMPONENTS/Resume";
import Portforlio from "./COMPONENTS/Portforlio";
import Testimonials from "./COMPONENTS/Testimonials";
import Contact from "./COMPONENTS/Contact";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuItems from "./LAYOUTS/MenuItems";

function App() {
  return (
    <BrowserRouter>
      <div className="App-Container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portforlio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route />
        </Routes>
        <MenuItems />
      </div>
    </BrowserRouter>
  );
}

export default App;

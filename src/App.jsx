import { BrowserRouter } from "react-router-dom";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedback,
//   Hero,
//   Tech,
//   Work,
//   Navbar,
//   StarsCanvas,
// } from "./components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Work from "./components/Works";
import About from "./components/About";
import Feedback from "./components/Feedbacks";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />
        <Feedback />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

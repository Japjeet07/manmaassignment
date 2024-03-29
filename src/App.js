import Navbar from "./components/Navbar/Navbar";
import Navbar1 from "./components/Navbar1/Navbar1";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar1 />
      <Navbar />
      <Intro />
      <Services />
      <Testimonial />
      {/* <Experience /> */}
      <Works />
      <Portfolio />
     
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

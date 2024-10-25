import { useContext } from "react";
import "./App.css";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Contact from "./components/form/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/servicessection/Services";
import Testimonial from "./components/testimonial/Testimonial";
import Works from "./components/works/Works";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "./theme/Context";
function App() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <>
    <div className={ theme === "light" ?  "App text-black" : "App bg-gradient-dark text-black"}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;

import React, { useContext } from "react";
import Button from "../../designs/Button";
import Card from "../card/Card";
import image from "../../assets/img/heartemoji.png";
import cv from "./cv.pdf"
import { ThemeContext } from "../../theme/Context";
import {motion} from "framer-motion"
function Services() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div className="services" id="Services">
      <div className="services-left">
        <div className="awesome-text mb-4">
          <span className="bg-gradient-to-r font-RussoOne from-orange via-blue to-red inline-block text-transparent bg-clip-text">
            My Awesome
          </span>
          <span className="bg-gradient-to-r font-RussoOne from-blue to-red inline-block text-transparent bg-clip-text">
            Services
          </span>
          <span className={theme === "light" ? "font-RussoOne" : "font-RussoOne text-white"}>
            A web developer makes and maintains websites. They are in charge of
            <br />a site's overall look and feel.
          </span>
        </div>
        <a href={cv} download>
        <div className="button">
          <Button beforeText="Download CV" afterText="Download CV" />
        </div>
        </a>
      </div>
      <div className="services-right">
        <div className="cards">
        <motion.div initial={{left : "-2rem"}} viewport={{once : true}} whileInView={{left: "5rem"}} transition={{duration : 1}} style={{top: "-8rem", left: "5rem"}}>
          <Card
            image={image}
            title="Design"
            text="Figma, Sketch, Photoshop, Adobe, Adobe xd"
          />
        </motion.div>
        <motion.div initial={{left: "-15rem"}} viewport={{once : true}} whileInView={{left: "-5rem"}} transition={{duration : 1}} style={{top: "12rem", left: "-5rem"}}>
          <Card
            style={{border: "5px solid #DFFF00" , boxShadow: "#DFFF00 0px 22px 70px 4px"}}
            image={image}
            title="Developer"
            ButtonSecond
            text="html, css, javascript, react, material ui"
          />
        </motion.div>
        <motion.div initial={{left: "25rem"}} viewport={{once : true}} whileInView={{left: "15rem"}} transition={{duration : 1,type :"spring"}} style={{top: "12rem", left: "15rem"}}>
          <Card
           style={{border: "5px solid #126ce5",boxShadow: "#126ce5 0px 22px 70px 4px" }}
            image={image}
            ButtonThird
            title="UI UX"
            text="html, css, javascript, react, material ui"
          />
        </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;

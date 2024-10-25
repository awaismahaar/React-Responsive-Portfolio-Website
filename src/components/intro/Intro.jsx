import Button from "../../designs/Button";
import GitHub from "../../assets/img/github.png";
import linkdin from "../../assets/img/linkedin.png";
import instagram from "../../assets/img/instagram.png";
import vector1 from "../../assets/img/Vector1.png";
import vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/boy.png";
import thumbup from "../../assets/img/thumbup.png";
import crown from "../../assets/img/crown.png";
import glassesimoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../floatingdiv/FloatingDiv";
import { useContext } from "react";
import { ThemeContext } from "../../theme/Context";
import {motion} from "framer-motion"
function Intro() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-detail">
          <span className={theme === "light" ? "font-RussoOne" : "font-RussoOne text-white"}>Hey! I am</span>
          <span className="bg-gradient-to-r font-RussoOne from-orange via-blue to-red inline-block text-transparent bg-clip-text">Muhammad Awais</span>
          <span className={theme === "light" ? "font-RussoOne" : "font-RussoOne text-white"}>
            A web developer makes and maintains websites. They are in charge of
            a site's overall look and feel.
          </span>
          <div className="button">
            <Button beforeText="Contact&nbsp;Us" afterText="yes!&nbsp;Contact"/>
          </div>
          <div className="intro-icons flex w-1/12 mt-12 justify-start gap-12 scale-50">
            <img className="cursor-pointer hover:scale-75 transition duration-500" src={GitHub} alt="github"></img>
            <img className="cursor-pointer hover:scale-75 transition duration-500" src={linkdin} alt="linkedin"></img>
            <img className="cursor-pointer hover:scale-75 transition duration-500" src={instagram}></img>
          </div>
        </div>
      </div>
      <div className="intro-right">
            <img src={vector1} alt="vector1"></img>
            <img src={vector2} alt="vector2"></img>
            <img src={boy} alt="boy"></img>
            <motion.img initial={{left: "-36%"}} viewport={{once : true}} whileInView={{left: "-26%"}} transition={{duration: 1, type: "spring"}} src={glassesimoji} alt="image"></motion.img>
            <motion.div className="floating-div" initial={{left : "10%"}} viewport={{once : true}} whileInView={{left: "55%"}} transition={{duration : 1}} style={{top: '2%',left: "55%"}}>
                <FloatingDiv  image={crown} text1="Web" text2="Developer"/>
            </motion.div>
            <motion.div className="floating-div" initial={{right : "30%"}} viewport={{once : true}} whileInView={{right: "70%"}} transition={{duration : 1}} style={{bottom: '22%',right: "70%"}}>
                <FloatingDiv second image={thumbup} text1="Best Design" text2="Award"/>
            </motion.div>
      </div> 
    </div>
  );
}

export default Intro;

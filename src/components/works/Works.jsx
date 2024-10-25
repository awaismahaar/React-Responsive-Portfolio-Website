import Button from "../../designs/Button";
import upwark from "../../assets/img/Upwork.png"
import facebook from "../../assets/img/Facebook.png"
import amazon from "../../assets/img/amazon.png"
import shopify from "../../assets/img/Shopify.png"
import fiver from "../../assets/img/fiverr.png"
import { useContext } from "react";
import { ThemeContext } from "../../theme/Context";
import {motion} from "framer-motion"
function Works() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div className="works">
      <div className="works-left">
        <div className="awesome-text mb-12">
          <span className="bg-gradient-to-r font-RussoOne from-pink  via-blue to-pink inline-block text-transparent bg-clip-text">
            Works for All these
          </span>
          <span className="bg-gradient-to-r font-RussoOne from-blue to-pink  inline-block text-transparent bg-clip-text">
            Brands and Clients
          </span>
          <span className={theme === "light" ? "font-RussoOne" : "font-RussoOne text-white"}>
            A web developer makes and maintains websites. 
            <br /> They are good developers.
          </span>
        </div>
        <div className="button">
          <Button beforeText="Hire&nbsp;me" afterText="Thanks!" />
        </div>
      </div>
      <div className="work-right">
      <motion.div initial={{rotate: "45deg"}} whileInView={{rotate : "0deg"}} viewport={{once : true}} transition={{duration : 3.5, type : "spring"}} className="main-cirlce">
        <div style={{top: "5rem",left: "6rem"}} className="sec-cirlce">
            <img src={upwark} alt="upwark"></img>
        </div>
        <div style={{top: "5rem",left: "-3rem"}} className="sec-cirlce">
            <img src={amazon} alt="upwark"></img>
        </div>
        <div style={{top: "5rem",left: "14rem"}} className="sec-cirlce">
            <img src={fiver} alt="upwark"></img>
        </div>
        <div style={{top: "-3rem",left: "6rem"}} className="sec-cirlce">
            <img src={shopify} alt="upwark"></img>
        </div>
        <div style={{top: "14rem",left: "6rem"}} className="sec-cirlce">
            <img src={facebook} alt="upwark"></img>
        </div>
      </motion.div>
      <div style={{top: "-16rem",left: "22rem"}} className="cirlce-blue"></div>
      <div style={{top: "-6rem",left: "22rem"}} className="cirlce-pink"></div>
      </div>
    </div>
  );
}

export default Works;

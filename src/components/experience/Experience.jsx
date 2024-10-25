import { useContext } from "react";
import { ThemeContext } from "../../theme/Context";

function Experience() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div className="experience" id="Experience">
        <div className="exp-section">
            <div className="cirlce text-3xl">8+</div>
            <span className={theme !== "light" && "text-white"}>Years</span>
            <span>Experience</span>
        </div>
        <div className="exp-section">
            <div className="cirlce text-3xl">20+</div>
            <span className={theme !== "light" && "text-white"}>Years</span>
            <span>Experience</span>
        </div>
        <div className="exp-section">
            <div className="cirlce text-3xl">5+</div>
            <span className={theme !== "light" && "text-white"}>Companies</span>
            <span>Work</span>
        </div>
    </div>
  )
}

export default Experience
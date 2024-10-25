import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { useContext } from "react";
import { ThemeContext } from "../../theme/Context";
function Toggle() {
  let { theme, handleTheme } = useContext(ThemeContext);
  return (
    <div onClick={handleTheme} className="toggle-buttons">
      <Sun />
      <Moon />
      <div
        style={theme !== "light" ? { left: "1.8rem" } : {}}
        className="toggle-side"
      ></div>
    </div>
  );
}

export default Toggle;

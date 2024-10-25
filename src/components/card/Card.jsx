import { useContext } from "react";
import { ThemeContext } from "../../theme/Context";

function Card({image,title,text,ButtonSecond,ButtonThird,...rest}) {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div {...rest} className={theme === "light" ? "card" : "card bg-transparent"}>
        <img src={image} alt="image"></img>
        <span className={theme !=="light" && "text-white"}>{title}</span>
        <span className={theme !=="light" && "text-white"}>{text}</span>
        <button className={`px-4 py-2 my-2 hover:scale-75 duration-500 transition ${ButtonSecond && "bg-yellow"} ${ButtonThird && "bg-blue"} bg-orange rounded-full text-white`}>Learn more</button>
    </div>
  )
}

export default Card
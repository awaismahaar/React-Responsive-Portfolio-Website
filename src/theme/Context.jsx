import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()
const getFromLocalStorage = localStorage.getItem('theme') || 'light';
 
function Context({children}) {
  let [theme,setTheme] = useState(getFromLocalStorage)
  useEffect(()=>{
    localStorage.setItem('theme', theme)
  },[theme])
  function handleTheme(){
  if (getFromLocalStorage) {
    setTheme((prev)=> prev === "light" ? "dark" : "light")
  }
  }
 let state = {
   theme : theme,
   handleTheme : handleTheme
 }
  return (
    <ThemeContext.Provider value={state}>
    {children}
    </ThemeContext.Provider>
  )
}

export default Context;
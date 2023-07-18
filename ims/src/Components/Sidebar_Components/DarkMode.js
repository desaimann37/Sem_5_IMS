import React, { useEffect } from 'react'
import '../../CSS/darkMode.css';
import { useState } from 'react';

function DarkMode() {

  const [theme , setTheme] = useState("light-theme");

  const toggleTheme = ()=>{
    
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }else if(theme === "light-mode"){
      setTheme("dark-mode");
    }
  } 

  useEffect(() => {
    document.body.className = theme;
  } , [theme]);

  return (
    <div>
        <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  )
}

export default DarkMode
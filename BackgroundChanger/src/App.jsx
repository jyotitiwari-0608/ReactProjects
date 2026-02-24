import { useState } from 'react'
import {useEffect} from 'react'
import './App.css'

function App() {
  let [color , setColor] = useState("white");
let redBG = ()=>{setColor("red")};
let blueBG = ()=>{setColor("blue")};
let greenBG = ()=>{setColor("green")};
let purpleBG = ()=>{setColor("purple")};
useEffect(() => {
  document.body.style.backgroundColor = color;
}, [color]);

  return (
  
     <div
     className="h-screen flex justify-center items-center transition-colors duration-500"
    //  style={{ backgroundColor: color }}
     >
            <button 
            style={{ backgroundColor: "red" }}
            onClick={redBG}>Red</button>
            <button 
            style={{ backgroundColor: "blue" }}
            onClick={blueBG}>Blue</button>
            <button 
            style={{ backgroundColor: "green" }}
            onClick={greenBG}>Green</button>
            <button 
            style={{ backgroundColor: "purple" }}
            onClick={purpleBG}>Purple</button>
            <button 
            style={{ 
              color:"black",
              backgroundColor: "white" }}
            onClick={()=>{setColor("white")}}>RESET</button>
        </div>
    
  )
}

export default App

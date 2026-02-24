import React from 'react'
import { useState,useEffect,useRef,useCallback } from 'react'
import './App.css'
function App() {
  // dependencies , kuchh bhi chhed chhaad hoti h method firse run hota h
  const [length,setLength]=useState(8);
  const[numAllowed,setNumAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("");


  const passRef = useRef(null);



  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed){str+="0123456789"};
    if(charAllowed){str+="!@#$%^&*()[]{}~`_+-=;':.>,<"}
    for(let i = 1;i<=length;i++){
      let char =Math.floor(Math.random()* str.length);
      pass +=str.charAt(char);

    }
    setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword]);


  const copyPassToClipboard=useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,20);
  },[password]);
  useEffect(()=>{
      passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator]);



  return (
    <div className="container">

      <div className="card">
        <h1>Password Generator</h1>

        <div className="password-box">
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button onClick={copyPassToClipboard}>
            Copy
          </button>
        </div>

        <div className="controls">

          <div className="control-group">
            <label>Length : {length}</label>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={() => setNumAllowed(prev => !prev)}
              />
              Include Numbers
            </label>

            <label>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed(prev => !prev)}
              />
              Include Characters
            </label>
          </div>

        </div>
      </div>

    </div>
  )


//   return(
//     <div>

//       {/* Password Display */}
//       <div>
//         <input
//           type="text"
//           value={password}
//           placeholder="password"
//           readOnly
//           ref = {passRef}
//         />
//         <button
//         onClick={copyPassToClipboard}
//         >Copy</button>
//       </div>

//       {/* Controls */}
//       <div>

//         {/* Length Slider */}
//         <div>
//           <input
//             type="range"
//             min={8}
//             max={100}
//             value={length}
//             defaultValue={8}
//             onChange={(e) => setLength(Number(e.target.value))}
//           />
//           <label>Length : {length}</label>
//         </div>

//         {/* Numbers Checkbox */}
//         <div>
//           <input
//             type="checkbox"
//             defaultChecked={numAllowed}
//             id="numberInput"
//             onChange={()=>{
//               setNumAllowed((prev)=>!prev)
//             }}
//           />
//           <label>Numbers</label>
//         </div>

//         {/* Characters Checkbox */}
//         <div>
//           <input
//             type="checkbox"
//             defaultChecked={charAllowed}
//             id="charInput"
//             onChange={()=>{
//               setCharAllowed((prev)=>!prev)
//             }}
//           />
//           <label>Characters</label>
//         </div>

//       </div>

//     </div>
//   )
}

export default App

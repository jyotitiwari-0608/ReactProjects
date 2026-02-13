// UI updation , react state , hooks ke through ho data update hoga , ui updation ki power react ke paas h
// useState is a hook , hook call : 
import {useState} from 'react'
function App() {
  let [count,setCounter]=useState(0);
  // let count = 0;
  // let a;
  let increment = ()=>{  setCounter(count+1);};
  let decrement = ()=>{
    if(count>0){
    setCounter(count-1);
  }};


  return(
    <>
  <h1>Chai aur React</h1>
  <h2>Counter Value :{count}</h2>
  <button onClick={increment}>Add Value</button>
  <br/>
  <button onClick={decrement}>Remove Value</button>
  </>
  )
}

export default App

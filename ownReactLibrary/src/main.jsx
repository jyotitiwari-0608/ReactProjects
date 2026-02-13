import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return (
    <>
    <h1>CustomApp</h1>
    </>
  )
}
// MyApp me aap jo bhi likhte ho vo end of the day parse  hokr iss reactElement jse react element me convert ho jaata h ,
// toh agr m react ke method ki jgh direct hi aisa krdu,toh compiler pdh lega? 
//     {/*  bhai 2 hours prr sunkr notes bna liyo */}
// {} me in react evaluated expression of js hi likhte h
const ReactElement = {
  type : 'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:'Click me to visit google'
};
const AnotherEl = (
  <a href = "https://google.com" target ="_blank">Visit Google</a>
);
let anotherUser = 'chai or react';
const ReactEl = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'Click me to visit Google',
  anotherUser
  // saara tree bnne ke baad uske baad variable injections,idhaar bhi evaluated expression aata h
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/* <MyApp /> */}
 {/* <ReactElement/> is equal to ReactElement()but objects aise nhi use kiye jaate*/}
 {/* {ReactElement} ye kyu nhi execute hua?react ko ky pta kidhr ky likh rkkha h so hm createElement() use krenge*/}
 {/* {AnotherEl} */}
 <>
 {ReactEl}
 </>

  </StrictMode>
)
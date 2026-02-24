import { useState , useRef , useEffect} from 'react'

 function App() {
//   const [count,setcount]=useState(0);
//   function addValue(){
//     if(count<20){
//       setcount(count+1);
//     }
    
//   };
//   function removeValue(){
//     if(count>0){
//       setcount(count-1);
//     }
//   };
//   return(
//     <>
//     <button onClick={addValue}>increase</button>
//     <button onClick={removeValue}>decrease</button>
//     <p>Count : {count}</p>
//     </>
//   )



// const [color,setColor]=useState("white");
// // function redBG(){
// //   setColor("red");
// // }
// function blueBG(){
//   setColor("blue");
// }
// function greenBG(){
//   setColor("green");
// }
// function blackBG(){
//   setColor("black");
// }
// function whiteBG(){
//   setColor("white");
// }
// return(
//   <div className="min-h-screen bg-gray-100 relative"
//   style={{backgroundColor: color}}>

//       {/* Bottom Button Bar */}
//       <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-center gap-4"
//       style={{backgroundColor: color}}>

//         <button className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
//         onClick={()=>setColor("red")}>
//           Red
//         </button>

//         <button className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
//         onClick={blueBG}>
//           Blue
//         </button>

//         <button className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
//         onClick={greenBG}>
//           Green
//         </button>

//         <button className="px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
//         onClick={blackBG}>
//           Black
//         </button>

//         <button className="px-6 py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300 transition border"
//         onClick={whiteBG}>
//           White
//         </button>

//       </div>

//     </div>
//   )


// let x = 0;
// let increase = ()=>{
//   x=x+1;
// };
// let [x,setX]=useState(0);

let [x,setX]=useState(0);
let xRef = useRef(0);

let increase = ()=>{
  xRef.current = xRef.current+1;
  setX(xRef.current);
};
useEffect(()=>{
  document.body.style.backgroundColor = 
  x%2==0?"red":"green";
},[x])
return (
  <div className="min-h-screen flex items-center justify-center">
    
    <div className="bg-white shadow-lg rounded-xl p-8 text-center w-80">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">
        Counter
      </h1>

      <p className="text-4xl font-bold text-blue-600 mb-6">
        {x}
      </p>

      <button
        onClick={increase}
        className="px-6 py-2 bg-red-500 text-white rounded-lg 
                   hover:bg-red-600 transition duration-200 
                   shadow-md active:scale-95"
      >
        Increase
      </button>

    </div>

  </div>
)
}

export default App

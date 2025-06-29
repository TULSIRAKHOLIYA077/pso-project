// import image from "../assets/image.avif";
// import logo from "../assets/logo.png";
// import symbol from "../assets/symbol.jpg";
// import { FaArrowLeft } from "react-icons/fa";
// import PasswordScreenBtn from "./PasswordScreenBtn";
// import useTimeSet from "../hooks/useTimeSet";
// import Keyboard from "./Keyboard";
// import { useDispatch, useSelector } from "react-redux";
// import { addKey, setInput, setShowKeyboard } from "../redux/passwordScreenSlice";
// import type { RootState } from "../types/redux/redux";
// import type { ButtonNames } from "../types/components/PasswordScreen";

// const PasswordScreen = ()=>{
//   const dispatch = useDispatch();
//   const input = useSelector((state: RootState) => state.passwordScreen.input);
//   const showKeyboard = useSelector((state: RootState) => state.passwordScreen.showKeyboard);

//   const btnNames: ButtonNames[] = ["Keys", "Team Viewer", "CLOSE"];

//   const {formattedDate,formattedTime} = useTimeSet();

//   const handleClick = (value: number) => {
//     dispatch(addKey(value));
    
//   };

//   const handleEvents = (value: ButtonNames)=>{
//     if(value === "Keys"){
//       dispatch(setShowKeyboard())
//     }
//   }

//   return(
//     <div className="relative w-full p-2 flex flex-col md:flex-row  gap-3">
//       <div className="w-1/2 h-[97.5vh] flex flex-col items-center">
//         <img className="w-1/2 h-[97.5vh] absolute z-0 bg-blue-900" src={image} alt="" />
//         <div className="w-1/2 h-[97.5vh] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_60%,#1c398e_100%)] absolute z-10"></div>
//         <div className="absolute z-20 top-28 w-1/2 flex justify-center items-center gap-5">
//           <img className="rounded-full w-[15%]" src={logo} alt="" />
//           <h1 className="text-5xl text-gray-300">AdvEntPOS 8.0</h1>
//         </div>
//         <div className="absolute z-20 top-72 w-1/2 flex justify-center items-center gap-5">
//           <img className="rounded-full w-[10%]" src={symbol} alt="" />
//           <h1 className="text-3xl text-gray-200 sm:text-amber-500 md:text-blue-600 lg:text-emerald-600 xl:text-fuchsia-800 2xl:text-lime-700">SOFTWARE</h1>
//         </div>
//         <div className="absolute z-20 bottom-10 p-5 w-1/7 flex justify-center text-center rounded-full bg-amber-600 font-serif font-bold">
//         A Point-Of-Sale Software With Built-in
//         </div>

//       </div>

//       <div className="w-1/2">
//         <div className="h-fit border-[1px] border-gray-500">
//           <div className="bg-[linear-gradient(to_bottom,#1c398e,white,#1c398e)] text-blue-950 font-bold text-center p-1 text-3xl bg-repeat">
//             DEMO DATABASE ONLY
//           </div>
//           <h2 className="font-bold text-blue-950 text-xl text-center bg-blue-200">EATONTON, GA - 123456 (EATONTON)</h2>
//           <div className="p-3">
//             <div className="flex justify-between gap-3 w-full">
//               <div className="w-6/12">
//                 <input 
//                   onChange={(e)=>dispatch(setInput(e.target.value))} 
//                   value={input}
//                   className="border bg-gray-200 w-full p-1 font-bold text-black text-3xl text-center placeholder-black" type="password" placeholder="Enter Pin"/>
//                 <div className="flex flex-wrap justify-center gap-1.5 gap-y-4 py-3.5">
//                 {[7,8,9,4,5,6,1,2,3,0].map((num) => (
//                     <button
//                       key={num}
//                       onClick={() => handleClick(num)}
//                       className={`border-[1px] border-blue-400 rounded-full p-1 px-9 text-3xl font-bold 
//                         ${num % 2 === 0 ? 'bg-[linear-gradient(to_bottom,#016630,#86efac,#016630)]' : 'bg-[linear-gradient(to_bottom,#162456,#93c5fd,#162456)]'}
//                         text-[#162456] cursor-pointer 
//                         hover:${num % 2 === 0 ? 'bg-[linear-gradient(to_bottom,#016630,#bbf7d0,#016630)]' : 'bg-[linear-gradient(to_bottom,#162456,#bfdbfe,#162456)]'}
//                       `}
//                     >
//                       {num}
//                     </button>
//                   ))}
//                   <button className="border-[1px] border-blue-400 rounded-full p-1 px-8 text-2xl font-bold bg-[linear-gradient(to_bottom,#016630,#86efac,#016630)] text-[#162456] cursor-pointer hover:bg-[linear-gradient(to_bottom,#016630,#bbf7d0,#016630)] "><FaArrowLeft/></button>

//                   <button className="border-[1px] border-blue-400 rounded-full p-1 px-9 text-3xl font-bold bg-[linear-gradient(to_bottom,#b91c1c,#fca5a5,#b91c1c)] text-[#162456] cursor-pointer hover:bg-[linear-gradient(to_bottom,#b91c1c,#fee2e2,#b91c1c)]">X</button>
//                 </div>
//               </div>
//               <PasswordScreenBtn/>
//             </div>
//             <div className="w-full bg-gray-500 h-[2px]"></div>
//             <div className="flex gap-3 py-3">
//               {
//                 btnNames.map(ele => (
//                   <button key={ele} 
//                   onClick={()=> handleEvents(ele)} className="border-[1px] border-blue-400 rounded-md p-3 font-semibold text-white bg-[linear-gradient(to_right,#93c5fd,#162456,#162456,#93c5fd)] w-1/3 text-2xl cursor-pointer hover:bg-[linear-gradient(to_right,#BFDBFE,#3B82F6,#3b82f6,#3B82F6,#BFDBFE)]">{ele}</button>
//                 ))
//               }
//             </div>
//             <p className="font-bold text-xl">{formattedDate} {formattedTime}</p>
//           </div>
//         </div>
//         <div className="mt-2">
//           <span className="font-bold text-2xl mr-16">Register #: 115</span> <span className="font-bold text-2xl">Version: 8.31.7.0</span> 
//           <p className="font-bold text-xl mt-4">Tech Support: (888)342-1134 Ext:3</p>
//         </div>
//       </div>
//       {
//         showKeyboard && <Keyboard/>
//       }
//     </div>
//   )
// }

// export default PasswordScreen;

import image from "../assets/image.avif";
import logo from "../assets/logo.png";
import symbol from "../assets/symbol.jpg";
import { FaArrowLeft } from "react-icons/fa";
import PasswordScreenBtn from "./PasswordScreenBtn";
import useTimeSet from "../hooks/useTimeSet";
import Keyboard from "./Keyboard";
import { useDispatch, useSelector } from "react-redux";
import { addKey, setInput, setShowKeyboard } from "../redux/passwordScreenSlice";
import type { RootState } from "../types/redux/redux";
import type { ButtonNames } from "../types/components/PasswordScreen";

const PasswordScreen = ()=>{
  const dispatch = useDispatch();
  const input = useSelector((state: RootState) => state.passwordScreen.input);
  const showKeyboard = useSelector((state: RootState) => state.passwordScreen.showKeyboard);

  const btnNames: ButtonNames[] = ["Keys", "Team Viewer", "CLOSE"];

  const {formattedDate,formattedTime} = useTimeSet();

  const handleClick = (value: number) => {
    dispatch(addKey(value));
    
  };

  const handleEvents = (value: ButtonNames)=>{
    if(value === "Keys"){
      dispatch(setShowKeyboard())
    }
  }

  return(
    <div className="relative w-full h-[100%] p-2 flex flex-col lg:flex-row  gap-3">
      <div className="w-[100%] h-dvh lg:h-[100%]  relative lg:w-1/2 flex flex-col items-center ">
        <img className="w-[100%] h-[100%]  absolute z-0 bg-blue-900" src={image} alt="" />
        <div className="w-[100%] h-[100%]  bg-[linear-gradient(to_bottom,rgba(0,0,0,0.7)_60%,#1c398e_100%)] absolute z-10"></div>
        <div className="absolute z-20 top-20 lg:top-28 w-1/2 flex justify-center items-center gap-5">
            <img className="rounded-full w-[22%] lg:w-[15%]" src={logo} alt="" />
            <h1 className="text-2xl lg:text-3xl xl:text-4xl   text-gray-300">AdvEntPOS 8.0</h1>
          </div>
        <div className="absolute z-20 top-72 w-1/2 flex justify-center items-center gap-5">
          <img className="rounded-full w-[20%] " src={symbol} alt="" />
          <h1 className="text-xl lg:text-2xl xl:text-3xl text-gray-200 sm:text-amber-500 md:text-blue-600 lg:text-emerald-600 xl:text-fuchsia-800">SOFTWARE</h1>
        </div>
        <div className="absolute z-20 bottom-11 lg:bottom-10  p-5 w-3/7 md:w-2/7 xl:w-2/7 flex justify-center text-center rounded-full bg-amber-600 font-serif font-bold">
        A Point-Of-Sale Software With Built-in
        </div>

      </div>

      <div className="lg:w-1/2">
        <div className="h-fit border-[1px] border-gray-500">
          <div className="bg-[linear-gradient(to_bottom,#1c398e,white,#1c398e)] text-blue-950 font-bold text-center p-1 text-3xl bg-repeat">
            DEMO DATABASE ONLY
          </div>
          <h2 className="font-bold text-blue-950 text-xl text-center bg-blue-200">EATONTON, GA - 123456 (EATONTON)</h2>
          <div className="p-3">
            <div className="flex justify-between gap-3 w-full">
              <div className="w-6/12">
                <input 
                  onChange={(e)=>dispatch(setInput(e.target.value))} 
                  value={input}
                  className="border bg-gray-200 w-full p-1 font-bold text-black text-3xl text-center placeholder-black" type="password" placeholder="Enter Pin"/>
                <div className="flex flex-wrap justify-center gap-1.5  lg:gap-3 xl:gap-1.5 gap-y-4 py-3.5">
                {[7,8,9,4,5,6,1,2,3,0].map((num) => (
                    <button
                      key={num}
                      onClick={() => handleClick(num)}
                      className={`border-[1px] border-blue-400 rounded-full p-1 px-9 text-3xl lg:px-4 xl:px-9 lg:text-2xl xl:text-3xl font-bold 
                        ${num % 2 === 0 ? 'bg-[linear-gradient(to_bottom,#016630,#86efac,#016630)]' : 'bg-[linear-gradient(to_bottom,#162456,#93c5fd,#162456)]'}
                        text-[#162456] cursor-pointer 
                        hover:${num % 2 === 0 ? 'bg-[linear-gradient(to_bottom,#016630,#bbf7d0,#016630)]' : 'bg-[linear-gradient(to_bottom,#162456,#bfdbfe,#162456)]'}
                      `}
                    >
                      {num}
                    </button>
                  ))}
                  <button className="border-[1px] border-blue-400 rounded-full p-1 px-8 text-2xl lg:px-3 xl:px-8 lg:text-xl xl:text-2xl font-bold bg-[linear-gradient(to_bottom,#b91c1c,#fca5a5,#b91c1c)] text-[#162456] cursor-pointer hover:bg-[linear-gradient(to_bottom,#b91c1c,#fee2e2,#b91c1c)] "><FaArrowLeft/></button>

                  <button className="border-[1px] border-blue-400 rounded-full p-1 px-9 text-3xl lg:px-4 xl:px-9 lg:text-2xl xl:text-3xl font-bold bg-[linear-gradient(to_bottom,#b91c1c,#fca5a5,#b91c1c)] text-[#162456] cursor-pointer hover:bg-[linear-gradient(to_bottom,#b91c1c,#fee2e2,#b91c1c)]">X</button>
                </div>
              </div>
              <PasswordScreenBtn/>
            </div>
            <div className="w-full bg-gray-500 h-[2px]"></div>
            <div className="flex gap-3 py-3">
              {
                btnNames.map(ele => (
                  <button key={ele} 
                  onClick={()=> handleEvents(ele)} className="border-[1px] border-blue-400 rounded-md p-3 font-semibold text-white bg-[linear-gradient(to_right,#93c5fd,#162456,#162456,#93c5fd)] w-1/3 text-2xl cursor-pointer hover:bg-[linear-gradient(to_right,#BFDBFE,#3B82F6,#3b82f6,#3B82F6,#BFDBFE)]">{ele}</button>
                ))
              }
            </div>
            <p className="font-bold text-xl">{formattedDate} {formattedTime}</p>
          </div>
        </div>
        <div className="mt-2">
          <span className="font-bold text-2xl mr-16">Register #: 115</span> <span className="font-bold text-2xl">Version: 8.31.7.0</span> 
          <p className="font-bold text-xl mt-4">Tech Support: (888)342-1134 Ext:3</p>
        </div>
      </div>
      {
        showKeyboard && <Keyboard/>
      }
    </div>
  )
}

export default PasswordScreen;
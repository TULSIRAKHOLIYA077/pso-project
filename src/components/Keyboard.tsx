import { useDispatch, useSelector } from "react-redux";
import { addKey, addSpace, backspace, clearInput, toggleCaps } from "../redux/keyboardSlice";
import { setInputFromKeyboard, setShowKeyboard } from "../redux/passwordScreenSlice";
import type { RootState } from "../types/redux/redux";

const keysQ = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keysq = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];

const keysA = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keysa = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

const keysZ = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'];
const keysz = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

const keys = ['_', ';', '[', ']', '!', '@', '#', '$', '%', '&', '*'];


const numbers = [1,2,3,4,5,6,7,8,9,0];

const Keyboard = () => {
  const dispatch = useDispatch();
  const input = useSelector((state: RootState) => state.keyboard.input);
  const capsOn = useSelector((state: RootState) => state.keyboard.capsOn);

  const handleKeyClick = (key: string | number) => {
    dispatch(addKey(key));
  };

  const handleBackspace = () => {
    dispatch(backspace());
  };

  return (
    <div className="absolute z-30 top-[25%] left-[29%]  flex flex-col items-center p-4 space-y-4 bg-gray-100 justify-center w-[42%]">
      <div className="text-xl font-semibold mb-4">Password</div>

      <div className="w-full max-w-md p-3 bg-white shadow rounded-xl text-xl text-gray-700">
        {input || <span className="text-gray-400">Enter Text</span>}
      </div>

      <div className="flex flex-wrap gap-0.5">
        {numbers.map((ele)=>(
          <button onClick={() => handleKeyClick(ele)} className="text-black font-bold w-10 py-1 rounded-xl shadow bg-[linear-gradient(to_bottom,#dbeafe,#155dfc)]" key={ele}>{ele}</button>
        ))}

        <button onClick={handleBackspace} className="text-black font-bold px-4 py-2 rounded-xl shadow bg-[linear-gradient(to_bottom,#fce7f3,#db2777)]">BackSpace</button>

        <div className="flex gap-0.5 w-full"> 
          <div className="w-[82%] flex justify-center flex-wrap gap-0.5">
            {(capsOn ? keysQ : keysq).map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className="text-black w-10 py-2 rounded-xl shadow bg-[linear-gradient(to_bottom,#fce7f3,#6a7282)] font-bold"
                >
                  {key}
                </button>
            ))}

            <button className="bg-[linear-gradient(to_bottom,#fef08a,#f59e0b)] text-black font-bold py-1 rounded-xl shadow text-sm w-12" 
            onClick={()=>dispatch(toggleCaps())}>Caps Lock</button>

            {(capsOn ? keysA : keysa).map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className="text-black font-bold py-1 rounded-xl w-10 shadow bg-[linear-gradient(to_bottom,#fce7f3,#6a7282)]"
                >
                  {key} 
                </button>
            ))}
            {(capsOn ? keysZ : keysz).map((key) => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className="bg-[linear-gradient(to_bottom,#fce7f3,#6a7282)] text-black font-bold px-4 py-2 rounded-xl shadow"
                >
                  {key}
                </button>
            ))}
        </div> 
        <div className="text-black font-bold rounded-xl w-[17%] shadow text-2xl flex justify-center items-center bg-[linear-gradient(to_bottom,#cffafe,#06b6d4)]" onClick={()=>{
              dispatch(setInputFromKeyboard(input));
              dispatch(setShowKeyboard());
              dispatch(clearInput());
          }
          }>OK</div>      
        </div>

        <div className="flex gap-1">
          {keys.map((ele)=>(
            <button onClick={() => handleKeyClick(ele)} className="bg-[linear-gradient(to_bottom,#ffedd5,#fb923c)] text-black font-bold px-4 py-2 rounded-xl shadow w-11" key={ele}>{ele}</button>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button
            onClick={() =>  dispatch(clearInput())}
            className="text-black font-bold px-6 py-2 rounded-xl shadow bg-[linear-gradient(to_bottom,#fce7f3,#db2777)]">
            Clear
          </button>

          <button className="text-white px-6 py-2 rounded-xl shadow w-80 bg-[linear-gradient(to_bottom,#cffafe,#06b6d4)]" onClick={()=>dispatch(addSpace())}></button>

          <button className="text-black font-bold px-6 py-2 rounded-xl shadow bg-[linear-gradient(to_bottom,#fce7f3,#db2777)]" 
            onClick={()=>{
              dispatch(setShowKeyboard());
              dispatch(clearInput());
          }
          }>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;

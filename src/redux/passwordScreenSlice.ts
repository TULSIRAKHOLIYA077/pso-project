import { createSlice } from "@reduxjs/toolkit";

const passwordScreenSlice = createSlice({
  name: "passwordScreen",
  initialState: {
    input: "",
    showKeyboard: false,
  },
  reducers:{
    addKey: (state, action) => {
      state.input += action.payload;
    },
    setShowKeyboard: (state)=>{
      state.showKeyboard = !state.showKeyboard;
    },
    setInputFromKeyboard: (state, action) => {
      state.input = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
  }
})

export const {addKey, setShowKeyboard, setInputFromKeyboard,setInput} = passwordScreenSlice.actions;

export default passwordScreenSlice.reducer;
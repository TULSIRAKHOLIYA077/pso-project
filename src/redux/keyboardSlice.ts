import { createSlice } from "@reduxjs/toolkit";

const keyBoardSlice = createSlice({
  name: "keyboard",
  initialState:{
    input: "",
    capsOn: true,
  },
  reducers:{
    addKey: (state, action) => {
      state.input += action.payload;
    },
    backspace: (state) => {
      state.input = state.input.slice(0, -1);
    },
    clearInput: (state) => {
      state.input = '';
    },
    toggleCaps: (state) => {
      state.capsOn = !state.capsOn;
    },
    addSpace: (state)=>{
      state.input += ' ';
    }
  }
})

export const {addKey, backspace, clearInput, toggleCaps,addSpace} = keyBoardSlice.actions;
export default keyBoardSlice.reducer;
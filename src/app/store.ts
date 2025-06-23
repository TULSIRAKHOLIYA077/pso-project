import { configureStore } from "@reduxjs/toolkit";
import keyboardReducer from "../redux/keyboardSlice"
import passwordReducer from "../redux/passwordScreenSlice"


const store = configureStore({
  reducer:{
    keyboard: keyboardReducer,
    passwordScreen: passwordReducer,
  }
})

export default store;
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import userReducer from "../slices/userSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

export default rootReducer;

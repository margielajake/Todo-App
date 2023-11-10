import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./JS/Reducers/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;

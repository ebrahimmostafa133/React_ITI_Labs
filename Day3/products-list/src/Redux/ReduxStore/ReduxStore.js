import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducer/CounterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export default store

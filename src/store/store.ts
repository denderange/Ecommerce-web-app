import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

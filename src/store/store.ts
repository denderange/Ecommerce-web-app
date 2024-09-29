import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productsApi } from "./productSlice";
import { userApi } from "./userSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		[productsApi.reducerPath]: productsApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(productsApi.middleware)
			.concat(userApi.middleware),
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

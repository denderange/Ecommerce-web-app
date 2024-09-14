import { Route, Routes } from "react-router-dom";
import { Cart, Home, NotFound } from "../pages";
import { ProductDetails } from "../components";
import { Layout } from "./Layout";

const Router = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Layout />}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='/cart'
					element={<Cart />}
				/>
				<Route
					path='/product/:id'
					element={<ProductDetails />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Route>
		</Routes>
	);
};

export default Router;

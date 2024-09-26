import { Route, Routes } from "react-router-dom";
import { Cart, Home, Login, NotFound, Product } from "../pages";
import { Layout } from "./Layout";
import { PageTitle } from "../components";
import { APP_TITLE } from "../constants/appTitle";
import { ProtectedRoute } from "./ProtectedRoute";

const Router = () => {
	return (
		<Routes>
			<Route
				path='/login'
				element={
					<>
						<PageTitle title={`Sign in | ${APP_TITLE}`} />
						<Login />
					</>
				}
			/>

			<Route
				path='/'
				element={<ProtectedRoute />}>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						index
						element={
							<>
								<PageTitle title={`Catalog | ${APP_TITLE}`} />
								<Home />
							</>
						}
					/>
					<Route
						path='/cart'
						element={
							<>
								<PageTitle title={`My cart | ${APP_TITLE}`} />
								<Cart />
							</>
						}
					/>
					<Route
						path='/product/:id'
						element={<Product />}
					/>

					<Route
						path='*'
						element={
							<>
								<PageTitle title='404 | Page not found' />
								<NotFound />
							</>
						}
					/>
				</Route>
			</Route>
		</Routes>
	);
};

export default Router;

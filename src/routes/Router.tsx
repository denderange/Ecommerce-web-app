import { Route, Routes } from "react-router-dom";
import { Cart, Home, NotFound, Product } from "../pages";
import { Layout } from "./Layout";
import { PageTitle } from "../components";
import { APP_TITLE } from "../constants/appTitle";

const Router = () => {
	return (
		<Routes>
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
					element={
						<>
							<PageTitle
								title={`Essence Mascara Lash Princess | ${APP_TITLE}`}
							/>
							<Product />
						</>
					}
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
		</Routes>
	);
};

export default Router;

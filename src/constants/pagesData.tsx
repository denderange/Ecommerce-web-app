import { APP_TITLE } from "./appTitle";
import { Cart, Home, NotFound, Product } from "../pages";
import { routerType } from "../types/router.types";

export const pagesData: routerType[] = [
	{
		title: `Catalog | ${APP_TITLE}`,
		path: "/",
		element: <Home />,
	},
	{
		title: `Essence Mascara Lash Princess | ${APP_TITLE}`,
		path: `/product/[id]`,
		element: <Product />,
	},
	{
		title: `My cart | ${APP_TITLE}`,
		path: "/cart",
		element: <Cart />,
	},
	{
		title: "notFound",
		path: "*",
		element: <NotFound />,
	},
];

import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

export const Layout = () => {
	return (
		<>
			<ScrollToHashElement
				behavior='smooth'
				inline='start'
				block='start'
			/>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

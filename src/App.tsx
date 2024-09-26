/// <reference types="vite-plugin-svgr/client" />

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { AuthProvider } from "./lib/hooks/useAuth";

const App = () => {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
};

export default App;

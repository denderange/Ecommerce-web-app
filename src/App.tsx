/// <reference types="vite-plugin-svgr/client" />

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { AuthProvider } from "./lib/hooks/useAuth";
import { store } from "./store/store";
import { Provider } from "react-redux";

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</Provider>
	);
};

export default App;

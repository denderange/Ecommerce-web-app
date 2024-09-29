import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../lib/hooks/useAuth";

export const ProtectedRoute = () => {
	const { user } = useAuth();

	return user ? (
		<Outlet />
	) : (
		<Navigate
			to='/login'
			replace
		/>
	);
};

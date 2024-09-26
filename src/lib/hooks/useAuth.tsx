import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

interface AuthContextT {
	user: string;
	login: (data: string) => Promise<void>;
	logout: () => void;
}

const AuthContext = createContext<AuthContextT | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useLocalStorage("user", "");
	const navigate = useNavigate();

	const login = async (data: string) => {
		setUser(data);
		navigate("/");
	};

	const logout = () => {
		setUser("");
		navigate("/login", { replace: true });
	};

	const value = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextT => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

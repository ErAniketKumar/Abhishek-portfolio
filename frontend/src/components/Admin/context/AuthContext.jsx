import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Mock login function
	const login = () => setIsAuthenticated(true);
	// Mock logout function
	const logout = () => setIsAuthenticated(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);

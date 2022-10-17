import React, { createContext } from "react";

export const ThemeContext = createContext(null);
const ThemeContextProvider = ({ children }) => {
	return (
		<ThemeContext.Provider value={{}}>
			<>{children}</>
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;

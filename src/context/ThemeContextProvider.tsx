import { useState } from "react";
import ThemeContext from "./ThemeContext";


const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;
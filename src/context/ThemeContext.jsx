import { createContext } from "react";
import { Children } from "react/cjs/react.production.min";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({Children}) => {
    return <ThemeContext.Provider>{children}</ThemeContext.Provider>
} 
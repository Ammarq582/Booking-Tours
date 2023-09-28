import { createContext, useState } from "react";

export const NavContext = createContext({
    isNavOpen: false,
    setIsNavOpen: () => null
})

export const NavProvider = ({children}) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const value = {isNavOpen, setIsNavOpen};

    return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}
import { createContext, useState } from "react";

export const popupContext = createContext({
    showPopup: false,
    setShowPopup: () => null
}
)

export const PopupProvider = ({children}) => {
    const [showPopup, setShowPopup] = useState(false);
    const value = {showPopup, setShowPopup};
    return (
        <popupContext.Provider value={value}>{children}</popupContext.Provider>
    )
}
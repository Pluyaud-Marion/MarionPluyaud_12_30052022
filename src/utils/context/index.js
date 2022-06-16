import { useState } from "react";
import { createContext } from "react";
import { urlApi } from "../const/urlApi";
import { urlMock } from "../const/urlMock";

export const ModeContext = createContext()

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(urlApi)

    const toogleMode = () => {
        setMode(mode === urlMock ? urlApi : urlMock)
    }

    return (
        <ModeContext.Provider value={{ mode, toogleMode }}>
            {children}
        </ModeContext.Provider>
    )
}
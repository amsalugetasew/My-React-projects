import { createContext,  useReducer} from "react"
import DarkModeReducer from "./DarkModeReducer"

const INITIAL_STATE={
    darkMode: false,
    greenMode: false
}
export const DarkModeContext = createContext(INITIAL_STATE)
export const DarkModeContextProvider = ({children}) =>{
     const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
     return(
         <>
         <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
             {children}
         </DarkModeContext.Provider>
         <DarkModeContext.Provider value={{greenMode: state.greenMode, dispatch}}>
         {children}
     </DarkModeContext.Provider>
     </>
     )
}
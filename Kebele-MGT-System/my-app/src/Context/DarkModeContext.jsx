import { createContext, useReducer } from "react"
// import { FALSE } from "sass"
import DarkModeReducer from "./DarkModeReducer"
const INITIAL_STATE = {
    darkMode: false
}
export const DarkModeContext = createContext(INITIAL_STATE)
export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
    return (
        <>
            <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
                {children}
            </DarkModeContext.Provider>
        </>
    )
}



// import { createContext,  useReducer} from "react"
// // import { FALSE } from "sass"
// import DarkModeReducer from "./DarkModeReducer"

// const INITIAL_STATE={
//     darkMode: FALSE
// }
// export const DarkModeContext = createContext(INITIAL_STATE)
// export const DarkModeContextProvider = ({children}) =>{
//      const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
//      return(
//          <>
//          <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
//              {children}
//          </DarkModeContext.Provider>
//      </>
//      )
// }
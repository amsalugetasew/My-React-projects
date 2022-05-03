import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './Pages/Home/Home'
import New from './Pages/New/New'
import Login from './Pages/Login/Login'
import Single from './Pages/Single/Single'
import List from './Pages/List/List'
import "./Style/Dark.scss"
import {useContext} from "react"
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./Context/DarkModeContext";
import { AuthContext } from "./Context/AuthContext";
function App() {
  const {darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext);
  const RequireAuth = ({children}) =>{
    return currentUser ? children: <Navigate to="/login"/>;
  };
  return (
    <div className={darkMode ? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={
            <RequireAuth>
              <Home />
              </RequireAuth>
          }/>            
            <Route path="users">
              <Route index element={
                <RequireAuth>
                  <List />
                </RequireAuth>
                            } />
              <Route path=":userId" element={
                <RequireAuth>
                <Single />
              </RequireAuth>
              }/>
              <Route path="new" element={
              
              <RequireAuth>
                <New inputs={userInputs} title="Add New Users"/>
              </RequireAuth>
              } />
            </Route>
          </Route>
          <Route>
            <Route path= "products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Products"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

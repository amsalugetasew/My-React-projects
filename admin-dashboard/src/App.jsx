import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home'
import New from './Pages/New/New'
import Login from './Pages/Login/Login'
import Single from './Pages/Single/Single'
import List from './Pages/List/List'
import "./Style/Dark.scss"
import {useContext} from "react"
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./Context/DarkModeContext";
function App() {
  // {dark ? "app dark:": "app"}
  const {darkMode} = useContext(DarkModeContext)
  const {greenMode} = useContext(DarkModeContext)
//  const [dark, setDark] = useState(false);
  return (
    <div className={darkMode ? "app dark": "app"} id={greenMode ? "app green": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New Users"/>} />
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

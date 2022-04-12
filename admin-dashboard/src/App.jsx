import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home'
import New from './Pages/New/New'
import Login from './Pages/Login/Login'
import Single from './Pages/Single/Single'
import List from './Pages/List/List'
import Products from './Pages/Products/Products'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
          <Route>
            <Route path= "products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

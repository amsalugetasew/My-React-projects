import {
  BrowserRouter,
  Routes, Route, Navigate
} from "react-router-dom";
// import Home from './Pages/Home/Home'
import AdminHome from './Pages/Admin/Home/Home'
import OfficerHome from './Pages/Officer/Home/Home'
import CustomerHome from './Pages/Customer/Home/Home'
import ANew from './Pages/Admin/New/New'
import FNew from './Pages/Admin/FamilyList/New'
import IDNew from './Pages/Admin/FamilyList/IDCARD'
import BirthCeretficateNew from './Pages/Admin/FamilyList/BirthCeretficateNew'
import ClearanceNew from './Pages/Admin/FamilyList/ClearanceNew'
import SUGARandOIL from './Pages/Admin/FamilyList/SUGARandOIL'
// import Login from './Pages/Login/Login'
import ASingle from './Pages/Admin/Single/Single'
import AList from './Pages/Admin/List/List'
import FamilyList from './Pages/Admin/FamilyList/FamilyList'
import PHome from "./Public/Home/Home"
import PHelp from "./Public/Help/Help"
import PService from "./Public/Services/Service"
import PAbout from "./Public/About/About"
import PContact from "./Public/Contact/Contact"

import "./Style/Dark.scss"
import { useContext } from "react"
// import {
//   // deliverieInputs, 
//   // orderInputs, 
//   // productInputs, 
//   userInputs
// } from "./formSource";
import {CreactUserInputs, familyInputs, IDRequestInputs, ClearanceRequestInputs, SORequestInputs, BirthCerteficateRequestInputs} from "./CreateAcountFormSource";

// import {familyInputs} from "./CreateAcountFormSource";

import { DarkModeContext } from "./Context/DarkModeContext";
import ChangePhoto from "./Profile/ChangePhoto/ChangePhoto";
import ChangePassword from "./Profile/ChangePassword/ChangePassword";
// import Login from "./Profile/Login/Login";
import { AuthContext } from "./Context/AuthContext";
// import { familyInputs } from "./familiyFormSourec";
// import AddNewFamily from "./Pages/FamilyMember/AddNewFamily";
import Signin from "./Account/Login/Signin";
import Signup from "./Account/SignUp/Signup";
function App() {
  const { darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  // console.log(currentUser.email);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<PHome />} />
        <Route path="/" element={<PHome />} />
        <Route path="/about" element={<PAbout />} />
        <Route path="/contact" element={<PContact />} />
        <Route path="/service" element={<PService />} />
        <Route path="/help" element={<PHelp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* //Admin */}
          <Route path="/admin">
            <Route path="updatePhoto" element={<ChangePhoto />} />
            <Route path="updatePassword" element={<ChangePassword />} />
            <Route index element={
              <RequireAuth>
                <AdminHome users={currentUser.email} />
              </RequireAuth>
            } />
            </Route>


            <Route path="/admin/families">
              <Route index element={
                  <FamilyList title="Add New Family" link="/admin/families/new" type="family" users={currentUser.email} />
               
              } />
              <Route path=":userId" element={
                  <ASingle users={currentUser.email} />
              } />
              <Route path="new" element={
                <FNew inputs={familyInputs} title="Add New Families" type="family" users={currentUser.email} />
              } />
            </Route>


            <Route path="/admin/ID/Request">
              <Route index element={
                  // <FamilyList title="ID CARD REQUEST" link="/admin/families/new" type="family" users={currentUser.email} />
                   <IDNew inputs={IDRequestInputs} title="ID CARD REQUEST"  users={currentUser.email} />

              } />
            </Route>

            <Route path="/admin/BirthCerteficate/Request">
              <Route index element={
                 <BirthCeretficateNew inputs={BirthCerteficateRequestInputs} title="ID CARD REQUEST"  users={currentUser.email} />

              } />
            </Route>

            <Route path="/admin/Clearance/Request">
              <Route index element={
              <ClearanceNew inputs={ClearanceRequestInputs} title="CLEARANCE REQUEST"  users={currentUser.email} />
              } />
            </Route>

            <Route path="/admin/OilandSugar/Request">
              <Route index element={
              <SUGARandOIL inputs={SORequestInputs} title="OIL AND SUGAR REQUEST" users={currentUser.email} />
              } />
            </Route>

            
            


            <Route path="/admin/users">
              <Route index element={
                // <RequireAuth>
                  <AList title="Add New Users" link="/admin/users/new" type="user" users={currentUser.email} />
                // </RequireAuth>
              } />
              <Route path=":userId" element={
                // <RequireAuth>
                  <ASingle users={currentUser.email} />
                // </RequireAuth>
              } />
              <Route path="new" element={

                // <RequireAuth>
                <ANew inputs={CreactUserInputs} title="Add New Users" type="user" users={currentUser.email} />
                // </RequireAuth>
              } />
            </Route>

          {/* //Officer */}
          <Route path="/officer">
            <Route path="updatePhoto" element={<ChangePhoto />} />
            <Route path="updatePassword" element={<ChangePassword />} />
            <Route index element={
              <RequireAuth>
                <OfficerHome users={currentUser.email} />
              </RequireAuth>
            } />
          </Route>


          {/* //Customer */}
          <Route path="/customer">
            <Route path="updatePhoto" element={<ChangePhoto />} />
            <Route path="updatePassword" element={<ChangePassword />} />
            <Route index element={
              <RequireAuth>
                <CustomerHome users={currentUser.email} />
              </RequireAuth>
            } />
          </Route>

          {/* //CUSTOMER LINKS
          <Route path="/">
            <Route path="updatePhoto" element={<ChangePhoto />} />
            <Route path="updatePassword" element={<ChangePassword />} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
            <Route index element={
              <RequireAuth>
                <Home users={currentUser.email} />
              </RequireAuth>
            } />
            


            <Route path="families">
              <Route index element={
                // <FamilyMember/>
                <RequireAuth>
                  <FamilyList title="Add New Family" link="/families/new" type="family" users={currentUser.email} />
                </RequireAuth>
              } />
              <Route path=":userId" element={
                <RequireAuth>
                  <Single users={currentUser.email} />
                </RequireAuth>
              } />
              <Route path="new" element={

                // <RequireAuth>
                <AddNewFamily inputs={familyInputs} title="Add New Families" type="family" users={currentUser.email} />
                // </RequireAuth>
              } />
            </Route>


          <Route path="users">
            <Route index element={
              <RequireAuth>
                <List title="Add New Users" link="/users/new" type="user" users={currentUser.email} />
              </RequireAuth>
            } />
            <Route path=":userId" element={
              <RequireAuth>
                <Single users={currentUser.email} />
              </RequireAuth>
            } />
            <Route path="new" element={

              // <RequireAuth>
              <New inputs={userInputs} title="Add New Users" type="user" users={currentUser.email} />
              // </RequireAuth>
            } />
          </Route>
        </Route> */}







          {/* <Route>
            <Route path="products">
              <Route index element={<List title="Add New Products" link="/products/new" type ="products"/>} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Products" type ="products" />} />
            </Route>
          </Route> */}

          {/* <Route>
            <Route path="orders">
              <Route index element={<List title="Add New Orders" link="/orders/new" type ="order"/>} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={orderInputs} title="Add New Orders" type ="order"/>} />
            </Route>
          </Route> */}

          {/* <Route>
            <Route path="deliveries">
              <Route index element={<List title="Add New deliveries" link="/deliveries/new"/>} />
              <Route path=":deliverieId" element={<Single />} />
              <Route path="new" element={<New inputs={deliverieInputs} title="Add New deliveries" />} />
            </Route>
          </Route> */}


          {/* <Route>
            <Route path="services">
               <Route index element={
                 <RequireAuth>
               <Retrieve />
               </RequireAuth>
               } />
              </Route>
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
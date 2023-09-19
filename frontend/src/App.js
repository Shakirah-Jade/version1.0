import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/home";
// import Navbar from "./components/navBar";
import Navbar from "./components/navBar";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import ForgotPassword from "./pages/forgotpassword";
import SideBar from "./pages/sideBar";

////////////////



///////////////

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      {/* surrounds everything needed for the routing system */}
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Navigate to="/" />}
            />
            {/* <Route
              path="/sharepage"
              element={<SharePage/>}
            /> */}
            <Route
              path="/sidebar"
              element={<SideBar/>}
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

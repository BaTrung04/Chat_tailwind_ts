import "./App.css";
import ForgetPassword from "./Components/Auth/ForgetPassword";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import AuthSecurity from "./Components/Auth/AuthSecurity";
import LayoutDefault from "./Components/LayoutDefault/LayoutDefault";
import PrivateRoute from "./routes/PrivateRoute";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Discover from "./Components/Content/Discover";
import Reels from "./Components/Content/Reels";
import Messenger from "./Components/Content/Messenger";
import PersonalPage from "./Components/Content/PersonalPage";
import Post from "./Components/Content/comon/Post";
import Friend from "./Components/Content/comon/Friend";
import Images from "./Components/Content/comon/Images";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isLogin = useSelector((state: RootState) => state?.auth?.login);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

          <Route path="/auth" element={<AuthSecurity />} />
          <Route
            path="/"
            element={
              isLogin.isLogin ? (
                <PrivateRoute>
                  <LayoutDefault />
                </PrivateRoute>
              ) : (
                <Navigate to="/login" />
              )
            }
          >
            <Route index element={<Home />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/personal" element={<PersonalPage />}>
              <Route index element={<Post />} />
              <Route path="friend" element={<Friend />} />
              <Route path="images" element={<Images />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;

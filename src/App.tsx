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
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store"; // Đảm bảo rằng bạn đã khai báo RootState từ store của mình

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLogin = useSelector(
    (state: RootState) => state?.auth?.login?.isLogin
  );

  return (
    <>
      {isLogin === undefined || isLogin === false ? (
        <Navigate to="/login" />
      ) : (
        children
      )}
    </>
  );
};

export default PrivateRoute;

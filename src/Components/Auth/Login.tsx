import { useNavigate } from "react-router-dom";
import Img_Login from "../../assets/Img_login.jpg";
import Logo from "../../assets/logo.png";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFailed, loginStart, loginSuccess } from "../../redux/authSlice";
import { loginAuthApi } from "../../services/modules/auth";
import { RootState } from "../../redux/store";

interface User {
  username: string;
  password: string;
}

const Login = () => {
  const [showPass, setShowPass] = useState<Boolean>(false);
  const navigate = useNavigate();
  const [username, setUserName] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const dispatch = useDispatch();
  const isLogin = useSelector((state: RootState) => state?.auth?.login);

  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const user: User = {
      username: username,
      password: password,
    };
    dispatch(loginStart());
    try {
      const res = await loginAuthApi(user);
      console.log(res);

      dispatch(loginSuccess(res));
      localStorage.setItem("accessToken", res.accessToken);

      if (res.user.isTwoFactorAuthenticationEnabled === true && isLogin) {
        navigate("/auth");
      } else {
        navigate("/");
      }
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  return (
    <>
      <div className="lg:flex ">
        <div className="lg:flex-1 hidden lg:block">
          <img src={Img_Login} alt="" className="h-[100vh] object-cover" />
        </div>
        <div className="lg:flex-1 lg:m-auto flex items-center justify-center h-[100vh] ">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Your Company"
                src={Logo}
                className="mx-auto w-[120px]"
              />
              <h2 className="mt-[15px] text-center text-2xl font-bold leading-9 tracking-tight text-violet-800">
                Đăng nhập
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address:
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={username}
                      autoComplete="email"
                      onChange={(e) => setUserName(e.target.value)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-[5px]"
                      tabIndex={1}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password:
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-violet-600 hover:text-indigo-500"
                        onClick={() => handleClick("forget-password")}
                      >
                        Quân mật khẩu?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="password"
                      required
                      value={password}
                      autoComplete="current-password"
                      onChange={(e) => setPassWord(e.target.value)}
                      className="block w-full px-[5px] rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      tabIndex={2}
                    />
                    {showPass ? (
                      <FaRegEye
                        className="absolute right-[10px] top-[10px]"
                        onClick={() => setShowPass(false)}
                      />
                    ) : (
                      <FaRegEyeSlash
                        className="absolute right-[10px] top-[10px]"
                        onClick={() => setShowPass(true)}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-violet-600 hover:text-indigo-500"
                  onClick={() => handleClick("register")}
                >
                  Đăng ký
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

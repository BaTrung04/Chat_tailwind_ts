import { MdPhoneIphone } from "react-icons/md";
import Img_foegetPass from "../../assets/Img_forgetPass.jpg";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postAuthSecurity } from "../../services/modules/auth";

interface ICode {
  code: string;
}

const AuthSecurity = () => {
  const [code, setCode] = useState<string>("");
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(`/${path}`);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newCode: ICode = {
      code: code,
    };
    try {
      const res = await postAuthSecurity(newCode);
      localStorage.removeItem("accessToken");
      localStorage.setItem("accessToken", res.accessToken);
      if (res) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  return (
    <>
      {" "}
      <div className="lg:flex ">
        <div className="lg:flex-1 hidden lg:block">
          <img src={Img_foegetPass} alt="" className="h-[100vh] object-cover" />
        </div>
        <div className="lg:flex-1 lg:m-auto flex items-center justify-center h-[100vh] ">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Your Company"
                src={Logo}
                className="mx-auto w-[120px]"
              />
              <h2 className="mt-[15px] text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Two-factor authentication
              </h2>
              <p className="mt-[5px] m-auto text-center">
                Vui lòng điền mã Code?
              </p>
              <div className="mt-[7px] flex items-center justify-center">
                <MdPhoneIphone size={50} className="text-primary" />
              </div>
            </div>

            <div className="mt-[20px] sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Mã code:
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Code: ******"
                      required
                      value={code}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-[5px]"
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Xác thực
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Bạn chưa nhận được mã?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-violet-600 hover:text-indigo-500"
                  onClick={() => handleClick("login")}
                >
                  Quay lại
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSecurity;

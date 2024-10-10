import { useState } from "react";
import Img_Register from "../../assets/Img_Register.jpg";
import Logo from "../../assets/logo.png";
import Datepicker from "react-tailwindcss-datepicker";
import { useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { registerAuthApi } from "../../services/modules/user";
import { useDispatch } from "react-redux";
import { registerFailed, registerSuccess } from "../../redux/userSlice";
import moment from "moment";
import { toast } from "react-toastify";
interface INewUser {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  date_of_birth: string | null;
  gender: string;
}
const Register = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState<Boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const dispatch = useDispatch();
  const handleValueChange = (newValue: any) => {
    console.log("Selected Date: ", newValue);
    setValue(newValue);
    setDate(newValue.startDate);
  };
  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };
  const handleClick = (path: string) => {
    navigate(`${path}`);
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formattedDate = date ? moment(date).format("YYYY-MM-DD") : null;
    const newUser: INewUser = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
      date_of_birth: formattedDate,
      gender: gender,
    };
    try {
      await registerAuthApi(newUser);
      dispatch(registerSuccess());
      toast.success("🦄 Bạn đã đăng ký tài khoản thành công!");
      navigate("/login");
    } catch (err) {
      dispatch(registerFailed());
    }
  };

  return (
    <>
      <div className="lg:flex ">
        <div className="lg:flex-1 lg:m-auto flex items-center justify-center h-[100vh] ">
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                alt="Your Company"
                src={Logo}
                className="mx-auto w-[120px]"
              />
              <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Đăng ký tài khoản
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex justify-between gap-[10px]">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First Name:
                    </label>
                    <div className="mt-2">
                      <input
                        placeholder="First name"
                        value={firstName}
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-[5px]"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last Name:
                    </label>
                    <div className="mt-2">
                      <input
                        type={lastName}
                        placeholder="Last name"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-[5px]"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email:
                  </label>
                  <div className="mt-2">
                    <input
                      value={email}
                      placeholder="Email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-[5px]"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password:
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <input
                      value={password}
                      type={showPass ? "text" : "password"}
                      placeholder="password"
                      required
                      autoComplete="current-password"
                      className="block w-full px-[5px] rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setPassword(e.target.value)}
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Chọn ngày sinh của bạn:
                  </label>
                  <div className="block w-full rounded-md border-1 mt-[5px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <Datepicker
                      value={value}
                      onChange={handleValueChange}
                      useRange={false} // false nếu chỉ muốn chọn một ngày, true để chọn khoảng thời gian
                      asSingle={true} // true nếu muốn chọn ngày đơn lẻ
                      displayFormat={"DD/MM/YYYY"} // Định dạng hiển thị
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Giới tính
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={handleGenderChange}
                    >
                      <option>Nam</option>
                      <option>Nữ</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Đăng ký
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Hãy tham gia cùng chúng tôi?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 text-violet-600 hover:text-indigo-500"
                  onClick={() => handleClick("/")}
                >
                  Đăng Nhập
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex-1 hidden lg:block">
          <img src={Img_Register} alt="" className="h-[100vh] object-cover" />
        </div>
      </div>
    </>
  );
};

export default Register;

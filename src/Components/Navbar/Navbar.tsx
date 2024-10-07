import { GoHomeFill } from "react-icons/go";
import Logo from "../../assets/logo.png";
import { PiVideo } from "react-icons/pi";
import { RxTextAlignJustify } from "react-icons/rx";
import { CiBellOn } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>("/");
  const [withDiv, setWithDiv] = useState<boolean>(false);
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);
  return (
    <div>
      <div
        className={`xl:w-[220px] lg:w-[70px] shadow-xl lg:h-[100vh] lg:sticky lg:top-0 border-1 hidden lg:block   ${
          withDiv === true && "w-[70px]"
        } `}
      >
        <div className="lg:flex flex-col justify-between h-[100%] xl:px-[20px] items-center">
          <div className="flex lg:flex-col gap-7 ">
            <img
              src={Logo}
              alt=""
              className="xl:w-[140px] lg:m-auto lg:mt-[20px] lg:w-[50px] "
            />
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0  ${
                activeTab === "/" ? "text-violet-600 text-[20px] font-bold" : ""
              } `}
            >
              <GoHomeFill size={30} className="relative top-[-3px] " />
              <span className="hidden xl:block">Trang Chủ</span>
            </div>
            <div
              className="flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl"
              onClick={() => setWithDiv(!withDiv)}
            >
              <IoSearchOutline size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Tìm kiếm</span>
            </div>

            {withDiv && (
              <div
                className={`fixed bg-slate-300 h-[100%] xl:left-[220px] lg:left-[70px] w-[350px] transform transition-transform duration-500 ease-in-out ${
                  withDiv ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                123
              </div>
            )}
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0  ${
                activeTab === "/discover"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
            >
              <IoCompassOutline size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Khám Phá</span>
            </div>
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0  ${
                activeTab === "/reels"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
            >
              <PiVideo size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Reels</span>
            </div>
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0  ${
                activeTab === "/notification"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
            >
              <CiBellOn size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Thông báo</span>
            </div>
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0  ${
                activeTab === "/message"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
            >
              <RiMessengerLine size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Tin nhắn</span>
            </div>
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0  ${
                activeTab === "/user"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
            >
              <span className="hidden xl:block"> Trang cá nhân</span>
            </div>
          </div>
          <div className="lg:flex items-center  gap-[10px] mb-[20px] p-[10px] hover:bg-violet-100 rounded-xl hidden">
            <RxTextAlignJustify size={30} className="relative top-[-1px]" />
            <span className="hidden xl:block">Xem thêm</span>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:hidden block shadow-sm border-solid border-b-2 border-violet-300 fixed top-0  w-[100%] z-[999]">
          <div className="flex justify-between mx-[20px]">
            <img src={Logo} alt="" className=" w-[50px] " />
            <div className="flex justify-center items-center gap-[10px]">
              <input
                type="text"
                placeholder="Tìm kiếm"
                required
                className="block w-[full] px-[5px] rounded-lg border-0 py-1.5 bg-violet-100 text-gray-900 focus:border-none"
              />
              <CiBellOn size={30} className="relative top-[-3px]" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:hidden block shadow-sm border-solid border-t-2 border-violet-300 fixed bottom-0  w-[100%] z-[999] ">
          <div className="flex justify-between mx-[30px] h-[50px] items-center">
            <GoHomeFill size={30} className="relative top-[-3px] " />
            <IoCompassOutline size={30} className="relative top-[-3px]" />
            <PiVideo size={30} className="relative top-[-3px]" />
            <RiMessengerLine size={30} className="relative top-[-3px]" />
            <CiUser size={30} className="relative top-[-3px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

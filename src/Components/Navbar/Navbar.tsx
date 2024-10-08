import { GoHomeFill } from "react-icons/go";
import { GoHome } from "react-icons/go";
import Logo from "../../assets/logo.png";
import { PiVideo } from "react-icons/pi";
import { RxTextAlignJustify } from "react-icons/rx";
import { GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoCompassOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import img from "../../assets/Img_login.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>("/");
  const [withDiv, setWithDiv] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);
  const handleClickSearch = () => {
    setWithDiv(!withDiv);
    setActiveTab("s");
  };
  const handleClickPage = (page: string) => {
    setWithDiv(false);
    navigate(`/${page}`);
  };
  return (
    <div className="z-[999]">
      <div
        className={`xl:w-[220px] lg:w-[70px]  lg:h-[100vh] lg:sticky lg:top-0 border-1 hidden lg:block   ${
          withDiv === true
            ? "w-[70px] shadow-none box-border border-r-1 "
            : " shadow-xl"
        } `}
      >
        <div className="lg:flex flex-col justify-between h-[100%] xl:px-[20px] items-center">
          <div className="flex lg:flex-col gap-7 ">
            {/* logo */}
            <img
              src={Logo}
              alt=""
              className="xl:w-[140px] lg:m-auto lg:mt-[20px] lg:w-[50px] "
              onClick={() => handleClickPage("")}
            />
            {/* trang chủ */}
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0 cursor-pointer ${
                activeTab === "/" ? "text-violet-600 text-[20px] font-bold" : ""
              } `}
              onClick={() => handleClickPage("")}
            >
              {activeTab ? (
                <GoHomeFill size={30} className="relative top-[-3px] " />
              ) : (
                <GoHome size={30} className="relative top-[-3px] " />
              )}
              <span className="hidden xl:block">Trang Chủ</span>
            </div>
            {/* search */}
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl cursor-pointer  ${
                activeTab === "s" ? "text-violet-600 text-[20px] font-bold" : ""
              } `}
              onClick={() => handleClickSearch()}
            >
              <IoSearchOutline size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Tìm kiếm</span>
            </div>
            {/* modal search */}
            {withDiv && (
              <div
                className={`fixed h-[100%] xl:left-[220px] shadow-right bg-white lg:left-[70px] w-[400px] transform transition-transform duration-500 ease-in-out cursor-pointer z-[999] ${
                  withDiv ? "translate-x-0" : "-translate-x-full"
                } `}
              >
                <div className="border-b-violet-400 border-b-2 w-[100%]">
                  <h1 className="text-[30px] flex items-center justify-start py-[20px] pl-[20px]">
                    Tìm kiếm
                  </h1>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Tìm kiếm"
                      required
                      className="block w-[88%] px-[5px] rounded-lg border-0 py-1.5 bg-violet-100 text-gray-900 focus:border-none my-[20px] ml-[20px]"
                    />
                    <IoIosCloseCircleOutline className="absolute bottom-[8px] right-[33px] hover:bg-violet-800 hover:text-white rounded-[999px]" />
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center px-[20px] py-[20px] ">
                    <div className="font-bold ">Gần đây</div>
                    <div className="text-blue-600 font-bold">Xóa tất cả</div>
                  </div>
                  <div className="flex  justify-between items-center hover:bg-violet-100 cursor-pointer px-[20px] py-[3px]">
                    <div className="flex gap-[5px] items-center">
                      <img
                        src={img}
                        alt=""
                        className="w-[53px] h-[53px] object-cover rounded-[999px] border-2 border-violet-800"
                      />
                      <div>
                        <div>Bas trung</div>
                        <div>Đang theo dõi</div>
                      </div>
                    </div>
                    <div>
                      <IoCloseSharp className="text-[30px]  hover:bg-violet-800 hover:text-white rounded-[999px]" />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* kham pha */}
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0 cursor-pointer z-10 ${
                activeTab === "/discover"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
              onClick={() => handleClickPage("discover")}
            >
              <IoCompassOutline size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Khám Phá</span>
            </div>
            {/* reels */}
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0 cursor-pointer  ${
                activeTab === "/reels"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
              onClick={() => handleClickPage("reels")}
            >
              <PiVideo size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Reels</span>
            </div>
            {/* thong bao */}
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0 cursor-pointer ${
                activeTab === "/notification"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
              onClick={() => handleClickPage("notification")}
            >
              <GoBell size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Thông báo</span>
            </div>
            {/* tin nhan */}
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0 cursor-pointer ${
                activeTab === "/messenger"
                  ? "text-violet-600 text-[20px] font-bold"
                  : ""
              } `}
              onClick={() => handleClickPage("messenger")}
            >
              <RiMessengerLine size={30} className="relative top-[-3px]" />
              <span className="hidden xl:block">Tin nhắn</span>
            </div>
            {/* trang ca nhan */}
            <div
              className={`flex items-center gap-[10px] p-[10px] hover:bg-violet-100 rounded-xl lg:mt-[20px] xl:mt-0 cursor-pointer ${
                activeTab === "/personal" ? "text-violet-600 " : ""
              } `}
              onClick={() => handleClickPage("personal")}
            >
              <img
                src={img}
                alt=""
                className="w-[30px] h-[30px] object-cover rounded-[999px] border border-violet-800"
              />
              <span className="hidden xl:block"> Trang cá nhân</span>
            </div>
          </div>
          <div className="lg:flex items-center  gap-[10px] mb-[20px] p-[10px] hover:bg-violet-100 rounded-xl hidden cursor-pointer">
            <RxTextAlignJustify size={30} className="relative top-[-1px]" />
            <span className="hidden xl:block">Xem thêm</span>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:hidden block shadow-sm border-solid border-b-2 border-violet-300 fixed top-0 bg-white  w-[100%] z-[999]">
          <div className="flex justify-between mx-[20px]">
            <img src={Logo} alt="" className=" w-[50px] " />
            <div className="flex justify-center items-center gap-[10px]">
              <input
                type="text"
                placeholder="Tìm kiếm"
                required
                className="block w-[full] px-[5px] rounded-lg border-0 py-1.5 bg-violet-100 text-gray-900 focus:border-none"
              />
              <GoBell
                className={`relative top-[-3px] cursor-pointer p-[5px] text-[38px] ${
                  activeTab === "/notification"
                    ? "text-violet-500 box-border border border-violet-500 rounded-lg "
                    : ""
                }  `}
                onClick={() => handleClickPage("notification")}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:hidden block shadow-sm border-solid border-t-2 border-violet-300 fixed bottom-0 bg-white  w-[100%] z-[999] ">
          <div className="flex justify-between mx-[30px] h-[50px] items-center ">
            <GoHomeFill
              className={`relative top-[-3px] cursor-pointer p-[5px] text-[40px] ${
                activeTab === "/"
                  ? "text-violet-500 box-border border border-violet-500 rounded-lg "
                  : ""
              }  `}
              onClick={() => handleClickPage("")}
            />
            <IoCompassOutline
              className={`relative top-[-3px] cursor-pointer p-[5px] text-[40px] ${
                activeTab === "/discover"
                  ? "text-violet-500 box-border border border-violet-500 rounded-lg "
                  : ""
              }  `}
              onClick={() => handleClickPage("discover")}
            />
            <PiVideo
              className={`relative top-[-3px] cursor-pointer p-[5px] text-[40px] ${
                activeTab === "/reels"
                  ? "text-violet-500 box-border border border-violet-500 rounded-lg "
                  : ""
              }  `}
              onClick={() => handleClickPage("reels")}
            />
            <RiMessengerLine
              className={`relative top-[-3px] cursor-pointer p-[5px] text-[40px] ${
                activeTab === "/messenger"
                  ? "text-violet-500 box-border border border-violet-500 rounded-lg "
                  : ""
              }  `}
              onClick={() => handleClickPage("messenger")}
            />
            <CiUser
              className={`relative top-[-3px] cursor-pointer p-[5px] text-[40px] ${
                activeTab === "/personal"
                  ? "text-violet-500 box-border border border-violet-500 rounded-lg "
                  : ""
              }  `}
              onClick={() => handleClickPage("personal")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

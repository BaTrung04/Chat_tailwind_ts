import bg from "../../assets/Img_Register.jpg";
import {
  IoHome,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { PiGenderIntersexLight } from "react-icons/pi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../Common/footer";
const PersonalPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>("/personal");

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);
  const handleClickPage = (path: string): void => {
    navigate(`/personal${path}`);
  };
  return (
    <>
      <div className="lg:container">
        <div className="border-b border-b-violet-200 pb-[50px] ">
          <div className="flex items-center justify-center  lg:my-[50px] py-[20px]">
            <div className="flex lg:flex-row flex-row items-center gap-[30px] justify-center">
              <img
                src={bg}
                alt=""
                className="lg:w-[150px] lg:h-[150px] object-cover rounded-full w-[80px] h-[80px] "
              />
              <div className="">
                <div className="flex gap-[10px] items-center justify-between">
                  <div className="lg:mr-[10px] lg:text-[25px] text-[18px] text-center font-bold text-violet-500">
                    ba trung
                  </div>
                  <div className="lg:flex flex-col lg:flex-row gap-[10px] hidden">
                    <button className="primary-btn">
                      Cập nhật ảnh đại diện
                    </button>
                    <button className="primary-btn">Xem kho lưu trữ</button>
                  </div>
                  <IoSettingsOutline className=" text-[25px]" />
                </div>
                <div className="flex flex-col gap-[10px] pt-[20px] text-[14px] lg:text-[16px] text-gray-600">
                  <div className="flex items-center gap-[10px]">
                    <MdOutlineEmail className="text-[22px]" />
                    <span>Email:trung@gmail.com </span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <IoHome className="text-[22px]" />
                    Sống tại :ha noi
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <PiGenderIntersexLight className="text-[22px]" />
                    Giới tính nam
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <IoInformationCircleOutline className="text-[22px]" />
                    Ngày sinh :04/10/2320
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <FaRegHeart className="text-[20px]" />
                    Hiện tại đang :đọc thân
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:block">
            <button className="lg:w-[80px] lg:h-[80px] bg-slate-100 flex justify-center items-center rounded-full border border-violet-300 w-[auto] lg:ml-[200px]">
              <GoPlus className="text-[40px] text-violet-500" />
            </button>
            <div className="lg:ml-[200px] mt-[10px] text-[14px] lg:text-[16px]">
              Thêm bài viết
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-[50px] text-[14px] lg:text-[16px]">
            <div
              className={` font-bold uppercase px-[5px] cursor-pointer ${
                activeTab === "/personal"
                  ? "border-t border-t-violet-500 text-violet-500"
                  : ""
              }`}
              onClick={() => handleClickPage("")}
            >
              Bài viết
            </div>
            <div
              className={` font-bold uppercase px-[5px] cursor-pointer  ${
                activeTab === "/personal/friend"
                  ? "border-t border-t-violet-500 text-violet-500"
                  : ""
              }`}
              onClick={() => handleClickPage("/friend")}
            >
              Bạn bè
            </div>
            <div
              className={` font-bold uppercase px-[5px]  cursor-pointer ${
                activeTab === "/personal/images"
                  ? "border-t border-t-violet-500 text-violet-500"
                  : ""
              }`}
              onClick={() => handleClickPage("/images")}
            >
              Ảnh
            </div>
          </div>
          <div className="py-[50px]">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PersonalPage;

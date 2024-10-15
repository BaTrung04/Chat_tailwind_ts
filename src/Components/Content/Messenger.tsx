import { FaRegPenToSquare } from "react-icons/fa6";
import bg from "../../assets/Img_Register.jpg";
import { LuPhone } from "react-icons/lu";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { SlInfo } from "react-icons/sl";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import { FaRegFaceLaughBeam } from "react-icons/fa6";

const Messenger = () => {
  return (
    <div className="fixed xl:left-[220px] lg:left-[70px] lg:h-[100vh] mb-[100px] h-[88vh] xl:w-[calc(100%-220px)] lg:w-[calc(100%-70px)]  w-[100%]">
      <div className="flex h-full">
        {/* Left panel */}
        <div className="xl:flex-[2] h-full bg-white border-r border-r-violet-300 xl:w-[400px] lg:p-[20px] lg:w-[120px] w-[80px] xl:block flex flex-col items-center">
          <div className="flex justify-between py-[20px]">
            <div className="text-[20px] font-bold xl:block hidden">
              Ba Trung
            </div>
            <div>
              <FaRegPenToSquare className="text-[25px] text-violet-500" />
            </div>
          </div>

          <div>
            <div className="xl:flex justify-between hidden">
              <div className="font-bold">Tin nhắn</div>
              <div className="text-[14px] text-gray-500 font-bold">
                Tin nhắn đang chờ
              </div>
            </div>

            <div className="flex justify-start items-center px-[5px] py-[10px] gap-[10px]">
              <img
                src={bg}
                alt=""
                className="lg:w-[56px] lg:h-[56px] w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className="xl:block hidden">
                <div>Bá trung</div>
                <div className="text-[14px] text-gray-500">Tin nhắn gần</div>
              </div>
            </div>
            <div className="flex justify-start items-center px-[5px] py-[10px] gap-[10px]">
              <img
                src={bg}
                alt=""
                className="lg:w-[56px] lg:h-[56px] w-[50px] h-[50px] rounded-full object-cover"
              />
              <div className="xl:block hidden">
                <div>Bá trung</div>
                <div className="text-[14px] text-gray-500">Tin nhắn gần</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex-[6] flex flex-col border-r border-r-violet-300 ">
          <div className="flex justify-between lg:px-[20px] p-[10px] lg:py-[15px] border-b border-b-violet-300">
            <div className="flex items-center gap-[10px]">
              <img
                src={bg}
                alt=""
                className="lg:w-[47px] lg:h-[47px] w-[44px] h-[44px] rounded-full object-cover"
              />
              <div className="text-[16px] font-bold">Bá trung</div>
            </div>
            <div className="flex items-center gap-[10px]">
              <LuPhone className="text-[25px]" />
              <HiOutlineVideoCamera className="text-[30px]" />
              <SlInfo className="text-[25px]" />
            </div>
          </div>

          {/* Chat content */}
          <div className="overflow-auto bg-white flex-grow h-full overflow-x-hidden">
            <div className="h-[5000px]">
              <div className="flex flex-col items-center gap-[5px] py-[50px]">
                <img
                  src={bg}
                  alt=""
                  className="lg:w-[100px] lg:h-[100px] w-[60px] h-[60px] rounded-full object-cover"
                />
                <div>Bá trung</div>
                <button className="btn-primary bg-violet-400 px-[10px] py-[5px] text-white rounded-lg hover:bg-violet-500">
                  Xem trang cá nhân
                </button>
              </div>
              <div className="flex items-end justify-start mb-[5px]">
                <img
                  src={bg}
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full mr-[7px]"
                />
                <div className="bg-gray-100 px-[10px] py-[10px] lg:max-w-[60%] max-w-[50%] rounded-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores officiis in aperiam porro, necessitatibus et animi
                  inventore tempora dolorum atque tenetur velit laboriosam,
                  dolor ipsam quos nesciunt molestias eum perspiciatis!
                </div>
              </div>
              <div className="flex items-end justify-end mb-[5px]">
                <div className="bg-gray-100 px-[5px] py-[10px]  lg:max-w-[60%] max-w-[50%] rounded-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores officiis in aperiam porro, necessitatibus et animi
                  inventore tempora dolorum atque tenetur velit laboriosam,
                  dolor ipsam quos nesciunt molestias eum perspiciatis!
                </div>
              </div>
            </div>
          </div>

          {/* Input section */}
          <div className="flex items-center justify-center py-[10px] mx-[10px]">
            <div className="w-[90%] relative">
              <input
                type="text"
                placeholder="Nhắn tin..."
                required
                className="block w-full pl-[40px] rounded-3xl border-0 py-1.5 bg-violet-100 text-gray-900 focus:border-none h-[38px]"
              />
              <FaRegFaceLaughBeam className="text-[25px] left-[8px] absolute top-[5px]" />
            </div>
            <div className="flex items-center ml-[20px]">
              <MdOutlineSettingsVoice className="text-[25px] mr-[20px]" />
              <IoImageOutline className="text-[25px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;

import bg from "../../assets/Img_Register.jpg";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io5";
const Home = () => {
  return (
    <>
      <div className="flex justify-center gap-[64px] xl:ml-[220px] lg:ml-[70px]">
        {/* left */}
        <div className="flex flex-col justify-end w-[630px] ">
          <div className="flex gap-[10px] p-[8px] border-b border-b-violet-300 lg:border-none mt-[16px] mb-[8px]">
            <div>
              <img
                src={bg}
                alt=""
                className="flex-1 h-[66px]  object-cover rounded-full"
              />
              <div className="text-center">string</div>
            </div>
            <div>
              <img
                src={bg}
                alt=""
                className="flex-1] h-[66px] object-cover rounded-full"
              />
            </div>
            <div>
              <img
                src={bg}
                alt=""
                className="flex-1 h-[66px] object-cover rounded-full"
              />
            </div>
            <div>
              <img
                src={bg}
                alt=""
                className="flex-1 h-[66px] object-cover rounded-full"
              />
            </div>
            <div>
              <img
                src={bg}
                alt=""
                className="flex-1 h-[66px] object-cover rounded-full"
              />
            </div>
            <div>
              <img
                src={bg}
                alt=""
                className="flex-1 h-[66px] object-cover rounded-full"
              />
            </div>
            <div>
              <img
                src={bg}
                alt=""
                className="flex-1 h-[66px] object-cover rounded-full"
              />
            </div>
            <div>
              <img
                src={bg}
                alt=""
                className="flex-1 h-[66px] object-cover rounded-full"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center lg:w-[470px] lg:h-[720px] sm:w-[400px] sm:h-[600px] w-[full] ">
              <div>
                {" "}
                <div className="px-[5px] lg:px-[0px] lg:mx-[0px] py-[10px] flex justify-between items-center mx-[10px]">
                  <div className="flex gap-[5px] items-center text-[14px] ">
                    <img
                      src={bg}
                      alt=""
                      className="w-[35px] h-[35px] rounded-full"
                    />
                    <div>
                      <div>Bá trung</div>
                      <div className="text-[12px]">04/102/2002</div>
                    </div>
                  </div>
                  <BsThreeDots className="hover:text-violet-500 hover:bg-violet-100 p-[5px] text-[25px] rounded-full" />
                </div>
                <div className="ml-[15px] lg:ml-0 text-[15px]">
                  1 ngày đẹp trời
                </div>
                <div className="lg:flex items-center justify-center">
                  <img
                    src={bg}
                    alt=""
                    className="lg:h-[565px] lg:w-[468px] object-cover w-[full] h-[50vh] border border-violet-500 rounded-sm"
                  />
                </div>
                <div className="flex justify-between px-[15px] py-[10px] lg:px-0 text-[20px]">
                  <div className="flex gap-[10px]">
                    <FaRegHeart />
                    <TbMessageCircle />
                  </div>
                  <div>
                    <IoPaperPlaneOutline />
                  </div>
                </div>
                <div className="px-[15px] lg:px-0 text-[14px] font-bold py-[5px]">
                  1000 lượt thích
                </div>
                <div className=" border-b border-b-violet-100 text-gray-400 text-[14px] pb-[3px] lg:block hidden">
                  Thêm bình luận...
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center lg:w-[470px] lg:h-[720px] sm:w-[400px] sm:h-[600px] w-[full] ">
              <div>
                {" "}
                <div className="px-[5px] lg:px-[0px] lg:mx-[0px] py-[10px] flex justify-between items-center mx-[10px]">
                  <div className="flex gap-[5px] items-center text-[14px] ">
                    <img
                      src={bg}
                      alt=""
                      className="w-[35px] h-[35px] rounded-full"
                    />
                    <div>
                      <div>Bá trung</div>
                      <div className="text-[12px]">04/102/2002</div>
                    </div>
                  </div>
                  <BsThreeDots className="hover:text-violet-500 hover:bg-violet-100 p-[5px] text-[25px] rounded-full" />
                </div>
                <div className="ml-[15px] lg:ml-0 text-[15px]">
                  1 ngày đẹp trời
                </div>
                <div className="lg:flex items-center justify-center">
                  <img
                    src={bg}
                    alt=""
                    className="lg:h-[565px] lg:w-[468px] object-cover w-[full] h-[50vh] border border-violet-500 rounded-sm"
                  />
                </div>
                <div className="flex justify-between px-[15px] py-[10px] lg:px-0 text-[20px]">
                  <div className="flex gap-[10px]">
                    <FaRegHeart />
                    <TbMessageCircle />
                  </div>
                  <div>
                    <IoPaperPlaneOutline />
                  </div>
                </div>
                <div className="px-[15px] lg:px-0 text-[14px] font-bold py-[5px]">
                  1000 lượt thích
                </div>
                <div className=" border-b border-b-violet-100 text-gray-400 text-[14px] pb-[3px] lg:block hidden">
                  Thêm bình luận...
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className=" hidden lg:flex lg:justify-start w-[383px]">
          <div className="w-[100%] py-[25px]">
            <div className="px-[5px] lg:px-[0px] lg:mx-[0px] py-[10px] flex justify-between items-center mx-[10px]">
              <div className="flex gap-[5px] items-center text-[14px] justify-between ">
                <img
                  src={bg}
                  alt=""
                  className="w-[44px] h-[44px] rounded-full"
                />
                <div className="">
                  <div>Bá trung</div>
                  <div className="text-[12px]">04/102/2002</div>
                </div>
              </div>
              <BsThreeDots className="hover:text-violet-500 hover:bg-violet-100 p-[5px] text-[25px] rounded-full" />
            </div>
            <div className="flex justify-between items-center py-[15px]">
              <div className="text-[14px] text-gray-400 font-bold">
                Gợi ý của bạn
              </div>
              <div className="text-[13px] font-bold ">Xem tất cả</div>
            </div>
            <div className="px-[5px] lg:px-[0px] lg:mx-[0px] py-[10px] flex justify-between items-center mx-[10px]">
              <div className="flex gap-[5px] items-center text-[14px] justify-between ">
                <img
                  src={bg}
                  alt=""
                  className="w-[44px] h-[44px] rounded-full"
                />
                <div className="">
                  <div>Bá trung</div>
                  <div className="text-[12px]">04/102/2002</div>
                </div>
              </div>
              <BsThreeDots className="hover:text-violet-500 hover:bg-violet-100 p-[5px] text-[25px] rounded-full" />
            </div>
            <div className="px-[5px] lg:px-[0px] lg:mx-[0px] py-[10px] flex justify-between items-center mx-[10px]">
              <div className="flex gap-[5px] items-center text-[14px] justify-between ">
                <img
                  src={bg}
                  alt=""
                  className="w-[44px] h-[44px] rounded-full"
                />
                <div className="">
                  <div>Bá trung</div>
                  <div className="text-[12px]">04/102/2002</div>
                </div>
              </div>
              <div className="text-[14px] text-violet-500 font-bold ">
                Theo dõi
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

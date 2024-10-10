import {
  IoEllipsisHorizontalOutline,
  IoPaperPlaneOutline,
} from "react-icons/io5";
import img from "../../assets/Img_login.jpg";
import { FaRegHeart } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
interface IMovie {
  name: string;
  id: number;
  userName: string;
  link: string;
}
const movies: IMovie[] = [
  {
    name: "Đấu phá thương khung tập 107",
    id: 1,
    userName: "VietKids",
    link: "https://vip.opstream17.com/share/41621ff11046c80c435fa90489a3a20d",
  },
  {
    name: "Phàm nhân tu tiên tập 114",
    id: 2,
    userName: "VietSub",
    link: "https://vip.opstream11.com/share/951b9abf25fef051c0486f49a1d44ee5",
  },
  {
    name: "Đại chúa tể tập 52",
    id: 3,
    userName: "VietKids",
    link: "https://vip.opstream17.com/share/2719d3088a5fe4ee5163a6486db4e179",
  },
  {
    name: "Già thiên tập 58",
    id: 4,
    userName: "SubMoi",
    link: "https://vip.opstream17.com/share/7690dd4db7a92524c684e3191919eb6b",
  },
  {
    name: "Thương nguyên đồ tập 26",
    id: 5,
    userName: "VietKids",
    link: "https://vip.opstream16.com/share/3ccd4c93c3d2577f70308360bf4f4149",
  },
];
const Reels = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-[64px] xl:ml-[220px] lg:ml-[70px] items-center">
        {movies.map((item) => {
          return (
            <>
              <div
                className="border-b border-b-violet-500 py-[10px]"
                key={item.id}
              >
                {/* header */}
                <div className="flex justify-between items-center py-[10px]">
                  <div className="flex justify-start items-center gap-2">
                    <img
                      src={img}
                      alt=""
                      className="w-[44px] h-[44px] object-cover rounded-full"
                    />
                    <div className="">{item.userName}</div>
                  </div>
                  <div className="right-header-main">
                    <IoEllipsisHorizontalOutline
                      style={{
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  </div>
                </div>
                {/* main */}
                <div className="main-body">
                  <div className="main-body-title">{item.name}</div>
                  <iframe
                    src={item.link}
                    className="lg:w-[600px] lg:h-[440px] xl:w-[800px] xl:-[565px]"
                  ></iframe>
                </div>
                {/* footer */}
                <div className="flex justify-between px-[15px] py-[10px] lg:px-0 text-[20px]">
                  <div className="flex gap-[10px]">
                    <FaRegHeart />
                    <TbMessageCircle />
                  </div>
                  <div>
                    <IoPaperPlaneOutline />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Reels;

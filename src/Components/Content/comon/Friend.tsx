import { AiOutlineUsergroupAdd } from "react-icons/ai";
const Friend = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center gap-[20px] lg:pt-[50px]">
        <AiOutlineUsergroupAdd className="lg:text-[80px] text-[50px] border border-violet-500 rounded-full p-[10px] text-violet-500" />
        <h1 className="text-[25px] font-bold">Bạn bè</h1>
        <p className="text-center text-[14px] lg:text-[16px] px-[10px]">
          Tất cả bạn bè của bạn.
        </p>
        <div className="text-violet-500 font-bold hover:text-black cursor-pointer text-[14px] lg:text-[16px] ">
          Kết nối bạn bè của bạn.
        </div>
      </div>
    </>
  );
};

export default Friend;

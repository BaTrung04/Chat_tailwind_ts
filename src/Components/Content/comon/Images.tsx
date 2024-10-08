import { IoImagesOutline } from "react-icons/io5";
const Images = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center gap-[20px] lg:pt-[50px]">
        <IoImagesOutline className="lg:text-[80px] text-[50px] border border-violet-500 rounded-full p-[10px] text-violet-500" />
        <h1 className="text-[25px] font-bold">Album ảnh</h1>
        <p className="text-center text-[14px] lg:text-[16px] px-[10px]">
          Bộ sưu tập của bạn.
        </p>
        <div className="text-violet-500 font-bold hover:text-black cursor-pointer text-[14px] lg:text-[16px] ">
          Hãy đăng bức ảnh đầu tiên.
        </div>
      </div>
    </>
  );
};

export default Images;

import { IoCameraOutline } from "react-icons/io5";
const Post = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[20px] lg:pt-[50px]">
        <IoCameraOutline className="lg:text-[80px] text-[50px] border border-violet-500 rounded-full p-[10px] text-violet-500" />
        <h1 className="lg:text-[25px] font-bold">Chia sẻ ảnh</h1>
        <p className="text-center text-[14px] lg:text-[16px] px-[10px]">
          Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn.
        </p>
        <div className="text-violet-500 font-bold hover:text-black cursor-pointer text-[14px] lg:text-[16px] ">
          Chia sẻ ảnh dầu tiên của bạn
        </div>
      </div>
    </>
  );
};

export default Post;

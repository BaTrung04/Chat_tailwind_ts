import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const LayoutDefault = () => {
  return (
    <>
      {" "}
      <div className="lg:flex">
        <Navbar />
        <div className="flex-[8.8] h-[5000px] mt-[50px] lg:mt-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutDefault;

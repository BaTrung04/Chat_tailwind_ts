import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const LayoutDefault = () => {
  return (
    <>
      {" "}
      <div className="lg:flex h-[auto]">
        <Navbar />

        <div className="flex-[8.8] h-[auto] mt-[50px] lg:mt-0 z-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutDefault;

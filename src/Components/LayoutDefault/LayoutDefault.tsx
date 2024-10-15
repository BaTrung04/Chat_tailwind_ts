import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const LayoutDefault = () => {
  return (
    <>
      {" "}
      <div className=" overflow-x-none">
        <Navbar />
        <div className=" mt-[50px] lg:mt-0 z-1  h-[auto] overflow-x-none">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutDefault;

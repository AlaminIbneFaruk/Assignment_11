import { Outlet } from "react-router-dom";


const Bg = () => {
  return (
    <div className="bg-base-100 min-h-[50vh]">
      <Outlet/>
    </div>
  );
};

export default Bg;
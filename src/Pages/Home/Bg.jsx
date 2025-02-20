import { Outlet } from "react-router-dom";


const Bg = () => {
  return (
    <div className="bg-amber-200 min-h-[50vh]">
      <Outlet/>
    </div>
  );
};

export default Bg;
import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-ghost font-mono">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;

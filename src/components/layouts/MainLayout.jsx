import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div className="bg-ghost font-rubik">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";
import Headline from "../shared/Headline";
import PhoneNavbar from "../shared/PhoneNavbar";

const MainLayout = () => {
  return (
    <div className="bg-ghost font-rubik select-none">
      <Headline />
      <Navbar />
      <Outlet />
      <Footer />
      <PhoneNavbar />
    </div>
  );
};

export default MainLayout;

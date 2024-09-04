import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen bg-[#09183e]">
      <div className="flex flex-col h-full">
        <Header />
        {/* define size */}
        <div className="flex h-full justify-center content-center">
          <div
            className="p-6 bg-[#142655] rounded-sm shadow my-auto"
            style={{ height: "600px", width: "900px" }}
          >
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export { MainLayout };

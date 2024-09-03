import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen bg-sky-800">
      <Header />
      <div
        className=""
        style={{ height: "calc(100vh - 200px)", width: "100%" }}
      >
        <div className="flex justify-center content-center w-full h-full">
          <p className="flex">aaaa</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { MainLayout };

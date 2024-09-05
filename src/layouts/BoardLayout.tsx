import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Board } from "../components/Board";

const BoardLayout = () => {
  return (
    <div className="w-screen h-screen bg-[#09183e]">
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex h-full justify-center content-center">
          <Board />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export { BoardLayout };

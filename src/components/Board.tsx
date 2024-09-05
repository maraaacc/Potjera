const Board = () => {
  return (
    <div className="ploča">
      <div className="flex flex-col gap-[10px] w-[80px] items-center justify-center">
        <div
          className="text-[50px] flex justify-center w-[500px] h-[80px] bg-[#14285d]"
          id="tablica1"
        ></div>
        <div
          className="text-[50px] flex justify-center w-[500px] h-[80px] bg-[#14285d]"
          id="tablica2"
        ></div>
        <div
          className="text-[50px] flex justify-center w-[500px] h-[80px] bg-[#14285d]"
          id="tablica3"
        ></div>
        <div
          className="text-[50px] flex justify-center w-[500px] h-[80px] bg-[#14285d]"
          id="tablica4"
        ></div>
        <div
          className="text-[50px] flex justify-center w-[500px] h-[80px] bg-[#14285d]"
          id="tablica5"
        ></div>
        <div
          className="text-[50px] flex justify-center w-[500px] h-[80px] bg-[#14285d]"
          id="tablica6"
        ></div>
        <div
          className="text-[50px] flex items-center justify-center w-[500px] h-[80px] bg-[#14285d]"
          id="tablica7"
        ></div>
      </div>
      {/* <p
        id="pPitanje"
        className="text-[18px] font-['PT_Serif',_serif]  text-[#ffffff]  tracking-[2px] p-6 leading-loose"
      >
        Izaberite jednu od opcija.
      </p>

      <div className="" id="idOpcije">
        <button className="opcija" id="A"></button>
        <button className="opcija" id="B"></button>
        <button className="opcija" id="C"></button>
      </div> */}
    </div>
  );
};

export { Board };

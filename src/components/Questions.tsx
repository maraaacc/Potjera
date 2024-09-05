const Questions = () => {
  return (
    <div className="font-['PT_Serif',_serif] p-6 tracking-wide items-center pt-20">
      <p id="pPitanje"></p>
      <input
        id="odgovor"
        placeholder="Odgovor..."
        className="peer h-full w-full border-b border-sky-600 bg-transparent pt-4 pb-1.5 font-['PT_Serif',_serif] text-md  text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      ></input>
      <p className="text-[22px] p-6 text-[#ffffff]">
        Zarađeno: <b>500</b>€
      </p>
      <p className="text-[20px] p-3 text-[#ffffff]">1:00</p>
      <p id="pStanje"></p>
      <button
        id="bOdgovor"
        className="mt-[12px] w-[120px] h-[40px] pt-[5px] pb-[3px] text-[white] bg-sky-700 font-['PT_Serif',_serif] text-[15px] tracking-[2px] border-[#19075a] rounded-[5px]"
      >
        Odgovori
      </button>
    </div>
  );
};

export { Questions };

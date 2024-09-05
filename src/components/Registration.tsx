import { useState } from "react";

const Registration = () => {
  const [name, setName] = useState<string>("");
  let rgxPattern = /^[a-zA-Z_]{3,22}$/;

  function start(): void {
    if (rgxPattern.test(name)) {
      console.log("hello");
      localStorage.setItem("kIme", name);
    } else {
      alert("Korisničko ime nije ispravno!");
    }
  }
  function enterEvent(event: any) {
    if (event.key === "Enter") {
      start();
    }
  }

  return (
    <div className="pl-20 pr-20 " id="reg">
      <div className="font-['PT_Serif',_serif] p-6">
        <p className="text-[40px] font-['PT_Serif',_serif] [text-shadow:2px_3px_4px_#000000] text-[#ffffff]  tracking-[2px]">
          Pravila za korisničko ime:
        </p>
        <div className="text-[22px] p-3 text-[#ffffff]">
          <ul>
            <li>
              Kvačice <b>nisu</b> dozvoljene.
            </li>
            <li>Mala i velika slova su dozvoljena.</li>
            <li>Donja crta je jedini dozvoljeni alfanumerički znak.</li>
            <li>Minimalno znakova: 3</li>
            <li>Maksimalno znakova: 22</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-[40px] w-[100 px] h-[120 px] box-border">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(event) => enterEvent(event)}
          placeholder="Mara_Jipp"
          className="peer h-full w-full border-b border-sky-600 bg-transparent pt-4 pb-1.5 font-['PT_Serif',_serif] text-md  text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        />

        <button
          onClick={() => start()}
          className="mt-[12px] w-[120px] h-[40px] pt-[5px] pb-[3px] text-[white] bg-sky-700 font-['PT_Serif',_serif] text-[15px] tracking-[2px] border-[#19075a] rounded-[5px]"
        >
          PRIJAVA
        </button>
      </div>
    </div>
  );
};

export { Registration };

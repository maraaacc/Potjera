const Informations = () => {
  function start() {
    console.log("hi");
  }
  function enterEvent(event: any) {
    if (event.key === "Enter") {
      start();
    }
  }
  return (
    <div className="flex">
      <div className="text-[18px] font-['PT_Serif',_serif]  text-[#ffffff]  tracking-[2px] p-6 leading-loose">
        <h3 id="pPozdrav" className="text-[25px]">
          Dobar dan{" "}
        </h3>
        <p>
          Kviz traje <b>1min</b>, vrijeme i kviz kreću klikom na gumb
          <b>"Kreni"</b>, svako točno pitanje nosi
          <b>€500</b>.
        </p>
        <p>
          Na kraju kviza, lovac Vam nudi <b>višu</b> i <b>nižu</b> ponudu.
        </p>
        <p>
          Nakon odgovaranja na pitanje, pauza traje <b>3</b> sekunde.
        </p>
        <p>
          Vaš odgovor mora biti najmanje <b>75%</b> točan.
        </p>
        <p>
          Ukoliko ne znate odgovor, pritisnite tipku <b>'Enter'</b> da
          nastavite.
        </p>
        <p>
          Krećete s <b>€500</b>.
        </p>
        <p>
          Kako bi poslali svoj odgovor na pitanje, pritisnite dugme
          <b>"Odgovori"</b> ili koristite tipku <b>'Enter'</b>.
        </p>
        <center>
          <button
            className="text-[white] bg-[#547a9c] font-['PT_Serif',_serif] text-[18px] tracking-[2px] border-[#243252] mt-[6px] w-[120px]  pt-[6px] pb-[3px] rounded-[3px]"
            onClick={() => start()}
          >
            KRENI
          </button>
        </center>
      </div>
    </div>
  );
};

export { Informations };

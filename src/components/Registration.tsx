const Registration = () => {
  return (
    <div>
      <div className="prijava1">
        <p className="font-size: 40px; font-family: 'PT Serif', serif; text-shadow: 2px 6px 6px #000000; color: #ffffff; letter-spacing: 2px;">
          Pravila za korisničko ime:
        </p>
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
      <div className="prijava2">
        <input id="kIme" placeholder="Mara_Jipp" />
        <button id="gumb">PRIJAVA</button>
      </div>
    </div>
  );
};

export { Registration };

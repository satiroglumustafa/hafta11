
import "./App.css";
import { useState } from "react";

function App() {
  const [degerler, degerleriGuncelle] = useState({});

  function inputDegistir(event){
    const name  = event.target.name
    const value  = event.target.value
    degerleriGuncelle(degerler=> ({...degerler,[name]:value}))
    console.log(degerler)
  }

  return (
    <>
      <div>Veri İnput Değeri: {degerler.ad} {degerler.soyad} {degerler.telefon} {degerler.eposta} </div>
      <input name="ad" value={degerler.ad || ""} onChange={inputDegistir} placeholder="Ad" />
      <input name="soyad" value={degerler.soyad || ""} onChange={inputDegistir} placeholder="Soyad" />
      <input name="telefon" value={degerler.telefon || ""} onChange={inputDegistir} placeholder="Telefon" />
      <input name="eposta" value={degerler.eposta || ""} onChange={inputDegistir} placeholder="Eposta" />
    </>
  );
}

export default App;

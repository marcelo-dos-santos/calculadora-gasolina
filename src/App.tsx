import { useState, FormEvent } from "react";
import "./App.css";
import logoImg from "./assets/logo.png";

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0);
  const [alcoolInput, setAlcoolInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault();
    let result = gasolinaInput / alcoolInput;
    if (result <= 0.7) {
      setInfo({
        title: "Compensa usar álcool!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    } else {
      setInfo({
        title: "Compensa usar gasolina!",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      });
    }
  }

  function formatarMoeda(valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return valorFormatado;
  }

  return (
    <div>
      <main className="container">
        <img
          src={logoImg}
          className="logo"
          alt="Logo da calculadora de gasolina ou alcool"
        />
        <h1 className="title">Qual a melhor opção?</h1>
        <form className="form" onSubmit={calcular}>
          <label htmlFor="alcool">Álcool (preço por litro):</label>
          <input
            type="number"
            id="alcool"
            className="input"
            value={alcoolInput}
            placeholder="4,90"
            min="1"
            step="0.01"
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
            required
          />
          <label htmlFor="gasolina">Gasolina (preço por litro):</label>
          <input
            type="number"
            id="gasolina"
            className="input"
            value={gasolinaInput}
            placeholder="4,90"
            min="1"
            step="0.01"
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
            required
          />
          <input className="button" type="submit" value="Calcular" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>
            <span>Álcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;

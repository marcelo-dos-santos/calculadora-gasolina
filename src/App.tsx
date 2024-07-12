import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  return (
    <div>
      <main className="container">
        <img
          src={logoImg}
          className="logo"
          alt="Logo da calculadora de gasolina ou alcool"
        />
        <h1 className="title">Qual a melhor opção?</h1>
        <form className="form">
          <label htmlFor="alcool">Álcool (preço por litro):</label>
          <input
            type="number"
            id="alcool"
            className="input"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
          />
          <label htmlFor="gasolina">Gasolina (preço por litro):</label>
          <input
            type="number"
            id="gasolina"
            className="input"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
          />
          <input className="button" type="submit" value="Calcular" />
        </form>
      </main>
    </div>
  );
}

export default App;

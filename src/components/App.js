import "../styles/App.scss";
import { useState } from "react";

// Al arrancar la página:

// - traer solución de la API (string)
// - pintar rayitas longitud palabra

// Cuando la usuaria mete 1 letra:

// Verificar si ya existe en array solución/falladas

// Verificar si está dentro de la palabra solución

// - Si lo está >>> que aparezca en la solución tantas veces como se repita

// - Si no lo está >>> que aparezca en los errores (letra y rayita) Y pinte parte del cuerpo del ahorcado Y actualice contador de errores

// RESET: durante todo el juego disponible
// Si se ha pintado todo el ahorcado (num máx de errores), pierdes, reset, nueva palabra api
// Si se ha completado la solución, ganas, reset, nueva palabra api

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);

  const handleButtonClick = () => {
    setNumberOfErrors(numberOfErrors + 1);
  };

  return (
    <div>
      <div className="page">
        <header>
          <h1 className="header__title">Juego del ahorcado</h1>
        </header>
        <main className="main">
          <section>
            <div className="solution">
              <h2 className="title">Solución:</h2>
              <ul className="letters">
                <li className="letter">k</li>
                <li className="letter">a</li>
                <li className="letter"></li>
                <li className="letter">a</li>
                <li className="letter">k</li>
                <li className="letter">r</li>
                <li className="letter"></li>
                <li className="letter">k</li>
                <li className="letter">e</li>
                <li className="letter">r</li>
              </ul>
            </div>
            <div className="error">
              <h2 className="title">Letras falladas:</h2>
              <ul className="letters">
                <li className="letter">f</li>
                <li className="letter">q</li>
                <li className="letter">h</li>
                <li className="letter">p</li>
                <li className="letter">x</li>
              </ul>
            </div>
            <form className="form">
              <label className="title" for="last-letter">
                Escribe una letra:
              </label>
              <input
                autocomplete="off"
                className="form__input"
                maxlength="1"
                type="text"
                name="last-letter"
                id="last-letter"
              />
            </form>
          </section>
          <section className={`dummy error-${numberOfErrors}`}>
            <span className="error-13 eye"></span>
            <span className="error-12 eye"></span>
            <span className="error-11 line"></span>
            <span className="error-10 line"></span>
            <span className="error-9 line"></span>
            <span className="error-8 line"></span>
            <span className="error-7 line"></span>
            <span className="error-6 head"></span>
            <span className="error-5 line"></span>
            <span className="error-4 line"></span>
            <span className="error-3 line"></span>
            <span className="error-2 line"></span>
            <span className="error-1 line"></span>
            <button onClick={handleButtonClick}>Incrementar</button>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

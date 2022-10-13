import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div>
      <h1> Weather Search Engine </h1>
      <Weather />
      <footer>
        <a
          href="https://github.com/GSimic22/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by <a href="https://www.matdelac.io">Gillian Simic</a>
      </footer>
      
    </div>
  );
}

export default App;

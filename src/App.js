import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
      
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Gillian Simic and is{" "}
          <a
            href="https://github.com/GSimic22/weather-react"
            target="_blank"
            rel="noreferrer"
            className="footer"
          >
            {" "}
            open-sourced on Git-Hub.
          </a>
        </footer>
        
      </div>
    </div>
  );
}

export default App;

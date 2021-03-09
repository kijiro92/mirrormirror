import React, {useState} from 'react';
import logo from './WeatherLogo.png';
import './App.css';

function App() {

  const [weather, setWeather] = useState("--º");
  function setTheState (body: string): void {
    setWeather(body);
  }
  function readTheResponse (response: Response): void {
    response.text().then(setTheState).catch();
  }
  let promise = fetch("/weather")
  promise.then(readTheResponse).catch();
  return (
    <div className="App">
      <header className="App-header">
        <div className={"Weather"}>
          <div className={"WeatherLogoContainer"}>
            <img src={logo} className="WeatherLogo" alt="logo" />
          </div>
          <div className={"WeatherText"}>
            {weather+"º"}
          </div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

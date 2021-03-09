import React, {useEffect, useState} from 'react';
import logo from './WeatherLogo.png';
import './App.css';

const App = () => {

    const [weather, setWeather] = useState("--º");
    const [screenIsClear, setScreenIsClear] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 500);
        return () => {
            clearInterval(timer);
        }
    }, []);
    const readTheResponse = (response: Response): void => {
        response.text().then((body: string): void => {
            setWeather(body);
        }).catch();
    }
    const clearScreen = () => {
        console.log("hello");
        setScreenIsClear(true);
    }
    const onScreen = (): void => {
        console.log("Byee");
        setScreenIsClear(false);
    }

    // function name(param) {
    //
    // }
    // is the exact same thing as
    // const name = (param) => {
    //
    // }

    // We gotta learn conditionals
    // true || false
    // false && true
    // false || true
    // true && false

    let promise = fetch("/weather")
    promise.then(readTheResponse).catch();
    return (
        <div className="App">
            <header className="App-header">
                {!screenIsClear && <>
                            <div className={"Weather"}>
                                <div className={"WeatherLogoContainer"}>
                                    <img src={logo} className="WeatherLogo" alt="logo"/>
                                </div>
                                <div className={"WeatherText"}>
                                    {weather + "º"}
                                </div>
                                <div className={"Time"}>
                                    {time.toLocaleString()}
                                </div>
                            </div>
                            <div className="Button">
                                <button onClick={clearScreen}>
                                    Clear screen
                                </button>
                            </div>
                        </>
                }
                {screenIsClear && <div className="Button">
                            <button onClick={onScreen}>
                               On SCreen
                            </button>
                        </div>
                    }
            </header>
        </div>
    );
}

export default App;

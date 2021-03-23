import React, {useEffect, useState} from 'react';
import logo from './WeatherLogo.png';
import './App.css';

const App = () => {

    const [weather, setWeather] = useState("--º");
    const [screenIsClear, setScreenIsClear] = useState(false);
    const [time, setTime] = useState(new Date());
    const [compliment, setCompliment] = useState(false);

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

    const complimentMe = () => {
        setCompliment(true);
        setComplimentToFalseAfter5Seconds();
    }

    const setComplimentToFalseAfter5Seconds = () => {
        setTimeout(() => setCompliment(false), 5000);
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
                    <div>
                        <iframe
                            src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23000000&amp;ctz=America%2FNew_York&amp;src=c3dpbmdyb3ZlQGtyLmFmLm1pbA&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y182azc0ZHJ0ZTRvNDFwdmw4dmoybjNvajBsMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=a3IuYWYubWlsXzhwaGtrbDhsbmFmZmFibWs1c2JlaW1jZ2w0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y19ub2cxcXFwNWI0NnIzNmhudWFxa3Z2bmtpOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;src=a3IuYWYubWlsX2pmdTJmanY4NW1wNjU4N2Nldmg4c2txMWFzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=a3IuYWYubWlsX2dyZjA1dDN2c3U5cGk3dXQybGlpdmRwMTdzQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%23616161&amp;color=%23AD1457&amp;color=%237986CB&amp;color=%23AD1457&amp;color=%237986CB&amp;color=%230B8043&amp;mode=AGENDA&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0"
                            width="800px" height="600px" frameBorder="0" scrolling="no">
                        </iframe>
                    </div>
                    <div className={"Weather"}>
                        <div className={"WeatherLogoContainer"}>
                            <img src={logo} className="WeatherLogo" alt="logo"/>
                        </div>
                        <div className={"WeatherText"}>
                            {weather}º
                        </div>
                        <div className={"ComplimentText"}>
                            {compliment && <>
                                You look great 2day!
                            </>
                            }
                        </div>
                        <div className={"Time"}>
                            {time.toLocaleString()}
                        </div>
                    </div>
                    <div className="Button">
                        <button onClick={complimentMe}>
                            How do I look?
                        </button>
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

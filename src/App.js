import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import lottie from 'lottie-web'
import Rain from './Component/Rain'
import Cloud from './Component/Cloud'
import Clear from './Component/Clear'


const api = {
  key: "f63b1be2bb9f10866daacee5d61de612",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
 
  const [query, setQuery] = useState ('');
  const [weather, setWeather] = useState ({});
  const search = evt => {
    if (evt.key=== "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
       .then(res => res.json())
       .then(result => {
         setWeather(result)
         setQuery('')
         console.log(result)        
        })

    }
  }
  
  const dateBuilder = (d) => {
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Julio", "Junio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }  

  return (
    <div className={
      (typeof weather.main !="undefined") 
      ? ((weather.main.temp > 16) 
        ? 'app warm' 
        : 'app') 
      : 'app'}>
        <main>
          <div className='search-box'>
            <input
            type="text"
            className='search-bar'
            placeholder='Buscar...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
            
          </div>
          {(typeof weather.main !="undefined") ? (
            <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp)} °C
              </div>
              <div className='weather'>
                {/* {weather.weather[0].main} */}
              { weather.weather[0].main === 'Rain' ? <Rain/> : null}
              { weather.weather[0].main === 'Clouds' ? <Cloud/> : null}
              { weather.weather[0].main === 'Clear' ? <Clear/> : null}

                </div>
          </div>
            </div>
        
          ) : ('')}
        </main>
        {/* <Rain/> */}
    </div>
  );
}

export default App;

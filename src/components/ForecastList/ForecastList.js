import React from 'react';

import CurrentDate from '../Date/Date'


const ForecastList = ({ forecastResults, currentWeather}) => {


  /* SUNRISE TIME*/
  let sunrise = forecastResults.city.sunrise
  let dateForSunRise = new Date(sunrise * 1000);
  let sunRiseTime = dateForSunRise.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
  // console.log(sunRiseTime)

  /* SUNSET TIME*/
  let sunset = forecastResults.city.sunset
  let dateForSunset = new Date(sunset * 1000);
  let sunSetTime = dateForSunset.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
  // console.log(sunSetTime)

 
  return (
    <div>
      <div>
        <h1 className="city">{forecastResults.city.name}
          <span className="country"> ({forecastResults.city.country})</span>
        </h1>
        <p>Population : {(forecastResults.city.population).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
        <div>
        <div>
        <CurrentDate />
        </div>
      <p>{((currentWeather.main.temp)- 273.15).toFixed(0)}°C | {currentWeather.weather[0].description} </p>
      </div>
        <div>
          <table>
            <tr>
              <th>{new Date(forecastResults.list[0].dt_txt).getHours()}:00</th>
              <th>{new Date(forecastResults.list[1].dt_txt).getHours()}:00</th>
              <th>{new Date(forecastResults.list[2].dt_txt).getHours()}:00</th>
              <th>{new Date(forecastResults.list[3].dt_txt).getHours()}:00</th>
            </tr>
            <tr>
              <td>{((forecastResults.list[0].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[1].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[2].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[3].main.temp) - 273.15).toFixed(0)}°C</td>
            </tr>
          </table>
        </div>
      </div>
      <div>
      <p> Average minimum temperature is {((currentWeather.main.temp_min)- 273.15).toFixed(0)} °C</p>
        <p> Average maximum temperature is {((currentWeather.main.temp_max)- 273.15).toFixed(0)} °C</p>
        <p> The wind speed is {currentWeather.wind.speed} km per hour</p>
        <p> The humidty is {currentWeather.main.humidity} % </p>
        <p> The sun rises at {sunRiseTime} </p>
        <p> The sun sets at {sunSetTime} </p>
      </div>
    </div>
  )
}

export default ForecastList;
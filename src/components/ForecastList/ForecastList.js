import React from 'react';
import '../ForecastList/ForecastList.css';

import CurrentDate from '../Date/Date';
import MinTemp from '../../imagines/min-temp.png';
import MaxTemp from '../../imagines/max-temp.png';
import SunRise from '../../imagines/sunrise.png';
import SunSet from '../../imagines/sunset.png';
import Humidity from '../../imagines/humidity.png';
import Wind from '../../imagines/wind.png';
import Population from '../../imagines/population.png';

const ForecastList = ({ forecastResults, currentWeather }) => {

  /* SUNRISE TIME*/
  let sunrise = forecastResults.city.sunrise
  let dateForSunRise = new Date(sunrise * 1000);
  let sunRiseTime = dateForSunRise.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

  /* SUNSET TIME*/
  let sunset = forecastResults.city.sunset
  let dateForSunset = new Date(sunset * 1000);
  let sunSetTime = dateForSunset.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="container">
      <div className= "top-info">
        <h1 className="city">{forecastResults.city.name}
          <span className="country"> ({forecastResults.city.country})</span>
        </h1>
        <div>
          <div>
            <CurrentDate />
          </div>
          <p>{((currentWeather.main.temp) - 273.15).toFixed(0)}°C | {(currentWeather.weather[0].description).charAt(0).toUpperCase() + (currentWeather.weather[0].description).slice(1)} </p>
          <img className="img-fluid" src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} />
        </div>
      </div>

      <div className= "hour-forecast-slider">
        <table className ="hourly-table">
          <tr>
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[0].weather[0].icon}.png`} /></td>
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[1].weather[0].icon}.png`} /></td>
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[2].weather[0].icon}.png`} /></td>
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[3].weather[0].icon}.png`} /></td>
          </tr>
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


      <div className="forecast-generalinfo">
      <p> <img src={Population} alt="min" width="20" height="20"></img> {currentWeather.name}'s population is {(forecastResults.city.population).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</p>
        <p> <img src={MinTemp} alt="min" width="20" height="20"></img> Average minimum temperature is {((currentWeather.main.temp_min) - 273.15).toFixed(0)} °C</p>
        <p> <img src={MaxTemp} alt="min" width="20" height="20"></img> Average maximum temperature is {((currentWeather.main.temp_max) - 273.15).toFixed(0)} °C</p>
        <p> <img src={Wind} alt="min" width="20" height="20"></img> The wind speed is {currentWeather.wind.speed} km per hour</p>
        <p> <img src={Humidity} alt="min" width="20" height="20"></img> The humidty is {currentWeather.main.humidity} % </p>
        <p> <img src={SunRise} alt="min" width="20" height="20"></img> The sun rises at {sunRiseTime} </p>
        <p> <img src={SunSet} alt="min" width="20" height="20"></img> The sun sets at {sunSetTime} </p>
      </div>

      <div className="comingdays-forecast">
        <h2> Coming Days</h2>
        <table className="comingdays-table">
          <tr >
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[7].weather[0].icon}.png`} /></td>
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[15].weather[0].icon}.png`} /></td>
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[23].weather[0].icon}.png`} /></td>
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[31].weather[0].icon}.png`} /></td>
            <td><img className="img-fluid" src={`http://openweathermap.org/img/w/${forecastResults.list[39].weather[0].icon}.png`} /></td>
          </tr>
          <tr>
            <th>{(new Date(forecastResults.list[7].dt_txt).getFullYear() + '/') +
              (new Date(forecastResults.list[7].dt_txt).getMonth() + 1 + '/') +
              (new Date(forecastResults.list[7].dt_txt).getDate())}</th>

            <th>{(new Date(forecastResults.list[15].dt_txt).getFullYear() + '/') +
              (new Date(forecastResults.list[15].dt_txt).getMonth() + 1 + '/') +
              (new Date(forecastResults.list[15].dt_txt).getDate())}</th>

            <th>{(new Date(forecastResults.list[23].dt_txt).getFullYear() + '/') +
              (new Date(forecastResults.list[23].dt_txt).getMonth() + 1 + '/') +
              (new Date(forecastResults.list[23].dt_txt).getDate())}</th>

            <th>{(new Date(forecastResults.list[31].dt_txt).getFullYear() + '/') +
              (new Date(forecastResults.list[31].dt_txt).getMonth() + 1 + '/') +
              (new Date(forecastResults.list[31].dt_txt).getDate())}</th>

            <th>{(new Date(forecastResults.list[39].dt_txt).getFullYear() + '/') +
              (new Date(forecastResults.list[39].dt_txt).getMonth() + 1 + '/') +
              (new Date(forecastResults.list[39].dt_txt).getDate())}</th>

          </tr>
          <tr>
            <td>{((forecastResults.list[7].main.temp) - 273.15).toFixed(0)}°C</td>
            <td>{((forecastResults.list[15].main.temp) - 273.15).toFixed(0)}°C</td>
            <td>{((forecastResults.list[23].main.temp) - 273.15).toFixed(0)}°C</td>
            <td>{((forecastResults.list[31].main.temp) - 273.15).toFixed(0)}°C</td>
            <td>{((forecastResults.list[39].main.temp) - 273.15).toFixed(0)}°C</td>
          </tr>
        </table>
      </div>
    </div >
  )
}

export default ForecastList;
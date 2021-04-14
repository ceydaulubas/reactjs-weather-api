import React from 'react';

const ForecastList = ({ forecastResults }) => {

  /*AVERAGE MIN TEMPERATURE */


let minAverageTemp=
  ((forecastResults.list[0].main.temp_min)+
  (forecastResults.list[1].main.temp_min) +
  (forecastResults.list[2].main.temp_min) +
  (forecastResults.list[3].main.temp_min) +
  (forecastResults.list[4].main.temp_min) +
  (forecastResults.list[5].main.temp_min) +
  (forecastResults.list[6].main.temp_min))/7

let minAverageTempCelsius= (minAverageTemp- 273.15).toFixed(0)


    // let sum =0
    // for (let i = 0; i < 7; i++) {
    //  let minTemp = forecastResults.list[i].main.temp_min; 
    //  sum += minTemp[i]
    // }
    // console.log(sum)
    

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
          <table>
            <tr>
              <th>City</th>
              <th>12.00 PM</th>
              <th>3.00 PM</th>
              <th>6.00 PM</th>
              <th>9.00 PM</th>
              <th>12.00 AM</th>
              <th>3.00 AM</th>
              <th>6.00 AM</th>
              <th>9.00 AM</th>
            </tr>
            <tr>
              <td>{forecastResults.city.name}</td>
              <td>{((forecastResults.list[0].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[1].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[2].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[3].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[4].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[5].main.temp) - 273.15).toFixed(0)}°C</td>
              <td>{((forecastResults.list[6].main.temp) - 273.15).toFixed(0)}°C</td>
            </tr>
          </table>
        </div>
      </div>

      <div>
        <p> The minimum temperature is {minAverageTempCelsius} °C</p>
        <p> The maximum temperature is  °C</p>
        <p> The wind speed is  km per hour</p>
        <p> The humidty is </p>
        <p> The sun rises at {sunRiseTime} </p>
        <p> The sun sets at {sunSetTime} </p>
      </div>

    </div>
  )
}

export default ForecastList;
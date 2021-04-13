import React from 'react';
// import Forecast from './Forecast';

/* ForecastList component - that maps through and incoming list */
const ForecastList = ({ forecastResults }) => {
    return (
        <div>
            <h1 className="city">{forecastResults.city.name}
                <span className="country"> ({forecastResults.city.country})</span>
            </h1>
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
    <td>{((forecastResults.list[0].main.temp)-273.15).toFixed(2)}°</td>
    <td>{((forecastResults.list[1].main.temp)-273.15).toFixed(2)}°</td>
    <td>{((forecastResults.list[2].main.temp)-273.15).toFixed(2)}°</td>
    <td>{((forecastResults.list[3].main.temp)-273.15).toFixed(2)}°</td>
    <td>{((forecastResults.list[4].main.temp)-273.15).toFixed(2)}°</td>
    <td>{((forecastResults.list[5].main.temp)-273.15).toFixed(2)}°</td>
    <td>{((forecastResults.list[6].main.temp)-273.15).toFixed(2)}°</td>

  
  </tr>
</table>
        </div>
    )
}

export default ForecastList;
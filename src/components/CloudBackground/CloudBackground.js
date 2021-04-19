import React from 'react'

import ForecastApp from '../ForecastRoot/ForecastApp'
import './CloudBackground.css'
const CloudBackground = () => {
    return (
        <div>
            <div className="cloud">
            <h1 className="navbar-title">WEATHER FORECAST</h1></div>
            <ForecastApp />
            <footer>
Open source code by <a href="https://github.com/ceydaulubas/reactjs-weather-api">Ceyda Ulubas </a>made from <a href="https://openweathermap.org/api ">Openweather API</a>
</footer>
        </div>

    )
}

export default CloudBackground;
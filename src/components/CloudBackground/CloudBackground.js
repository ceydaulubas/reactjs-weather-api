import React from 'react'

import ForecastApp from '../ForecastRoot/ForecastApp'
import './CloudBackground.css'
const CloudBackground = () => {
    return (
        <div>
            <div className="cloud">
            <h1 className="navbar-title">WEATHER FORECAST</h1></div>
            <ForecastApp />
        </div>

    )
}

export default CloudBackground;
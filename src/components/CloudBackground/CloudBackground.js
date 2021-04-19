import React , {useState} from 'react'

import Sound from 'react-sound';
import VivaldiSound from '../../sound/Vivaldi The Four Seasons.mp3'

import {Button} from '@material-ui/core'

import ForecastApp from '../ForecastRoot/ForecastApp'
import './CloudBackground.css'

const CloudBackground = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);
    console.log(Sound.status)
    return (
        <div>
            <div className="cloud">
            <Sound 
            url = {VivaldiSound}
            playStatus ={
                isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            playFromPosition ={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying= {handleSongFinishedPlaying}
            />
            <Button variant="contained" size= "small" className= "sound-button" onClick = { () => setIsPlaying(!isPlaying)} >{!isPlaying ? '🔊' : '🔇'}</Button>
            <h1 className="navbar-title">WEATHER FORECAST</h1></div>
            <ForecastApp />
            <footer>
Open source code by <a href="https://github.com/ceydaulubas/reactjs-weather-api">Ceyda Ulubas </a>made from <a href="https://openweathermap.org/api ">Openweather API</a>
</footer>
        </div>

    )
}

export default CloudBackground;
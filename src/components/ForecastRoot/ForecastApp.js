import React, { useState, useEffect } from 'react';

import axios from 'axios';
import '../ForecastList/ForecastList.css'

import '../ForecastList/ForecastList.css';

import SearchBar from '../Search/SearchBar';
import ForecastList from '../ForecastList/ForecastList';

const ForecastApp = (props) => {
    const [searchBarInput, setSearchBarInput] = useState("");
    const [forecastListResults, setForecastListResults] = useState([]);
    const [currentListWeather, setCurrentListWeather] =useState ([]);

    const handleSearchForForecast = () => {

        const API_KEY = "f13c4a1e0110a21f84487056745a3c76";
        const searchInput = searchBarInput ? searchBarInput : 'amsterdam';

        axios
            .get(`http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=${API_KEY}`)
            .then((forecastResults) => setForecastListResults(forecastResults.data))
            .catch((error) => console.error(`Someting went wrong: ${error} in forecast part`));

        axios
        .get(`http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}`)
        .then((weatherResult)=> setCurrentListWeather(weatherResult.data))
        .catch((error) => console.error(`Someting went wrong: ${error} in current weather part`))
    };

    // useEffect() is used to mimic the behavior of componentDidMount() & componentDidUpdate()
    // useEffects takes two parameters:
    //  1. handleSearchForForecast - A callback function which is the action that should happen when a component either mounts or is updated.
    // 2. [searchBarInput] - The value that is monitored when an update occurs.
    useEffect(handleSearchForForecast, [searchBarInput]);

    // Function handler for updating the 'searchInput' state.
    // This function is passed down as a prop and used in the SearchBar component.
    const handleAddSearchBarInputToAppState = (searchInput) =>
        setSearchBarInput(searchInput);


    return (
        <div>
            <SearchBar addSearchInput={handleAddSearchBarInputToAppState} />
            <div className="container">
                {(forecastListResults.length === 0) || (currentListWeather.length ===0) ? (
                    null
                ) :
                    <ForecastList forecastResults={forecastListResults} 
                    currentWeather={currentListWeather}
                    />}
            </div>
         
        </div>
    )
}

export default ForecastApp;
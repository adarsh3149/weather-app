import React, { useState, useEffect } from 'react';
import './weather.css'
import 'bootstrap/dist/css/bootstrap.min.css';

  

function Weather() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=350f2d245347d6c6c5bddfb817d8e841`
            );
            const data = await result.json();
            setWeatherData(data);
        };
        fetchData();
    }, [city]);

    return (
        <div className="container">
            <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            {weatherData.main && (
                <div className="card">
                    <div className="card-body">
                      <h2 className="card-title">Weather in {weatherData.name}</h2>
                      <p className="card-text">Temperature: {weatherData.main.temp}</p>
                      <p className="card-text">Humidity: {weatherData.main.humidity}</p>
                      <p className="card-text">Weather: {weatherData.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Weather;





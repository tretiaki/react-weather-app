import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].main,
      wind: response.data.wind.speed,
      sunrise: "5:43", //response.data.sys.sunrise,
      sunset: "21:12", //response.data.sys.sunset,
    });
  }

  function search() {
    const apiKey = "d7f80c0687e058642edfcc5becefbc2b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div class="container">
        <div class="weather-app">
          <form onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-7">
                <input
                  type="text"
                  id="search"
                  autocomplete="off"
                  placeholder="Choose a city..."
                  class="form-control"
                  onChange={handleCityChange}
                />
              </div>
              <div class="col-1">
                <input
                  type="submit"
                  value="Search🔎"
                  class="btn buttonSearch"
                />
              </div>
              <div class="col-1">
                <button id="button" class="btn buttonLocation">
                  Location📍
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weather} />
        </div>
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}

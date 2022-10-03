import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

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

  if (weather.ready) {
    return (
      <div class="container">
        <div class="weather-app">
          <form>
            <div class="row">
              <div class="col-7">
                <input
                  type="text"
                  id="search"
                  autocomplete="off"
                  placeholder="Choose a city..."
                  class="form-control"
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
          <div class="row">
            <div class="row maincard">
              <div class="col column">
                <img
                  src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
                  alt="Weather Icon"
                  class="src icon"
                  id="icon"
                />
              </div>
              <div class="col column">
                <div class="card-body">
                  <h1>
                    <span class="city">{weather.city}</span>
                    <br />
                    <span class="currentDegree" id="currentDegree">
                      {weather.temperature}
                    </span>
                    <span class="temperature">°C</span>
                  </h1>
                  <h2>
                    Last updated:
                    <span class="currentDay" id="currentTime">
                      <FormattedDate date={weather.date} />
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            <div class="col column">
              <ul>
                <li>
                  Humidity: <span id="humidity">{weather.humidity}%</span>
                </li>
                <li>
                  Feels like <span id="feelsLike">{weather.feelsLike}°C</span>
                </li>
                <li>
                  <span id="weatherdescription">{weather.description}</span>
                </li>
              </ul>
            </div>
            <div class="col column">
              <ul>
                <li>
                  Wind: <span id="wind">{weather.wind} km/h</span>
                </li>
                <li>
                  Sunrise: <span id="sunrise">{weather.sunrise}</span>
                </li>
                <li>
                  Sunset: <span id="sunset">{weather.sunset}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row" id="forecast">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title weather-forecast-day">Tuesday</h5>
                <img
                  src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg"
                  alt="Partly Cloudy"
                  class="src emojis"
                />
                <p class="card-text">
                  <span class="temperature-min">13°</span>
                  <span class="temperature-max">24°</span>
                </p>
              </div>
            </div>
          </div>
          <p>
            <a href="https://github.com/tretiaki/react-weather-app">
              Open-source code
            </a>
            by Iryna Tretiak👩‍💻
            <br />
            Here you find
            <a href="https://bas.dev/work/meteocons">Animated Weather Icons</a>I
            used📝
          </p>
        </div>
      </div>
    );
  } else {
    const apiKey = "d7f80c0687e058642edfcc5becefbc2b";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return <h1>Loading...</h1>;
}

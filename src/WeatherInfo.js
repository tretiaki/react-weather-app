import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div class="WeatherInfo">
      <div class="row">
        <div class="row maincard">
          <div class="col column">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <div class="col column">
            <div class="card-body">
              <h1>
                <span class="city">{props.data.city}</span>
                <br />
                <span class="currentDegree" id="currentDegree">
                  {props.data.temperature}
                </span>
                <span class="temperature">°C</span>
              </h1>
              <h2>
                Last updated:
                <span class="currentDay" id="currentTime">
                  <FormattedDate date={props.data.date} />
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div class="col column">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}%</span>
            </li>
            <li>
              Feels like <span id="feelsLike">{props.data.feelsLike}°C</span>
            </li>
            <li>
              <span id="weatherdescription">{props.data.description}</span>
            </li>
          </ul>
        </div>
        <div class="col column">
          <ul>
            <li>
              Wind: <span id="wind">{props.data.wind} km/h</span>
            </li>
            <li>
              Sunrise: <span id="sunrise">{props.data.sunrise}</span>
            </li>
            <li>
              Sunset: <span id="sunset">{props.data.sunset}</span>
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
  );
}

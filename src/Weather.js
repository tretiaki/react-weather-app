import React from "react";
///import axios from "axios";
import "./Weather.css";

export default function Weather() {
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
              <input type="submit" value="Search🔎" class="btn buttonSearch" />
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
                  <span class="city">Kyiv</span>
                  <br />
                  <span class="currentDegree" id="currentDegree">
                    19
                  </span>
                  <span class="temperature">°C</span>
                </h1>

                <h2>
                  Last updated:
                  <span class="currentDay" id="currentTime">
                    Monday 15:38
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div class="col column">
            <ul>
              <li>
                Humidity:<span id="humidity"></span>
              </li>
              <li>
                Feels like <span id="feelsLike"></span>
              </li>
              <li>
                <span id="weatherdescription"></span>
              </li>
            </ul>
          </div>
          <div class="col column">
            <ul>
              <li>
                Wind:<span id="wind"></span>
              </li>
              <li>
                Sunrise:<span id="sunrise"></span>
              </li>
              <li>
                Sunset:<span id="sunset"></span>
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
          <a href="https://github.com/tretiaki/first-challenge-weatherApp">
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
}

///let apiKey = "d7f80c0687e058642edfcc5becefbc2b";
///let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
/// axios.get(apiUrl).then(handleResponse);

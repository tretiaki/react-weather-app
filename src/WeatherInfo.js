import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
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
              <span id="sunrise">
                <Sunrise sunrise={props.data.sunrise} />
              </span>
            </li>
            <li>
              <span id="sunset">
                <Sunset sunset={props.data.sunset} />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

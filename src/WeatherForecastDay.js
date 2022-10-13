import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }
  return (
    <div class="WeatherForecastday">
      <h5 class="card-title weather-forecast-day">{day()}</h5>
      <WeatherIcon code={props.data.weather[0].icon} alt="" />
      <p class="card-text">
        <span class="temperature-min">
          {minTemperature()} {""}
        </span>
        <span class="temperature-max">{maxTemperature()}</span>
      </p>
    </div>
  );
}

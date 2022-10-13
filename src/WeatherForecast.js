import React from "react";
import axios from "axios";
import { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Weather.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div class="WeatherForecast">
        <div class="row" id="forecast">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div class="card">
                  <div class="card-body" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "d7f80c0687e058642edfcc5becefbc2b";
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}

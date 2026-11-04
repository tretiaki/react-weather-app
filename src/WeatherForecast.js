
import React, { useState, useEffect } from "react";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";
import "./Weather.css";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const latitude = props.coordinates.lat;
  const longitude = props.coordinates.lon;

  useEffect(() => {
    let active = true;

    setForecast([]);
    setError("");

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then((response) => {
        if (!active) return;

        const timezone = response.data.city.timezone;
        const groups = {};

        response.data.list.forEach((item) => {
          const localTime = new Date(
            (item.dt + timezone) * 1000
          );

          const dateKey = localTime
            .toISOString()
            .slice(0, 10);

          if (!groups[dateKey]) {
            groups[dateKey] = [];
          }

          groups[dateKey].push(item);
        });

        const dailyForecast = Object.values(groups)
          .slice(0, 5)
          .map((items) => {
            const temperaturesMin = items.map(
              (item) => item.main.temp_min
            );

            const temperaturesMax = items.map(
              (item) => item.main.temp_max
            );

            const representative = items.reduce(
              (closest, item) => {
                const hour = new Date(
                  (item.dt + timezone) * 1000
                ).getUTCHours();

                const closestHour = new Date(
                  (closest.dt + timezone) * 1000
                ).getUTCHours();

                return Math.abs(hour - 12) <
                  Math.abs(closestHour - 12)
                  ? item
                  : closest;
              },
              items[0]
            );

            return {
              dt: items[0].dt,
              timezone,
              temp: {
                min: Math.min(...temperaturesMin),
                max: Math.max(...temperaturesMax),
              },
              weather: representative.weather,
            };
          });

        setForecast(dailyForecast);
      })
      .catch((error) => {
        if (!active) return;

        console.error("Forecast API error:", error);
        setError("Could not load the forecast.");
      });

    return () => {
      active = false;
    };
  }, [latitude, longitude]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="WeatherForecast">
      <div className="row" id="forecast">
        {forecast.map((dailyForecast, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <WeatherForecastDay data={dailyForecast} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

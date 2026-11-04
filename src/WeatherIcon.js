import React from "react";

export default function WeatherIcon(props) {
  const iconUrl = `${process.env.PUBLIC_URL}/image/${props.code}.svg`;

  return (
    <img
      src={iconUrl}
      alt={props.alt || "Weather icon"}
      className="weather-icon"
    />
  );
}
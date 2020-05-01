import React from "react";
import style from "./style.module.css";

const Weather = ({
  degreesUnit,
  pressure,
  humidity,
  convertTemp,
  city,
  toggleUnits,
  temperature,
}) => {
  return (
    <div className={style.weather_container}>
      <div className={style.location}>{city.toUpperCase()}</div>
      <div className={style.temperature}>
        {temperature} {degreesUnit === "Kelvin" ? "K" : "C"}
        <button onClick={() => convertTemp()}>
          Convert to {toggleUnits(degreesUnit)}
        </button>
      </div>
      <div>{pressure} hpa</div>
      <div>{humidity} %</div>
    </div>
  );
};

export default Weather;

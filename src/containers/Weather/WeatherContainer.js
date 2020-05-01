import React, { useState, useEffect } from "react";
import Weather from "../../components/Weather/Weather";
import {
  convertTemperature,
  toggleUnits,
} from "../../utils/convertTemperatureAndUnit";

const WeatherContainer = ({ props }) => {
  const { pressure, humidity, temp } = props.main;
  const [degreesUnit, setDegreesUnit] = useState("Kelvin");
  const [temperature, setTemperature] = useState(null);

  const convertTemp = () => {
    setTemperature(convertTemperature(temperature, toggleUnits(degreesUnit)));
    setDegreesUnit((degreesUnit) => toggleUnits(degreesUnit));
  };

  useEffect(() => {
    if (degreesUnit === "Kelvin") {
      setTemperature(temp);
    } else {
      setTemperature(convertTemperature(temp, "Celsius"));
    }
  }, [temp]);

  return (
    <Weather
      degreesUnit={degreesUnit}
      pressure={pressure}
      humidity={humidity}
      temperature={temperature}
      city={props.city}
      convertTemp={convertTemp}
      toggleUnits={toggleUnits}
    />
  );
};

export default WeatherContainer;

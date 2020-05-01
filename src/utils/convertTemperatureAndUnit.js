export const convertTemperature = (degrees, unit) => {
  if (unit === "Kelvin") {
    return Math.round((degrees + 273.15) * 100) / 100;
  }
  return Math.round((degrees - 273.15) * 100) / 100;
};

export const toggleUnits = (degreesUnit) => {
  if (degreesUnit === "Kelvin") {
    return "Celsius";
  }
  return "Kelvin";
};

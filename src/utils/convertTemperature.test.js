import { convertTemperature, toggleUnits } from "./convertTemperatureAndUnit";

describe("convertTemperature ", () => {
  test("correctly converts from Kelvin to Celsius", () => {
    expect(convertTemperature(285.54, "Celsius")).toBe(12.39);
  });

  test("correctly converts from Celsius to Kelvin", () => {
    expect(convertTemperature(6.81, "Kelvin")).toBe(279.96);
  });
});

describe("toggleUnits", () => {
  test("toggle the unit label from Kelvin to Celsius", () => {
    expect(toggleUnits("Kelvin")).toBe("Celsius");
  });
});

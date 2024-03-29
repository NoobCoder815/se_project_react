import { checkServerResponse } from "./api";
// Warner Robins
const latitude = "32.629189";
const longitude = "-83.612930";
// Guatemala
// const latitude = "14.641980";
// const longitude = "-90.513237";
// New York
// const latitude = "40.7128";
// const longitude = "-74.0060";
// Miami
// const latitude = "25.7617";
// const longitude = "-80.1918";
const APIKey = "1b6fc5afa73ea7210195e57b01839cac";

export const getForecastWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
  ).then(checkServerResponse);
};

export const parseWeatherTemp = (data) => {
  const temp = data.main.temp;
  const temperature = {
    F: `${Math.round(temp)}`,
    C: `${Math.round(((temp - 32) * 5) / 9)}`,
  };
  return temperature;
};

export const parseWeatherData = (data) => {
  const weather = data.weather[0].main;
  return weather;
};

const latitude = "32.629189";
const longitude = "-83.612930";
// const latitude = "25.7617";
// const longitude = "-80.1918";
const APIKey = "1b6fc5afa73ea7210195e57b01839cac";

export const getForecastWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIKey}`
  ).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

export const parseWeatherTemp = (data) => {
  const temperature = data.main.temp;
  return Math.ceil(temperature);
};

export const parseWeatherData = (data) => {
  const weather = data.weather[0].main;
  return weather;
};
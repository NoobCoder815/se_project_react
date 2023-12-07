if (nightTime) {
  if (weather === "Clear") {
    type = "clear";
  } else if (weather === "Clouds") {
    type = "cloudy";
  } else if (weather === "Rain" || "Drizzle") {
    type = "rain";
  } else if (weather === "Snow") {
    type = "snow";
  } else if (weather === "Thunderstorm") {
    type = "storm";
  } else {
    type = "fog";
  }
  // } else {
  //   if (weather === "Thunderstorm") {
  //     // setWeather(stormDay);
  //   } else if (weather === "Clear") {
  //     setWeather(clearDay);
  //   } else if (weather === "Rain" || weather === "Drizzle") {
  //     // setWeather(rainDay);
  //   } else if (weather === "Snow") {
  //     // setWeather(snowDay);
  //   } else if (weather === "Clouds") {
  //     // setWeather(cloudDay);
  //   } else {
  //     // setWeather(fogDay);
  //   }
}

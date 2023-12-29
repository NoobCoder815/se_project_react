import clearDay from "../images/day/day.png";
import cloudyDay from "../images/day/cloudy.png";
import fogDay from "../images/day/fog.png";
import rainDay from "../images/day/rain.png";
import snowDay from "../images/day/snow.png";
import stormDay from "../images/day/storm.png";
import clearNight from "../images/night/night.png";
import cloudyNight from "../images/night/cloudy.png";
import fogNight from "../images/night/fog.png";
import rainNight from "../images/night/rain.png";
import snowNight from "../images/night/snow.png";
import stormNight from "../images/night/storm.png";

export const weatherOptions = [
  { url: clearDay, day: true, type: "clear" },
  { url: cloudyDay, day: true, type: "clouds" },
  { url: rainDay, day: true, type: "drizzle" },
  { url: fogDay, day: true, type: "fog" },
  { url: rainDay, day: true, type: "rain" },
  { url: snowDay, day: true, type: "snow" },
  { url: stormDay, day: true, type: "thunderstorm" },
  { url: clearNight, day: false, type: "clear" },
  { url: cloudyNight, day: false, type: "clouds" },
  { url: rainNight, day: false, type: "drizzle" },
  { url: fogNight, day: false, type: "fog" },
  { url: rainNight, day: false, type: "rain" },
  { url: snowNight, day: false, type: "snow" },
  { url: stormNight, day: false, type: "thunderstorm" },
];

export const currentDate = new Date().toLocaleDateString("default", {
  month: "long",
  day: "numeric",
});

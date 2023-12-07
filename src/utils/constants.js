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

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const currentDate = new Date().toLocaleDateString("default", {
  month: "long",
  day: "numeric",
});

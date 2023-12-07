import "../blocks/WeatherCard.css";
const WeatherCard = ({ weatherTemp, type, weatherImg }) => {
  return (
    <section className="weather">
      <div className="weather__info ">{weatherTemp}&#xb0;F</div>
      <img
        className="weather__image"
        alt="Weather Condition"
        src={weatherImg}
      />
    </section>
  );
};

export default WeatherCard;

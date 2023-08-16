import React from "react";

import './App.css';

function App() {
    let weatherData = {
    city: "Mombasa",
    country: "Kenya",
    temperature: 19,
    feelsLike: 16,
    date: "Thursday 14:00",
    description: "Mostly cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 64,
    wind: 7,
  };

  return (
    <div className="row">
      <div className="col-4 section-one">
        <div className="form">
          <form className="search-bar" id="search-form">
            <input
              type="search"
              placeholder="Enter a city"
              id="search"
              autofocus="on"
              autocomplete="off"
            />
            <input type="submit" value="Search" class="search-btn" />
            <button
              type="button"
              className="current-weather-btn"
              id="current-weather-btn"
            >
              Current
            </button>
          </form>
        </div>
        <div className="current-day">Today</div>
        <div className="temp">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="icon"
            id="icon"
          />
          <span className="temp-value-main" id="temp-main">
            {weatherData.temperature}
          </span>
          <small className="degrees" id="degree-fahrenheit">
            <a href="/" id="celsius" className="active celsius">
              &deg;C
            </a>
            <span className="slash">|</span>
            <a href="/" className="fahrenheit" id="fahrenheit">
              &deg; F
            </a>
          </small>
        </div>
        <div className="weather-info">
          <div>
            <small>
              Feels like:
              <span id="feels-like">{weatherData.feelsLike}</span>
              <span>&deg;C</span>
              <br />
              Humidity:
              <span id="humidity-value">{weatherData.humidity}</span>
              <span>%</span>
              <br />
              Wind:
              <span id="wind-value">{weatherData.wind}</span>
              <span>m/s</span>
            </small>
          </div>
        </div>
        <div className="wrapper">
          <div className="city-name" id="city-name">
            {weatherData.city}
          </div>
          <div className="weather-info-specific" id="weather-info-specific">
            <div className="country" id="country">
              {weatherData.country}
            </div>
            Today the weather condition is{" "}
            <strong>
              <span id="description"></span>
            </strong>{" "}
            with an atmospheric pressure of{" "}
            <strong>
              <span id="pressure"></span>hPa
            </strong>{" "}
            with the windspeed at{" "}
            <strong>
              <span id="wind-speed"></span>m/s
            </strong>{" "}
            in the{" "}
            <strong>
              <span id="wind-direction"></span>&deg;
            </strong>{" "}
            wind direction.
          </div>
        </div>
      </div>
      <div className="col-8 section-two">
        <div className="heading">
          <span className="heading-one">National</span>
          <br />
          <h1 className="heading-two">Weather</h1>
        </div>
        <div className="weather-data">
          <ul>
            <li className="city-name-mini" id="city-name-mini">
              {weatherData.city}
            </li>
            <li className="date-time" id="date">
              {weatherData.date}
            </li>
            <li className="weather-status" id="weather-description">
              {weatherData.description}
            </li>
          </ul>
        </div>
        <div className="details-link">
          <a
            href="https://www.weathercrave.com/weather-forecast-kenya/city-779/weather-forecast-mombasa-today"
            target="_blank"
            rel="noreferrer"
          >
            <button class="see-more">See Details</button>
          </a>
          <br />
          <small className="details">
            👆Forecast, with current conditions, wind, air quality, and what to
            expect for the next 3 days.
          </small>
          <br />
        </div>
        <div className="weather-forecast" id="weather-forecast"></div>
      </div>
      <small className="link">
        <a
          href="https://github.com/Multive018/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Sharon Mbeneka
      </small>
    </div>
  );
}

export default App;

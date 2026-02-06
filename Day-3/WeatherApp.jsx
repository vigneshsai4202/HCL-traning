import React, { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);
      setIcon("");

      // 🌍 Get coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        setError("City not found.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // 🌤 Get weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const temp = weatherData.current_weather.temperature;

      setWeather({ name, country, temp });

      // 🎨 Icon logic
      if (temp > 30) {
        setIcon("https://cdn-icons-png.flaticon.com/512/869/869869.png");
      } else if (temp > 20) {
        setIcon("https://cdn-icons-png.flaticon.com/512/1163/1163624.png");
      } else {
        setIcon("https://cdn-icons-png.flaticon.com/512/414/414825.png");
      }

      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Error fetching weather.");
      setLoading(false);
    }
  };

  return (
    <div className="weather-wrapper">
      <div className="container">
        <h2>🌤 Weather App</h2>

        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Get Weather</button>

        <div className="result">
          {loading && <p>Fetching weather...</p>}
          {error && <p>{error}</p>}

          {weather && (
            <>
              <p>📍 {weather.name}, {weather.country}</p>
              <p>🌡 Temperature: <b>{weather.temp}°C</b></p>
              <img src={icon} alt="weather icon" className="weather-icon" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

document.getElementById("getWeatherBtn").addEventListener("click", function () {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");
    const icon = document.getElementById("icon");

    if (!city) {
        result.innerText = "Please enter a city name.";
        return;
    }

    result.innerText = "Fetching weather...";
    icon.src = "";

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
        .then(response => response.json())
        .then(geoData => {
            if (!geoData.results || geoData.results.length === 0) {
                result.innerText = "City not found.";
                return;
            }

            const { latitude, longitude, name, country } = geoData.results[0];

            return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
                .then(response => response.json())
                .then(weatherData => {
                    const temp = weatherData.current_weather.temperature;

                    result.innerHTML = `
                        📍 ${name}, ${country} <br>
                        🌡 Temperature: <b>${temp}°C</b>
                    `;

                    // Simple icon logic
                    if (temp > 30) {
                        icon.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // sun
                    } else if (temp > 20) {
                        icon.src = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"; // cloud sun
                    } else {
                        icon.src = "https://cdn-icons-png.flaticon.com/512/414/414825.png"; // cloud
                    }
                });
        })
        .catch(error => {
            console.error(error);
            result.innerText = "Error fetching weather.";
        });
});

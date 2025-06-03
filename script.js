function getISOWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function updateWeekNumber() {
  const now = new Date();
  const weekElement = document.getElementById('week');
  weekElement.textContent = `Week: ${getISOWeekNumber(now)}`;
}

function updateTimeAndDate() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeElement.textContent = `${hours}:${minutes}`;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}

function updateWeather() {
  const weatherElement = document.getElementById('weather-info');
  if (!navigator.geolocation) {
    weatherElement.textContent = 'Geolocation is not supported by your browser.';
    return;
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Using Open-Meteo API
    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    fetch(weatherURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.current_weather) {
          const temp = data.current_weather.temperature;
          const weatherCode = data.current_weather.weathercode;
          // You might want a function to convert weatherCode to a human-readable string
          weatherElement.textContent = `Temp: ${temp}°C`; // Simplified display
        } else {
          weatherElement.textContent = 'Could not retrieve weather data.';
        }
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        weatherElement.textContent = 'Could not retrieve weather data.';
      });
  }

  function error() {
    weatherElement.textContent = 'Unable to retrieve your location for weather.';
  }

  weatherElement.textContent = 'Fetching weather...';
  navigator.geolocation.getCurrentPosition(success, error);
}

// Initialize everything
updateTimeAndDate();
updateWeekNumber();
updateWeather(); // Call initially

setInterval(updateTimeAndDate, 1000);
setInterval(updateWeekNumber, 1000 * 60 * 60); // Update week number hourly
setInterval(updateWeather, 1000 * 60 * 30); // Update weather every 30 minutes

console.log("Elegant New Tab script loaded. All functions are active.");

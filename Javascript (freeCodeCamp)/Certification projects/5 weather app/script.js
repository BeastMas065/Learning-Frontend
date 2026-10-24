const citySelect = document.getElementById("city-select");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherDisplay = document.getElementById("weather-display");

const locationEl = document.getElementById("location");
const mainTempEl = document.getElementById("main-temperature");
const weatherIconEl = document.getElementById("weather-icon");
const weatherMainEl = document.getElementById("weather-main");
const humidityEl = document.getElementById("humidity");
const feelsLikeEl = document.getElementById("feels-like");
const windEl = document.getElementById("wind");
const windGustEl = document.getElementById("wind-gust");
const windArrowEl = document.getElementById("wind-arrow");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function format(value, prefix = "", suffix = "") {
  if (value === undefined || value === null) {
    return "N/A";
  }
  return `${prefix}${value}${suffix}`;
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  const condition = data.weather?.[0];

  locationEl.textContent = format(data.name);
  mainTempEl.textContent = format(data.main?.temp, "", "° C");
  weatherMainEl.textContent = format(condition?.main);
  humidityEl.textContent = format(data.main?.humidity, "Humidity: ", "%");
  feelsLikeEl.textContent = format(data.main?.feels_like, "Feels Like: ", "° C");
  windEl.textContent = format(data.wind?.speed, "Wind: ", " m/s");
  windGustEl.textContent = format(data.wind?.gust, "Gusts: ", " m/s");

  if (condition?.icon) {
    weatherIconEl.src = condition.icon;
    weatherIconEl.alt = condition.description || "Weather icon";
    weatherIconEl.style.display = "";
  } else {
    weatherIconEl.removeAttribute("src");
    weatherIconEl.style.display = "none";
  }

  const deg = data.wind?.deg ?? 0;
  windArrowEl.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;

  weatherDisplay.classList.add("visible");
}

getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;
  if (!city) return; // nothing selected, do nothing
  showWeather(city);
});
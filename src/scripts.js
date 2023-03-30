function dateInfo() {
  let now = new Date();

  let dayTime = document.querySelector(".day");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();

  let minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

  dayTime.innerHTML = `${day} ${hour}:${minutes}`;
}

dateInfo();
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  let temp = Math.round(response.data.main.temp);
  let weather = response.data.weather[0].main;
  let humid = response.data.main.humidity;
  let wind = Math.round(response.data.wind.speed);

  let tempElement = document.querySelector("#currentTemp");
  tempElement.innerHTML = temp;
  let weatherElement = document.querySelector("#weather");
  weatherElement.innerHTML = weather;

  let humidElement = document.querySelector("#humid");
  humidElement.innerHTML = `Humidity: ${humid}%`;

  let windElement = document.querySelector("#windSpeed");
  windElement.innerHTML = `Wind is ${wind} km/h`;
}
let form = document.querySelector(".search-form");
form.addEventListener("submit", searchCity);

function showLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "5201594abea9f3e38b70e65b11a80c24";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showLocation);
}

let currentButton = document.querySelector("#currentButton");
currentButton.addEventListener("click", currentLocation);

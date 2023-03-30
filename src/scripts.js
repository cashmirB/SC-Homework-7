function displayTemperature(response) {
  let tempElement = document.querySelector("#currentTemp");
  tempElement.innerHTML = Math.round(response.data.temperature.current);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  console.log(response.data);
}

let apiKey = "77c45f57f94o3fb60fb856c88ed36ata";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

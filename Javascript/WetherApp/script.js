async function GetWeather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getGeoLoc(city);
  console.log(lat, lon);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4dddc03b69f6b53e5764d6536f8b6b06`
  );

  const data = await response.json();

  document.getElementById("WeatherData").innerHTML = `
           <div>
            <p>Temperature : ${(data.main.temp - 273.14).toFixed(2)}ºC</p>
            <p>Humidity : ${data.main.humidity}%</p>
            <p>Description : ${data.weather[0].description}</p>
          </div>

                <img  src="https://openweathermap.org/img/wn/${
                  data.weather[0].icon
                }@4x.png" alt="weathericon" />`;
}

async function getGeoLoc(City) {
  console.log(City);
  const response = await fetch(
    ` http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=5&appid=4dddc03b69f6b53e5764d6536f8b6b06`
  );

  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon };
}

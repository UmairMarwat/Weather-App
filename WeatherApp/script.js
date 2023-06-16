let city;
async function fetchData() {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6602ec1d9cmsh083b3a5f537b718p1512b4jsn84000607db3e",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);

  console.log(response);
  const result = await response.json().then((response) => {
    document.getElementById("feels_like").innerHTML = response.feels_like;
    document.getElementById("cloud_pct").innerHTML = response.cloud_pct;
    document.getElementById("humidity").innerHTML = response.humidity;
    document.getElementById("humidity2").innerHTML = response.humidity2;
    document.getElementById("max_temp").innerHTML = response.max_temp;
    document.getElementById("min_temp").innerHTML = response.min_temp;
    document.getElementById("sunrise").innerHTML = response.sunrise;
    document.getElementById("sunset").innerHTML = response.sunset;
    document.getElementById("temp").innerHTML = response.temp;
    document.getElementById("temp2").innerHTML = response.temp2;
    document.getElementById("wind_degrees").innerHTML = response.wind_degrees;
    document.getElementById("wind_speed").innerHTML = response.wind_speed;
    document.getElementById("wind_speed2").innerHTML = response.wind_speed;
  });
}

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  city = document.querySelector("#city").value;
  document.getElementById("cityName").innerHTML = city;
  fetchData();
});
// const getWeather = (city) => {
//   document.getElementById("cityName").innerHTML = city;
//   submit.addEventListener("click", (e) => {
//     e.preventdefult();
//     getWeather(city.value);
//   });
//   getWeather();
//   console.log(getWeather("peshawar"));
// };

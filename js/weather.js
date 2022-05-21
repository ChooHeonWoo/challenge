const weather = document.querySelector(".weather");
fetch(
  "https://api.openweathermap.org/geo/1.0/direct?q=seoul&limit=5&appid=864586f80858a8b0152f93e59da3ac81"
)
  .then((res) => res.json())
  .then((res) => {
    const lon = res[0].lon;
    const lat = res[0].lat;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=864586f80858a8b0152f93e59da3ac81`
    )
      .then((res) => res.json())
      .then((res) => {
        const main = res.weather[0].main;
        const temp = Math.round((res.main.temp - 273.15) * 10) / 10;
        weather.innerText = `${main} / ${temp}°C`;
      });
  });

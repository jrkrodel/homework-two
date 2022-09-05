const key = "1deae9b5388e4706b35202240222908";
const baseURL = "https://api.weatherapi.com/v1/";

function getCurrentDate() {
  return new Date().toISOString().split("T")[0];
}

function getCurrentWeather(location, days) {
  $.get(
    `${baseURL}forecast.json?key=${key}&q=${location}&days=${
      !days ? 3 : days
    }&aqi=no&alerts=no
    `,
    () => {
      $(".icon").append("<p>Loading...</p>");
    }
  )
    .done((data) => {
      console.log(data);
      $(".location").html("<h1 class='info-header'>Location:</h1>");
      $(".current").html("<h1 class='info-header'>Current Weather:</h1>");
      $(".forecast").html("<h1 class='info-header'>Forecast:</h1>");
      $(".icon").html(
        `<p>Current Weather: ${data.current.temp_f}&#176;F - ${data.current.condition.text}</p><img src="${data.current.condition.icon}">`
      );
      $(".location").append(`<p class="info">Name: ${data.location.name}</p>
    <p class="info">Region: ${data.location.region}</p>
    <p class="info">Country: ${data.location.country}</p>
    <p class="info">Latitude: ${data.location.lat}</p>
    <p class="info">Longitude: ${data.location.lon}</p>
    <p class="info">Time Zone: ${data.location.tz_id}</p>
    <p class="info">Local Time: ${data.location.localtime}</p>`);

      $(".current")
        .append(`<p class="info">Updated: ${data.current.last_updated}</p>
    <p class="info">Temp. C: ${data.current.temp_c}&#176;C</p>
    <p class="info">Temp. F: ${data.current.temp_f}&#176;F</p>
    <p class="info">Wind MPH: ${data.current.wind_mph}</p>
    <p class="info">Wind KPH: ${data.current.wind_kph}</p>
    <p class="info">Degree of Wind: ${data.current.wind_degree}</p>
    <p class="info">Wind Direction: ${data.current.wind_dir}</p>
    <p class="info">Pressure MB: ${data.current.pressure_mb}</p>
    <p class="info">Pressure IN: ${data.current.pressure_in}</p>
    <p class="info">Precipitation MM: ${data.current.precip_mm}</p>
    <p class="info">Precipitation IN: ${data.current.precip_in}</p>
    <p class="info">Humidity: ${data.current.humidity}%</p> <p class="info">Cloud: ${data.current.cloud}%</p>
    <p class="info">Feels Like: ${data.current.feelslike_c}&#176;C</p>
    <p class="info">Feels Like: ${data.current.feelslike_f}&#176;F</p>
    <p class="info">Wind Direction: ${data.current.wind_dir}</p>
    <p class="info">Visibility KM: ${data.current.vis_km}</p>
    <p class="info">Visibility Miles: ${data.current.vis_miles}</p>
    <p class="info">UV Index: ${data.current.uv}</p>
    <p class="info">Gust MPH: ${data.current.gust_mph}</p>
    <p class="info">Gust KPH: ${data.current.gust_kph}</p>`);

      for (let i = 0; i < data.forecast.forecastday.length; i++) {
        const date = data.forecast.forecastday[i].date;
        const description = data.forecast.forecastday[i].day.condition.text;
        const temp = data.forecast.forecastday[i].day.avgtemp_f;
        const minTemp = data.forecast.forecastday[i].day.mintemp_f;
        const maxTemp = data.forecast.forecastday[i].day.maxtemp_f;
        const icon = data.forecast.forecastday[i].day.condition.icon;
        $(".forecast").append(
          `<p class="info">${date}:</p>
          <img src=${icon} />
           <p class="info">Avg. Temp: ${temp}&#176;F</p>
           <p class="info">Max. Temp: ${maxTemp}&#176;F</p>
           <p class="info">Min. Temp: ${minTemp}&#176;F</p>
          <p class="info">Conditions: ${description}</p>
          <div class="line"></div>`
        );
      }
    })
    .fail((e) => {
      console.log(e);
      alert(e.responseJSON.error.message);
    });
}

export { getCurrentWeather };

// for (const value in data.location) {
//   $(".location").append(
//     `<p class="info">${value}: ${data.location[value]}</p>`
//   );
// }
// for (const value in data.current) {
//   if (value !== "condition") {
//     $(".current").append(
//       `<p class="info">${value}: ${data.current[value]}</p>`
//     );
//   }
// }

//This is for getting and looping through the local data.json
//   $.getJSON("data/data.json", (data) => {
//     for (let i = 0; i < data.length; i++) {
//       const element = data[i];
//       console.log(element.name);
//       $("#app").append(`<p>${element.name}</p>`);
//     }
//   }).fail((e) => {
//     alert("Sorry, your data can not be loaded at this time.");
//   });

//This for for retrieving an api

import * as MODEL from "./model.js";

function initListeners() {
  $("#gw").click((e) => {
    const location = $("#gwInput").val();
    const days = $("#numOfDays").val();
    if (location !== "") {
      if (days > 14) {
        alert("Max number of days is 14");
      } else {
        getWeather(location, days);
      }
    } else if (location === "") {
      alert("Please enter a location");
    }
  });
}

function getWeather(location, days) {
  MODEL.getCurrentWeather(location, days);
  $("#gwInput").val("");
  $("#numOfDays").val("");
}

$(document).ready(function () {
  initListeners();
});

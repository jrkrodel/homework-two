import * as MODEL from "./model.js";

function initListeners() {
  $("#gw").click((e) => {
    const location = $("#gwInput").val();
    const days = $("#numOfDays").val();
    if (location !== "" && days !== "") {
      if (days > 14) {
        alert("Max number of days is 14");
      } else if (days <= 0) {
        alert("Number of days must be greater than 0");
      } else {
        getWeather(location, days);
      }
    } else if (location === "") {
      alert("Please enter a location");
    } else {
      alert("Please enter a number of days");
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

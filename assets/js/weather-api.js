$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Limerick,IE&units=metric&appid=253ef60d5eabe6c9178c95bf3a787705", function(data) {

console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = Math.floor(data.main.temp);
var feels_like = Math.floor(data.main.feels_like);
var mainweather = data.weather[0].main;
var descriptionweather = data.weather[0].description;
var windspeed = data.wind.speed;
var humidity = Math.floor(data.main.humidity);

$('.icon').attr('src', icon);
$(".temp").append(temp  + ' °C');
$(".feels_like").append("Feels like: " + feels_like  + ' °C');
$(".weather").append(mainweather + "; " + descriptionweather);
$(".wind").append("Wind: " + windspeed  + " m/s");
$(".humidity").append("Humidity: " + humidity  + " %");
});

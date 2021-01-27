$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Limerick&units=metric&appid=253ef60d5eabe6c9178c95bf3a787705", function(data) {

console.log(data);

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = Math.floor(data.main.temp);

var weather = data.weather[0].main;

var sunrise = 

$('.icon').attr('src', icon);
$(".temp").append(temp  + ' &#8451;');

$(".weather").append(weather );
});
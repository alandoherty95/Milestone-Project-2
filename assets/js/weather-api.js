$(document).ready(function() {
    $(".wrapper").css("margin-top", ($(window).height())/5);
  //DATE AND TIME//
  //Converted into days, months, hours, day-name, AM/PM
  var dt = new Date()
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  $('#day').html(days[dt.getDay()]);
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  $('#date').html(months[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear());
  $('#time').html((dt.getHours()>12?(dt.getHours()-12):dt.getHours()).toString() + ":" + ((dt.getMinutes() < 10 ? '0' : '').toString() + dt.getMinutes().toString()) + (dt.getHours() < 12 ? ' AM' : ' PM').toString());

  //CELSIUS TO FAHRENHEIT CONVERTER on Click
  var temp = 0;
  $('#fahrenheit').click(function(){
    $(this).css("color","white");
    $('#celsius').css("color","#b0bec5");
    $('#temperature').html(Math.round(temp * 1.8 + 32));
  });
  
  $('#celsius').click(function(){
    $(this).css("color","white");
    $('#fahrenheit').css("color","#b0bec5");
    $('#temperature').html(Math.round(temp));
  });
  
  //GEOLOCATION and WEATHER API//
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var myLatitude = parseFloat(Math.round(position.coords.latitude * 100) / 100).toFixed(2);
      var myLongitude = parseFloat(Math.round(position.coords.longitude * 100) / 100).toFixed(2);
      //var utcTime = Math.round(new Date().getTime()/1000.0);

      // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
      //$('.geo').html(position.coords.latitude + " " + position.coords.longitude);
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + myLatitude + "&lon=" + myLongitude + "&id=524901&appid=253ef60d5eabe6c9178c95bf3a787705", function(json) {
        $('#city').html(json.name + ", " + json.sys.country);
        $('#weather-status').html(json.weather[0].main + " / " + json.weather[0].description);
        
        //WEATHER CONDITIONS FOUND HERE: http://openweathermap.org/weather-conditions
        switch (json.weather[0].main) {
          case "Clear":
            $('.weather-icon').attr("src","./assets/images/clear.png");
            break;
          case "Clouds":
            $('.weather-icon').attr("src","./assets/images/clouds.png");
            break;
          case "Thunderstorm":
             $('.weather-icon').attr("src","./assets/images/thunderstorm.png");
            break;
          case "Mist":
             $('.weather-icon').attr("src","./assets/images/mist.png");
            break;
          case "Rain":
             $('.weather-icon').attr("src","./assets/images/rain.png");
            break;
          case "Snow":
             $('.weather-icon').attr("src","./assets/images/snow.png");
            break;
        }
        temp = (json.main.temp -273);
        $('#temperature').html(Math.round(temp));
        $('.windspeed').html(json.wind.speed + " Km/h")
        $('.humidity').html(json.main.humidity + " %");
        $('.pressure').html(json.main.pressure + " hPa");
        var sunriseUTC = json.sys.sunrise * 1000;
        var sunsetUTC = json.sys.sunset * 1000;
        var sunriseDt = new Date(sunriseUTC);
        var sunsetDt = new Date (sunsetUTC);
        $('.sunrise-time').html((sunriseDt.getHours()>12?(sunriseDt.getHours()-12):sunriseDt.getHours()).toString() + ":" + ((sunriseDt.getMinutes() < 10 ? '0' : '').toString() + sunriseDt.getMinutes().toString()) + (sunriseDt.getHours() < 12 ? ' AM' : ' PM').toString());
        $('.sunset-time').html((sunsetDt.getHours()>12?(sunsetDt.getHours()-12):sunsetDt.getHours()).toString() + ":" + ((sunsetDt.getMinutes() < 10 ? '0' : '').toString() + sunsetDt.getMinutes().toString()) + (sunsetDt.getHours() < 12 ? ' AM' : ' PM').toString());
        // $('.sunrise-time').html(json.sys.sunrise);
        // $('.sunset-time').html(json.sys.sunset);
      });

    });
  } else {
    $("#city").html("Please turn on Geolocator on Browser.")
  }
});
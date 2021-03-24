// Open Weather API
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Limerick,IE&units=metric&appid=253ef60d5eabe6c9178c95bf3a787705", function (data) {
    // Weather Icon
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // Temperature with Toggle for Celsius & Fahrenheit
    const temp = data.main.temp;
    
    $('#celsius').click(function () {
        $(this).css("color", "#ffffff");
        $('#fahrenheit').css("color", "#505050");
        $('#temperature').html(Math.round(temp));
    });

    $('#fahrenheit').click(function () {
        $(this).css("color", "#ffffff");
        $('#celsius').css("color", "#505050");
        $('#temperature').html(Math.round(temp * 1.8 + 32));
    });

    const feels_like = Math.floor(data.main.feels_like);
    const main_weather = data.weather[0].main;
    const description_weather = data.weather[0].description;
    const wind_speed = data.wind.speed;
    const humidity = Math.floor(data.main.humidity);

    $('.icon').attr('src', icon);
    $('#temperature').html(Math.round(temp));
    $(".weather").append(`${main_weather}; ${description_weather}`);
    $(".wind").append(`${wind_speed}m/s wind speed`);
    $(".humidity").append(`${humidity}% humidity`);
    $(".feels_like").append(`Feels like ${feels_like}°C`);
});
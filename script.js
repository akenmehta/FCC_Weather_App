$(document).ready(function() {
  var lat;
  var long;
  var url1 = "http://freegeoip.net/json/";

  $.getJSON(url1, function(data) {
    lat = data.latitude;
    long = data.longitude;
    $("#city").text(data.city);
    $("#country").text(data.country_name);

    var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&appid=2c5d20e8e335a090eb84fab43fec69bb';

    $.getJSON(url, function(data) {
      // variable for weather icon
      var icon = data.weather[0].icon;
      var iconURL = 'http://openweathermap.org/img/w/'+icon+'.png'
      //Convert temp to fahrenheit    
      var tempCelcius = Math.floor(data.main.temp);
      // console.log(Math.floor(tempCelcius));
      var tempFar = Math.floor((tempCelcius * 1.8) + 32);
      // display initail weather      
      $("#temp").text(tempCelcius);
      $("#unit").text(" C");
    
      // display weather in F
      $("#far").click(function() {
        $("#temp").text(tempFar);
        $("#unit").text(" F");
      });
      // display weather in C    
      $("#cel").click(function() {
        $("#temp").text(tempCelcius);
        $("#unit").text(" C");
      });
      
      $("img").attr("src", iconURL);
    });
  });
});
console.log("connected");
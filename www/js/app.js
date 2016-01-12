// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'angular-skycons'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("weatherController", function($http) {

  this.temp = "--";
  var weather = this;

  navigator.geolocation.getCurrentPosition(function(geopos) {
    var lat = geopos.coords.latitude;
    var long = geopos.coords.longitude;
    var apikey = "cb0400a52a7a4983a587e37ed148cf4a";
    var url = "/api/forecast/" + apikey + "/" + lat + "," + long;

    $http.get(url).then(function(res) {
      
      var background = document.getElementsByClassName("pane");
      
      weather.temp = Math.round(res.data.currently.temperature);
      weather.icon = res.data.currently.icon;

      switch (weather.icon) {
        case "clear-day":
          weather.color = "yellow";
          background[0].style.backgroundImage="url(http://www.hdwallpapers.in/walls/sunny_day-wide.jpg)";
          break;
        case "clear-night":
          weather.color = "lightskyblue";
          background[0].style.backgroundImage="url(http://s19.postimg.org/4m9yp49fn/weather_bg_sunny_night_sky.jpg)";
          break;
        case "rain":
          weather.color = "lightskyblue";
          background[0].style.backgroundImage="url(http://cdn.allwallpaper.in/wallpapers/1920x1080/4324/night-rain-skies-water-weather-1920x1080-wallpaper.jpg)";
          break;
        case "snow":
          weather.color = "#cccccc";
          background[0].style.backgroundImage="url(http://stuffpoint.com/the-winter/image/40739-the-winter-winter.jpg)";
          break;
        case "sleet":
          weather.color = "white";
          background[0].style.backgroundImage="url(https://i.ytimg.com/vi/7vZMj9GNJBA/maxresdefault.jpg)";
          break;
        case "wind":
          weather.color = "#cccccc";
          background[0].style.backgroundImage="url(http://s3.amazonaws.com/engrade-myfiles/4045267454554742/windmilloncloudyday.jpg)";
          break;
        case "fog":
          weather.color = "white";
          background[0].style.backgroundImage="url(http://www.techbucket.org/wp-content/uploads/2009/04/6.jpg?1db863)";
          break;
        case "cloudy":
          weather.color = "cornflowerblue";
          background[0].style.backgroundImage="url(https://wallpapersfun.files.wordpress.com/2011/08/cloudy_sky.jpg)";
          break;
        case "partly-cloudy-day":
          weather.color = "#a3e0f8";
          background[0].style.backgroundImage="url(http://onceuponatimeblog.weebly.com/uploads/5/8/3/1/5831762/474426177_orig.jpg?248)";
          break;
        case "partly-cloudy-night":
          weather.color = "white";
          background[0].style.backgroundImage="url(http://orig04.deviantart.net/170c/f/2012/225/d/e/cloudy_sky_by_muggi93-d5ay7im.jpg)";
          break;
        default:
          weather.color = "#000"
      }
  
      console.log(weather.icon);
    })
  });

  /*  this.img = "http://icons.iconarchive.com/icons/large-icons/large-weather/512/partly-cloudy-day-icon.png";*/
});

/*.config(function($stateProvider, $urlRouterProvider) {*/

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
/*  $stateProvider*/

  // setup an abstract state for the tabs directive
/*  .state('root', {
    url: '/',
    template: '<h1>HAPPY TIMES</h1>'
  });
*/
  // if none of the above states are matched, use this as the fallback
/*  $urlRouterProvider.otherwise('/');

});*/
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
      console.log(res);
      weather.temp = Math.round(res.data.currently.temperature);
      weather.icon = res.data.currently.icon;

      switch (weather.icon) {
        case "clear-day":
          weather.color = "#6dcff6";
          break;
        case "clear-night":
          weather.color = "#003471";
          break;
        case "rain":
          weather.color = "#00aeef";
          break;
        case "snow":
          weather.color = "#cccccc";
          break;
        case "sleet":
          weather.color = "#a1a1a1";
          break;
        case "wind":
          weather.color = "#cccccc";
          break;
        case "fog":
          weather.color = "#a1a1a1";
          break;
        case "cloudy":
          weather.color = "#c8dee6";
          break;
        case "partly-cloudy-day":
          weather.color = "#a3e0f8";
          break;
        case "partly-cloudy-night":
          weather.color = "#448ccb";
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
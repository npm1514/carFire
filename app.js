angular.module("carFire",['ui.router']).config(function ($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/homeTemp.html',
      controller: 'homeCtrl'
    })
    .state("cars", {
      url: "/cars",
      templateUrl: "cars/carsTemp.html",
      controller: 'carsCtrl'
    })
    .state("car", {
      url: "/cars/:carId",
      templateUrl: "car/carTemp.html",
      controller: 'carCtrl'
    });

  $urlRouterProvider
    .otherwise('/');
});

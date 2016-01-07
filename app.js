var app = angular.module("carFire", ['firebase','ui.router']);

app.constant('firebaseRoot', 'https://carfiremarucci.firebaseio.com');

app.config(function($urlRouterProvider, $stateProvider){
  $stateProvider
    .state('cars', {
      url: '/',
      templateUrl: 'cars/carsTemp.html'
    }).state('car', {
      url: '/cars/:carId',
      templateUrl: 'car/carTemp.html'
    });
  $urlRouterProvider.otherwise('/');
});

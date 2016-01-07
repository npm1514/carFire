app.controller("mainCtrl", function($scope, $firebaseObject, $firebaseArray, $firebaseAuth, firebaseRoot) {
  var carsRef = new Firebase(firebaseRoot + '/cars');
  var cars = $firebaseArray(carsRef);
  $scope.cars = cars;
  $scope.addCar = function(car) {
    $scope.cars.$add(car);
  };
  $scope.getCar = function(carId) {
    $scope.carId = cars.car;
  };
});

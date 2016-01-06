angular.module("carFire").controller("mainCtrl", function($scope) {
  $scope.cars = [{year:"2012",
                  make: "Chevy",
                  model: "Volt",
                  mileage: "25,000",
                  price: "$15,000",
                  },
                  {year:"2008",
                  make: "Toyota",
                  model: "Tundra",
                  mileage: "125,000",
                  price: "$12,000"
                  },
                  {year:"2000",
                  make: "Pontiac",
                  model: "G6",
                  mileage: "225,000",
                  price: "$4,000"
                  }];
});

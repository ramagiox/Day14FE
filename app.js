// angular.module("app",[])
// .controller("appcontroller",function($scope){
//     $scope.Day14= {};
//     $scope.Day14.ucapan = "selamat datang di angularjs Fullan";
// });

//deklarasi var myapp sebagai angular module dan routing
let myapp = angular.module("app",['ngRoute']);
//config myapp untuk routing
myapp.config(function($routeProvider){
    $routeProvider
    .when('/pelanggan',{
        controller:"pelangganController",
        templateUrl:"views/pelanggan/pelanggan.html"
    })
    .when('/pelanggan/:id',{
        controller:"pelangganController",
        templateUrl:"views/pelanggan/pelangganbyid.html"
    })
    .when('/petugas',{
        controller:"petugasController",
        templateUrl:"views/petugas/petugas.html"
    })
    // .when('/petugas/:id',{
    //     controller:"petugasController",
    //     templateUrl:"views/petugas/petugasbyid.html"
    // })
    .otherwise({
        redirectTo:"/"
    });
});

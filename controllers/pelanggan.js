//deklarasi apppelanggan sebagai angular module dari app
let apppelanggan = angular.module("app");
//pelanggan controller dengan nama pelanggan controller dengan callback scope,http,location,routeParams
apppelanggan.controller("pelangganController", ["$scope", "$http", "$location", "$routeParams", function ($scope, $http, $location, $routeParams) {
    console.log("berjalan");
    $scope.getPelanggan = function(){
        $http.get("http://localhost:8889/api/pelanggan").then(function(data){
            $scope.pelanggan={};
            $scope.pelanggan=data.data;
        });
    }
 
    $scope.getPelangganById = function(){
        //untuk menampung parameter id yang dihasilkan
        let id = $routeParams.id;
        $http.get("http://localhost:8889/api/pelanggan/"+id).then(function(data){
            $scope.pelanggan={};
            $scope.pelanggan=data.data;
        });
    }
}]);

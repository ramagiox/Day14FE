//deklarasi apppetugas sebagai angular module dari app
let apppetugas = angular.module("app");
//petugas controller dengan nama petugas controller dengan callback scope,http,location,routeParams
apppetugas.controller("petugasController", ["$scope", "$http", "$location", "$routeParams", function ($scope, $http, $location, $routeParams) {
    console.log("berjalan");
    $scope.getPetugas = function(){
        $http.get("http://localhost:8889/api/petugas").then(function(data){
            $scope.petugas={};
            $scope.petugas=data.data;
        });
    }
 
    $scope.getPetugasById = function(){
        //untuk menampung parameter id yang dihasilkan
        let id = $routeParams.id;
        $http.get("http://localhost:8889/api/petugas/"+id).then(function(data){
            $scope.petugas={};
            $scope.petugas=data.data;
        });
    }
}]);

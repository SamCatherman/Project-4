"use strict";

(function(){
  angular
  .module("spot",[
    "ui.router",
    "ngResource",
  ])
  .config([
    "$stateProvider",
    Router
  ])

  .controller("IndexController",[
    "$scope",
    "SongFactory",
    "$state",
    "$stateParams",
    IndexController
  ])
  .factory("SongFactory", [
    "$resource",
    SongFactoryFunction
  ])


  function IndexController($scope, SongFactory, $state, $stateParams, $resource){
    var vm = this
    vm.bean = "beanie piles"
    vm.searchTerm = ""
    vm.search = function(){
      //fetch the API data from express
    vm.song = SongFactory.get();
      console.log(this);
    }
  }

  function SongFactoryFunction($resource){
    console.log("yo");
    return $resource("/", {}, {
      update: {method: "PUT"}
    })
  }


  function Router($stateProvider){
    $stateProvider
    .state("index",{
      url: '/',
      controller:'IndexController',
      controllerAs:'vm',
      templateUrl: '/assets/js/ng-views/index.html'
    })
  }
})();

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
  .factory("RandomSong", [
    "$resource",
    RandomSongFactory
  ])
  .controller("IndexController",[
    "$scope",
    //check here
    "RandomSong",
    "$state",
    "$http",
    "$stateParams",
    IndexController
  ])
  .controller("ShowController", [
    "$state",
    //check here
    "RandomSong",
    ShowController
  ])


  function RandomSongFactory($resource){
    return $resource("/api/randomsongs/:name", {}, {
      update: {method: "PUT"}
    })
  }

  function IndexController($scope, RandomSong, $state, $stateParams, $resource){
    var vm = this
    vm.songs = RandomSong.query()
    // vm.bean = "beanie piles"
    // vm.searchTerm = ""
    vm.getRandSong = function(){
    //   //fetch the API data from express
    vm.randomsong = RandomSong.get();
      console.log("when you click here, a random spotify song should appear");
    }
  }

  function ShowController($state, $stateParams, RandomSong){
    this.randomSong = RandomSong.get({name: $stateParams.name})
  }



  function Router($stateProvider){
    $stateProvider
    .state("index",{
      url: '/',
      controller:'IndexController',
      controllerAs:'vm',
      templateUrl: '/assets/js/ng-views/index.html'
    })
    .state("show", {
      url: "/randomsongs/:name",
      controller:'ShowController',
      controllerAs:'vm',
      templateUrl:'/assets/js/ng-views/show.html'
    })
  }
})();

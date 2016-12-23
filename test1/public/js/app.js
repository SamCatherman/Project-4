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
    "RandomSongFactory",
    "$state",
    "$stateParams",
    IndexController
  ])
  .controller("ShowController", [
    "$state",
    "$stateParams",
    "RandomSong",
    ShowController
  ])
  .factory("RandomSongFactory", [
    "$resource",
    RandomSongFactory
  ])


  function IndexController($scope, RandomSongFactory, $state, $stateParams, $resource){
    var vm = this
    // vm.songs = RandomSong.query()
    // vm.bean = "beanie piles"
    // vm.searchTerm = ""
    vm.getRandSong = function(){
    //   //fetch the API data from express
    vm.song = RandomSongFactory.get();
      console.log("when you click here, a random spotify song should appear");
    }
  }

  function ShowController($state, $stateParams, RandomSong){
    this.randomSong = RandomSong.get({name: $stateParams.name})
  }

  function RandomSongFactory($resource){
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
    .state("show", {
      url: "/songs/:name",
      controller:'ShowController',
      controllerAs:'vm',
      templateUrl:'/assets/js/ng-views/show.html'
    })
  }
})();

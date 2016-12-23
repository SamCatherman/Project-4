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
  // .controller("ShowController", [
  //   "$state",
  //   //check here
  //   "RandomSong",
  //   ShowController
  // ])


  function RandomSongFactory($resource){
    return $resource("/api/randomsongs/:name", {}, {
      update: {method: "PUT"}
    })
  }

  function IndexController($scope, RandomSong, $state, $stateParams, $resource){
    var vm = this
    vm.randomsongs = RandomSong.query()

    vm.getRandSong = function(){
    //   //fetch the API data from express
      console.log("when you click here, a random spotify song should appear");
    }
    console.log("i'm the index controller");
    console.log(vm.randomsongs);
  }

  // function ShowController($state, $stateParams, RandomSong){
  //   // this.randomSong = RandomSong.get({name: $stateParams.name})
  //   console.log("I'm the show controller");
  // }


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

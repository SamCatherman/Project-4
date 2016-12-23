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
  .factory("PickSong", [
    "$resource",
    PickSongFactory
  ])
  .controller("IndexController",[
    //check here
    "RandomSong",
    "$state",
    IndexController
  ])
  .controller("ShowController", [
    "$state",
    "$stateParams",
    //check here
    "RandomSong",
    ShowController
  ])
  .controller("RandomSongController", [
    "$state",
    "$stateParams",
    "RandomSong",
    "PickSong",
    RandomSongController
  ])


  function RandomSongFactory($resource){
    return $resource("/api/randomsongs/:name", {}, {
      update: {method: "PUT"}
    })
  }

  function PickSongFactory($resource){
    return $resource('/api/randomsong', {}, {
      update: {method: "PUT"}
    })
  }

  function IndexController(RandomSong, $state){
    var vm = this
    RandomSong.query().$promise.then( (res) => {
      console.log(res);
      vm.randomsongs = res;
    })
    vm.getRandSong = function(){
      $state.go("randomsong")
    }
    console.log("i'm the index controller");
  }

  function ShowController($state, $stateParams, RandomSong){
    var vm = this
    vm.randomsong = RandomSong.get({name: $stateParams.name})
    console.log(vm.randomsong);
    console.log("i'm the show controller");
  }

  function RandomSongController($state, $stateParams, RandomSong, PickSong){
    var vm = this
    vm.picksong = PickSong.get().$promise.then( (res) => {
      console.log(res);
      vm.picksong = res;
    })
    // console.log(randomsongs[randomIndex]);
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
    .state("randomsong", {
      url: "/randomsong",
      controller: 'RandomSongController',
      controllerAs: 'vm',
      templateUrl: '/assets/js/ng-views/randomsong.html'
    })
  }
})();

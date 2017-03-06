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
    "RandomSong",
    "$state",
    IndexController
  ])

  .controller("RandomSongController", [
    "$state",
    "$stateParams",
    "RandomSong",
    "PickSong",
    RandomSongController
  ])

//random song factory
  function RandomSongFactory($resource){
    return $resource("/api/randomsongs/:name", {}, {
      update: {method: "PUT"}
    })
  }

//PickSong Factory
  function PickSongFactory($resource){
    return $resource('/api/randomsong', {}, {
      update: {method: "PUT"}
    })
  }

//index controller function - main view to list all random songs
  function IndexController(RandomSong, $state){
    var vm = this
    RandomSong.query().$promise.then( (res) => {
      console.log(res);
      vm.randomsongs = res;
    })
    vm.getRandSong = function(){
      $state.go("randomsong")
    }
    vm.newRandomSong = new RandomSong()
    vm.create = function(){
      vm.newRandomSong.$save().then(function(randomsong){
        $state.go("index")
        console.log("saved");
      })
    }
  }

//randomSong controller function - displays a random song
  function RandomSongController($state, $stateParams, RandomSong, PickSong){
    var vm = this
    vm.picksong = PickSong.get().$promise.then( (res) => {
    vm.picksong = res;
    })
    vm.update = function(){
      console.log($stateParams.name);
      vm.picksong.$update({name: $stateParams.name})
    }
    vm.destroy = function(){
      this.picksong.$delete({name: $stateParams.name}).then(function(){
        console.log("deleted");
        $state.go("index")
      })
    }
  }

  //router - index, show, and random song page
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

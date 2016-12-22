"use strict";

(function(){
  angular
  .module("spot",[
    "ui.router",
    "ngResource",
    // "spotify"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  // .factory ("SpotifyFactory", [
  //   "$resource",
  //   SpotifyFactoryFunction
  // ])
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

  function IndexController(){
    var vm = this
    vm.bean = "beanie piles"
    vm.searchTerm = ""
    vm.search = function(){
      //fetch the API data from express

      console.log(this);
    }
  }

  function SongFactoryFunction($resource){
    console.log("songFactory");
    return $resource("http://localhost:4000/api/songs/", {}, {
      update: {method: "PUT"}
    })
  }

  //not sure where this comes into play.
  // function SpotifyFactoryFunction($resource){
  //   return $resource("https://api.spotify.com/v1/search?type=track&limit=10", {}, {
  //     'query': {method:'GET', isArray:false}
  //   })
  // }
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

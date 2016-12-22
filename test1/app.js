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
    IndexController
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
      templateUrl: 'ng-views/index.html'
    })
  }

})();

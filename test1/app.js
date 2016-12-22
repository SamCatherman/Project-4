"use strict";

(function(){
  angular
  .module("spot",[
    "ui.router",
    "ngResource",
    // "spotify"
  ])
  // .factory ("SpotifyFactory", [
  //   "$resource",
  //   SpotifyFactoryFunction
  // ])
  .config([
    "$stateProvider",
    Router
  ])
  .controller("IndexController",[
    IndexController
  ])

  function IndexController(){
    var vm = this
    vm.bean = "beanie pie"
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

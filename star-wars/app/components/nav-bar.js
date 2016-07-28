(function(){
    'use strict'
    
    var navBar = {
        templateUrl : 'app/components/nav-bar.html'
    }
    
    angular
        .module('starwars')
        .component('navBar',navBar);
})();
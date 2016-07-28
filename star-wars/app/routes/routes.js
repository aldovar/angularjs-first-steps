(function(){
    'use strict'
    angular
        .module('starwars')
        .config(config)
    
    config.$inject = ['$routeProvider']
    
    function config($routeProvider){
        $routeProvider
            .when('/',{
                template:`<character id='4' category="'people'"></character>`
            })
            .when('/planet',{
                template:`<planet id='1' category="'planets'"></planet>`
            })
            .otherwise({
                redirectTo:'/'
            })
    }
    
})();
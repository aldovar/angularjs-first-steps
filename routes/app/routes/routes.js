(function(){
    'use strict'
    
    angular
        .module('routes')
        .config(config)
    
    function config($routeProvider){
        $routeProvider
            .when('/',{
                template:'<card></card>'
        })
        .when('/parallax',{
            templateUrl:'app/components/parallax/index.html'
        })
        .otherwise({
            redirectTo:'/'
        });
    }
})();
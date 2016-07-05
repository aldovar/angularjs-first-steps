(function(){
    'use strict'
    
    angular
        .module('routes')
        .config(config)
    
    function config($routeProvider){
        $routeProvider
            .when('/',{
                template:'<h1>Hi</h1>'
        })
        .when('/text',{
            template:'<b>Just text</b>'
        })
        .otherwise({
            redirectTo:'/'
        });
    }
})();
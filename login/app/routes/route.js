(function(){
    'use strict'
    
    angular
        .module('login')
        .config(config)
    
    function config($routeProvider){
        $routeProvider
            .when('/register',{
                template:'<add></add>'
        })
        .when('/list',{
            template:'<list></list>'
        })
        .when('/login',{
            template:'<log></log>'
        })
        .otherwise({
            redirectTo:'/'
        });
    }
})();
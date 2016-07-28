(function(){
    'use strict'
    
    angular
        .module('login')
        .factory('Auth',authService);
    
    function authService($firebaseAuth){
        //practicabatch10 . testing-db-a1a14
        //var link = new Firebase('https://auth.firebase.com/v2/testing-db-a1a14/auth/google/callback');
        var link = new Firebase('https://testing-db-a1a14.firebaseio.com');
        
        return $firebaseAuth(link);
    }
})();
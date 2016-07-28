(function(){
    'use strict'
    
    var log = {
        templateUrl : "app/component/login_component/login.html",
        controller : loginCtrl,
    }
    
    function loginCtrl($location){
        var log = this;

        log.login = function (){
            var email = log.email;
            var password = log.password;

            console.log('email:',email);
            console.log('password:',password);
            
            firebase.auth().signInWithEmailAndPassword(email,password)
             .then(function(){
                
                $location.path('/list');
            }).catch(function(error) {
                console.log(error.code);
                console.log(error.message);
            }); 
        }
    }
    
    angular
        .module('login')
        .component('log',log);
})();
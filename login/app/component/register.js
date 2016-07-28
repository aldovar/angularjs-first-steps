(function(){
    'use strict'
    
    var register = {
        templateUrl : "app/component/register.html",
        controller : ctrlRegister,
    }
    
    function ctrlRegister($location){
        var reg = this;
        
        reg.register = function () {
            var email = reg.email;
            var password = reg.password;

            console.log('email:',email);
            console.log('password:',password);

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(function(error) {
                console.log(error.code);
                console.log(error.message);
            });  
        }
    }
    
    angular
        .module('login')
        .component('register',register);
})();
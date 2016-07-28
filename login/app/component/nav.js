(function(){

    var navbar = {
        templateUrl : "app/component/nav.html",
        controller : navCtrl
    }
    
    function navCtrl(Auth,$location){
        var nav = this;
        nav.userLogin = Auth.$getAuth();
        console.log('Nav',nav.userLogin);
        
        nav.logout = function (){
            Auth.$unauth();
            $location.path('/');
            
        }
    }
    
    angular
        .module('login')
        .component('navBar',navbar);
})();
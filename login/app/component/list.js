(function(){
    'use strict'
    
    var list = {
        templateUrl : "app/component/list.html",
        controller : listCtrl
    }
    
    function listCtrl($firebaseArray){
        var list = this;
        
        //var ref = new Firebase('https://practicabatch10.firebaseio.com/data');
        
        var ref = firebase.database().ref("users");
    
        //list.data = $firebaseArray(ref);

        ref.on('value', function(snapshot) {
             list.data = snapshot.val();
         });
        
        console.log('Data:',list.data);
        
        $('.collapsible').collapsible({
            accordion : false 
        });
    }
    
    angular
        .module('login')
        .component('list',list);
})();
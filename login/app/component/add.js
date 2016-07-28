(function(){
    'use strict'
    
    var add = {
        templateUrl :'app/component/add.html',
        controller : addCtrl,
    }
    
    function addCtrl($firebaseArray){
        var addThis = this;
        //testing-db-a1a14 - practicabatch10
        var ref = new Firebase('https://practicabatch10.firebaseio.com/data');
        
        addThis.data = $firebaseArray(ref);
        
        addThis.add = add;
        
        function add(){
            addThis.data.$add({
                'name' : add.name,
                'email' : add.email,
                'message' : add.text
                
            });
             add.name = "";
             add.email = "";
             add.text = "";
        }    
    }
    
    angular
        .module('login')
        .component('add',add)
    
    
})();
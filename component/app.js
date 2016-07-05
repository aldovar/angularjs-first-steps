(function(){
    'use strict'
    
    var esemero={
        controller:componentCtrl,
        templateUrl:'card.html',
    }
    
    angular
        .module('component',[])
        .component('eseMero',esemero);
    
        function componentCtrl(){
            var componentThis=this;
            
            componentThis.name='Aldou';
            componentThis.other='Other';
        }
    
    
    
})();
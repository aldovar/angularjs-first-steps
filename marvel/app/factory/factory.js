(function(){
    'use strict'
    
    function marvelData($resource){
        
        var apiKey = '28ea05e390bd37d9696ed26816167bed';
        var hash = 'df2f130f722fa3c610eebe7c348842e6';
        var ts = 1;
        var url = 'http://gateway.marvel.com/v1/public/'
        
        return $resource(url+'characters?ts='+ts+'&apikey='+apiKey+'&hash='+hash)
    }
    
    angular
        .module('marvel')
        .factory('marvelData',marvelData);
})();
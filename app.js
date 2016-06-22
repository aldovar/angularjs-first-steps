//Encapsula las variables globales para que no se puedan acceder desde el navegador.
//IFE
(function (){
    'use strict'

    angular
        .module('first-steps',[])
        .controller('firstCtrl',firstCtrl);

        function firstCtrl(){
            var firstVar=this;

            firstVar.name = 'ALdo';
            firstVar.age = 29;
            firstVar.number = 3;
            firstVar.text = 'Hi morro!';
        }
})();

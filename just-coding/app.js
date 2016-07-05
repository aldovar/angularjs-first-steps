(function(){
    'use strict'
    
    angular
        .module('just-coding',[])
        .controller('codingCtrl',codingCtrl);
    
    function codingCtrl(){
        var codingThis=this;
        
        codingThis.result='';
        
        codingThis.myFun=function validate(){ 
        
            var frase=codingThis.label;
            
            console.log('Frase:'+frase);
        
            var palindromo='';
            for (var i = frase.length; i>0; i--) {  
                palindromo=palindromo+frase.charAt(i-1);
            }

            if(frase===palindromo){

                codingThis.result= 'Is palindrome :)';
                
            }else{
                 codingThis.result= 'Is NOT palindrome :(';
            }
            return codingThis.result;
        }

        codingThis.test='Bye...'
        
        console.log('Result:'+codingThis.result);
        
    }
    
    
    
    
})();

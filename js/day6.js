/**
 * Scope
 */

 var myVariable=3;
 function myFunction(){
     console.log(myVariable);
     var myFunctionScopeVariable= 64;
 }


 myFunction();
 console.log(myFunctionScopeVariable);

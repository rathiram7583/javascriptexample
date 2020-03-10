/**
 * Scope
 */

 var myVariable=3;
 function myFunction()
 {
     console.log(myVariable);
     var myFunctionScopeVariable= 64;
     console.log(myFunctionScopeVariable);
 
    function myNestedFunction()
    {
    var myNestedFunctionVariable='I\'m very nested!';
    console.log(myNestedFunctionVariable);
    console.log(myFunctionScopeVariable);
    console.log(myVariable);

        function myDoubleNestedFunction()
        {
                var doubleNestedVar='Double nested var';
                console.log(doubleNestedVar);
        }
        myDoubleNestedFunction();

    }
    myNestedFunction();
 //console.log(myNestedFunctionVariable);

 //console.log(myFunctionScopeVariable);
 }
 myFunction();



 function addNums(x,y)
 {
     return(Number(x)+Number(y));
 }

 function subtractNums(x,y)
 {
    return (x-y);
 }

 function multiplyNums(x,y)
 {
     return(x*y);
 }

 function divideNums(x,y)
 {
     return(x/y);

 }

 function myMath(operation){
    switch(operation){
        case "add":
            return addNums;
        case "subtract":
            return subtractNums;
        case "multiply":
            return multiplyNums;
        case "divide":
                return divideNums;
        default:
            return'Invalid operation';
    }

 }


 var result= myMath( 'divide' )(9,3);
 console.log( result );
 var newResult = myMath( 'multiply' )( 2,result );
 console.log( newResult );


 //Annonmous function

 function newTestFunction ( myString )
 {
     myString = 'Enter string is:'+myString;
     return function ( additionalString )
     {
         if( additionalString != undefined ){
             myString += ','+additionalString;

         }
          return function ( yetAnotherString ){
             if( yetAnotherString != undefined ){
                 myString += ','+yetAnotherString;
             }
         }
         return myString
     }
 }
 
 console.log ( newTestFunction( 'A B C D E F G' )( ' H I J K L M N O P ' )( 'Q R S T U V W X Y Z' ) );


 
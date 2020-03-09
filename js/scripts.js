/**
 * Lets Learn Javascript 
 * Multiline comment
 */
//single line comment!

//Basic assignment:
var myVariable='34.56';

myVariable=myVariable+5;
console.log(myVariable);


myVariable=parseFloat(myVariable);
console.log(myVariable);

myVariable=parseInt(myVariable);
console.log(myVariable);

myVariable=Number(myVariable);
console.log(myVariable);

myVariable =myVariable+5;
console.log(myVariable);

myVariable=myVariable.toString();
console.log(myVariable);



var myArrayOfDataTypes=[
    true,
    false,
    NaN,
    null,
    34,
    'Hello, world',
    undefined,
    [1,2,3,4,5]
];



var myDataList=document.createElement('DL');


//create datalist title
for(var i=0;i<myArrayOfDataTypes.length;i++)
{
var dataListTitle=document.createElement('DT');
dataListTitle.textContent=typeof myArrayOfDataTypes[i];

var dataListData=document.createElement('DD');
dataListData.textContent=myArrayOfDataTypes[i];

myDataList.appendChild(dataListTitle);
myDataList.appendChild(dataListData);

}


var myHeadingText='Our Data Type Test:'
document.body.innerHTML+=`
<h2>
`+myHeadingText+`
</h2>
`;


document.body.appendChild(myDataList);

var myHeading =document.getElementById('my-heading');
myHeading.title ='This is  a heading';
//myHeading.style.color='darkgray';

myHeading.className='gray-text';

myHeading.addEventListener('mouseover', function(event)
{
 this.className= 'salmon-text';//this keyword refers to the myHeading element)

});

myHeading.addEventListener('mouseleave', function(event)
    {
        this.className= 'indigo-text';
    });


myHeading.addEventListener('click',function(event)
    {
        var bigClass='big-text';
        if(!this.className.includes(bigClass))
        {
            this.className +=' big-text';
        }
      

    });


    function addTwoNumbers(x,y)
    {
        x=Number(x);
        y=Number(y);
        return(x+y);

    }


    function currentDayString()
        {
            var dateString ='';
            var date=new Date();
            dateString +=date.getFullYear();
            dateString +='.';
            dateString +=date.getMonth();
            dateString +='. ';
            dateString +=date.getDay();
            return dateString;
        }
    console.log('The current date is:\r\n' + currentDayString());








console.log(1==true);//true
console.log('hello, world!'==true);//false
console.log(-137==true);//false
console.log('test'=='test');//true
console.log(36=='36');//true
console.log(0==false);//true
console.log(`test string`=="test string");//true


console.log(1===true);//false
console.log(''===true);false
console.log(-137===true);
console.log('test'==='test');//true
console.log(36==='36');
console.log(0===false);

console.log(`test string`=="test string");//true


/**
 * Hamburger Menu
 */

 var myNav=document.querySelector('nav');
 var myNavButton=document.querySelector('.menu-button');

 myNavButton.addEventListener('click',function(event){
     //when clicked ,add/remove the "nav-open" class (in HTML)
     myNav.classList.toggle('nav-open');
    });







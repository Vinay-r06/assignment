//assignment
// CreateElement


//Create a div

var newDiv =document.createElement('div');

//add class

newDiv.className='Hello';

//add id

newDiv.id='hello1';

//add attr

newDiv.setAttribute('title','Hello Div');


//Create text node

var newDivText=document.createTextNode('Hello World');


// add text to div

newDiv.appendChild(newDivText);

var container=document.querySelector('div .list-group');
var h1=document.querySelector('div .list-group-item:nth-child(1)');
console.log(newDiv);
newDiv.style.fontSize='20px';
container.insertBefore(newDiv,h1);

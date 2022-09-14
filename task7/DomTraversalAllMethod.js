//traversing the dom//

var itemList =document.querySelector('#items');

//parentsNode

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='red';   //css selector
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);



//parentsElement

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='red';   //css selector
console.log(itemList.parentElement.parentElement);                             //both are interchangeble
console.log(itemList.parentElement.parentElement.parentElement);



//child node

console.log(itemList.childNodes);     //dont use child node use children node
console.log(itemList.children);  //dont put break or text put only list and this is htmlcollection
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='green';





//firstChild

console.log(itemList.firstChild);   //gives white spaces like childNodes



//firstElementChild

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent= 'Hello 1';



//lastChild

console.log(itemList.lastChild);   //gives white spaces like childNodes



//lastElementChild

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent= 'Hello 4';



//nextSibling

console.log(itemList.nextSibling);


//nextElementSibling

console.log(itemList.nextElementSibling);



//previousSibling

console.log(itemList.previousSibling);


//previousElementSibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';



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

 var container=document.querySelector('header .container');
 var h1=document.querySelector('header h1');
 console.log(newDiv);
 
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);



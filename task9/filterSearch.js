var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter =document.getElementById('filter');


//form submit events

form.addEventListener('submit',addForms);

// delete event

itemList.addEventListener('click', removeitem);

// filter event

 filter.addEventListener('keyup',filterItem);


//add form

function addForms(e){

    e.preventDefault();

    //console.log(1);

    // get input value

    var newItem = document.getElementById('item').value;
    var descrptions = document.getElementById('description').value;

    //create new li element

    var li=document.createElement('li');

    //add class

    li.className='list-group-item';

    //console.log(li);

    // add text node with input value


    li.appendChild(document.createTextNode(newItem));

   li.appendChild(document.createTextNode(" " + descrptions));


              //edit

//create edit button element

var editbtn=document.createElement('button');


// add classes to edit button

editbtn.className='btn  btn-sm float-right edit';


//append text node


editbtn.appendChild(document.createTextNode('Edit'));


// append button to li

li.appendChild(editbtn );


// append li to list

    itemList.appendChild(li);

//delete button

    // create del button element

var deletebtn=document.createElement('button');


// add classes to del button

deletebtn.className='btn btn-danger btn-sm float-right delete';

//append text node

deletebtn.appendChild(document.createTextNode('X'));

// append button to li

li.appendChild(deletebtn );

}


// remove item

function removeitem(e){

if(e.target.classList.contains('delete')){

//console.log(1);

if(confirm('are you sure?')){

var li=e.target.parentElement;

itemList.removeChild(li);

}

}

}

// add descrption


//filter Items


function filterItem(e){

//convert text to lowercase


var text=e.target.value.toLowerCase();

//console.log(text);

//get lis


var items=itemList.getElementsByTagName('li');

//console.log(items);       // it is HTMLCollection alot of things cant do in htmlcollection so convert to array


//convert to an array

 Array.from(items).forEach(function(item ){
    var itemName=item.childNodes[0].textContent;
    var descriptionss=item.childNodes[1].textContent;

   // console.log(itemName);  getting items name when search input type all the items name repeat in console



if(itemName.toLowerCase().indexOf(text)!=-1 ||descriptionss.toLowerCase().indexOf(text)!=-1){
   item.style.display='block';

}else{

    item.style.display='none';
}

 });

}




var form=document.getElementById('addForm');

var itemList=document.getElementById('items');



//form submit events

form.addEventListener('submit',addForms);



// delete event

itemList.addEventListener('click', removeitem);

//add form



function addForms(e){

    e.preventDefault();



    //console.log(1);



    // get input value



    var newItem = document.getElementById('item').value;



    //create new li element

     

    var li=document.createElement('li');



    //add class



    li.className='list-group-item';

    //console.log(li);



    // add text node with input value

    

    li.appendChild(document.createTextNode(newItem));



// create del button element



var deletebtn=document.createElement('button');



// add classes to del button

deletebtn.className='btn btn-danger btn-sm float-right delete';



//append text node



deletebtn.appendChild(document.createTextNode('X'));



// append button to li

li.appendChild(deletebtn );



//create edit button element

var editbtn=document.createElement('button');



// add classes to edit button

editbtn.className='btn btn-danger btn-sm float-right edit';



//append text node



editbtn.appendChild(document.createTextNode('Edit'));



// append button to li

li.appendChild(editbtn );





// append li to list



    itemList.appendChild(li);

}



// remove item



function removeitem(e){

if(e.target.classList.contains('delete'))

//console.log(1);

if(confirm('are you sure?')){

var li=e.target.parentElement;

itemList.removeChild(li);

}

}
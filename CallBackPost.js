// const posts=[
//     {title: 'post one', boby:'this is post one'},
//     {title: 'post two', boby:'this is post two'}
// ];

// function getPosts(){
//     setTimeout(() => {
//      let output = '';
//      posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//      });
//      document.body.innerHTML=output;
//     },1000);
// }

// function createPost(post, callback){
// setTimeout(() =>{
// posts.push(post);
// callback();
// }, 2000);

// }



// createPost({title: 'post three', body: 'this is post three'}, getPosts );


//output:   post one
 //         post two
 //         post three


//assignment

// const posts=[
//     {title: 'post one', boby:'this is post one'},
//     {title: 'post two', boby:'this is post two'}
// ];

// function getPosts(){
//     setTimeout(() => {
//      let output = '';
//      posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//      });
//      document.body.innerHTML=output;
//     },1000);
// }

// function createPost(post, callback){
// setTimeout(() =>{
// posts.push(post);
// callback();
// }, 2000);

// }

// function create4thPost(post,callback1){
// setTimeout(()=>{
// posts.push(post);
// callback1();

// },2000);


// }

// createPost({title: 'post three', body: 'this is post three'}, getPosts );

// create4thPost({title: 'post four', body: 'this is post four'},createPost);


//output:   post one
 //         post two
 //         post three
 //         post four



//assignment timestamp



// const posts=[
//     {title: 'post one', boby:'this is post one', createdAt: new Date().getTime() },
//     {title: 'post two', boby:'this is post two', createdAt: new Date().getTime()}
// ];

// let intervalId;

// function getPosts(){
// clearInterval(intervalId);
//    intervalId=  setInterval(() => {
//         let output = '';
//      for(let i=0; i<posts.length;i++){
//       output += `<li>${posts[i].title} - last updated ${(new Date().getTime() - posts[i].createdAt) /1000} seconds ago </li>`;
//      };
//      console.log('timer running id=', intervalId);
//      document.body.innerHTML=output;
//     },1000);
// }

// function createPost(post, callback){
// setTimeout(() =>{
// posts.push({...post, createdAt: new Date().getTime()});
// callback();
// }, 2000);
// }

// function create4thPost(post,callback){
// setTimeout(()=>{
// posts.push({...post, createdAt: new Date().getTime()});
// callback();
// },6000); 
// }

// createPost({title: 'post three', body: 'this is post three'}, getPosts );
// create4thPost({title: 'post four', body: 'this is post four'}, getPosts);


//output: 

// post one - last updated 35.026 seconds ago                       // timer running id= 47    1st  this and 2nd same and suddenly 3rs added same id for 3 timer running.. 
// post two - last updated 35.026 seconds ago                       // timer running id= 47
// post three - last updated 33.009 seconds ago                     // timer running id= 47
// post four - last updated 29.007 seconds ago                      // timer running id= 48    when this comes after few seconds id will change for entire all 4 same id....









//bonus task



const posts = [
    {
      title: "Post One",
      body: "This is post one",
      createdAt: new Date().getTime(),
    },
    {
      title: "Post Two",
      body: "This is post two",
      createdAt: new Date().getTime(),
    },
  ];

  // record when the post was created.
  
  function getPosts() {
    setTimeout(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title} - created ${
          (new Date().getTime() - post.createdAt) / 1000
        } seconds ago</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }

  // add a timer which states last edited in seconds ago and it keeps changing every second. using setInterval( )

  let intervalId = 0;

  function lastEditedInSecondsAgo() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
      let output = "";
      posts.forEach((post, index) => {
        output += `<li>${post.title} - Last Edited - ${
          (new Date().getTime() - post.createdAt) / 1000
        } seconds ago</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }

  function createPost(post, callback) {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });
      callback();
    }, 2000);
  }

  function create4posts(post, callback) {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });
      callback();
    }, 5000);
  }

  createPost({ title: "Post Three", body: "This is post three" }, lastEditedInSecondsAgo);
  create4posts({ title: "Post Four", body: "This is post four" }, lastEditedInSecondsAgo);








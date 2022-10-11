const posts=[
    {title: 'post one', boby:'this is post one'},
    {title: 'post two', boby:'this is post two'}
];

function getPosts(){
    setTimeout(() => {
     let output = '';
     posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
     });
     document.body.innerHTML=output;
    },1000);
}

function createPost(post){
return new Promise((resolve, reject)=>{
 setTimeout(()=>{
    posts.push(post);
    const error=false;
    if(!error){
        resolve();
    } else{
        reject('error: something went wrong');
    }
 }, 2000);

});
}

createPost({title: 'post three', body: 'this is post three'}).then(getPosts).catch(err=> console.log(err));

const user= {
    username: 'vinay',
    lastUserActivity:new Date()
   
};
//console.log(user.lastUserActivity);

const updateLastActivity= new  Promise ((resolve,reject)=>{
    setTimeout(()=>{

       // console.log(user.lastUserActivity);

        console.log(`before creating post 3,user lastActivityTime = ${user.lastUserActivity}` );
        user.lastUserActivity=(new Date().getTime())/1000;
        resolve( user.lastUserActivity);
    },1000)
    })
    


function deletepost(){
    return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if(posts.length>0){
    const lastelement =posts.pop();
    resolve(lastelement);
    }
    else
    {
        reject ('array is empty');
    }
  },2000);

    });
}

Promise.all([createPost, updateLastActivity]).then(([forcreatePost, forupdateLastActivity])=>{
    console.log('after creating post 3>>>>>');
    console.log('posts>>>>',posts);
    console.log('USER last activity time ',forupdateLastActivity);
}).then(()=>{ deletepost().then(()=>{
    getPosts();
}).catch((err)=> console.log(' delete post last update activity error ',err));
}).catch((err)=> console.log(' last update activity error ',err));

    
//assignment create post and delete post with async


const posts=[
    {title: 'post one', boby:'this is post one'},
    {title: 'post two', boby:'this is post two'}
];

const callAlls=async()=>{
const  getPosts=()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
     let output = '';
     posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
     });
     document.body.innerHTML=output;
     resolve();
    },1000);
})
}

const  createPost=(post)=>{
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


const  deletepost= ()=>{
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
 
    

    try{

await getPosts();

await createPost({title: 'post three', boby:'this is post three'});
await getPosts();
await deletepost();
await getPosts();
await deletepost();
await getPosts();
await deletepost();
await getPosts();
 await deletepost();



    } catch(err){
        console.log('delete  error ',err)
    }
}

callAlls();
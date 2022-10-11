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
      },1000);
    
        });
    }
    
    createPost({title: 'post three', body: 'this is post three'})
    .then(()=>{
        getPosts()
        deletepost().then(()=>{
            getPosts();
            deletepost().then(()=>{
                getPosts();
                deletepost().then(()=>{ 
                    getPosts();
                    deletepost().then(()=>{})
                    .catch((err)=>{console.log('inside catch block 1', err)})
                }).catch((err)=>{console.log('inside catch block 2', err)})
            }) .catch((err)=>{console.log('inside catch block 3', err)})
        }) .catch((err)=>{console.log('inside catch block 4', err)})
    
    }).catch((err)=> console.log('catch block for post 3',err));
    
    
    
        function create4thPost(post){
            return new Promise((resolve, reject)=>{
             setTimeout(()=>{
                posts.push(post);
                const error=false;
                if(!error){
                    resolve();
                } else{
                    reject('error: something went wrong');
                }
             }, 1000);
            
            });
            }
    
    create4thPost({title: 'post four', body: 'this is post four'}).then(()=>{
    getPosts();
    deletepost().then(()=>{
    }).catch((err)=> console.log('inside catch delete 4th post',err));
    }).catch((err)=> console.log('catch block for post 4 ',err));
    
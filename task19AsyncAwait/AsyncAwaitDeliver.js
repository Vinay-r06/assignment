//assignment



console.log('person1: shows ticket');
console.log('person2: shows ticket');

const premovie=async () =>{

    const promiseWifeBringTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });

    const getpopcorn=new Promise((resolve,reject)=> resolve(`popcorn`));
    const addbutter=new Promise((resolve,reject)=> resolve(`butter`));
    const getColdDrinks= new Promise((resolve,reject)=> resolve (`cold drinks`));
   
    let ticket= await promiseWifeBringTicket;
  
    console.log(`wife:i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn=await getpopcorn;

        console.log(`husband: i got some ${popcorn}`);
        console.log('husband: we should go in');
        console.log('wife: i need butter on my popcorn');

        let butter = await addbutter;

        console.log(`husband: i got some ${butter} on popcorn`);
        console.log(`husband: anything else darling?`);
        console.log(`wife:lets got we are getting late`);
        console.log(`husband: thank you for the remainder *grins*`);

        let colddrink= await getColdDrinks;

        console.log(`husband: i got some ${colddrink} for u`);
        console.log(`wife: thank you`);


       return ticket;                                    // the whole thing asyc operation  return promise

}; 

premovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');




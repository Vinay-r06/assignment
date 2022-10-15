//assignment promise.all in asyc await


console.log('person1: shows ticket');
console.log('person2: shows ticket');

const premovie=async () =>{

    const promiseWifeBringTicket=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });

    const getpopcorn=new Promise((resolve,reject)=> resolve(`popcorn`));
    const getcandy=new Promise((resolve,reject)=> resolve(`candy`));
    const getcoke=new Promise((resolve,reject)=> resolve(`coke`));
    const getColdDrinks=new Promise((resolve,reject)=> resolve(`cold Drinks`));

    let ticket= await promiseWifeBringTicket;
  
    
    let [popcorn,candy,coke,colddrink]=await Promise.all([getpopcorn,getcandy,getcoke,getColdDrinks]);

    console.log(`${popcorn},${candy},${coke},${colddrink}`);


       return ticket;                                    // the whole thing asyc operation  return promise

}; 

premovie().then((m)=> console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
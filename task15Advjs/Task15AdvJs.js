//Write a function and use 'call' to call the function

var student={age:24}
var result= function(num){
return this.age + num;
   }
 console.log (result.call(student, 1));      // output:25


 //Write a program using apply

 var student={count:3}
var total= function (a,b,c){
return this.count + a+b+c;
} ;
 var arr=[1,2,3];
console.log(total.apply(student,arr));        // output:9


// Write a program using bind


var student={count:3}
var total= function (a,b,c){
return this.count + a+b+c;
 } ;
 var arr=[1,2,3];
console.log(total.bind(student,arr));       // output: function { code}

// Write a program using bind

 var student={count:3}
var total= function (a,b,c){
return this.count + a+b+c;
 } ;
 var arr=[1,2,3];
 var bound=total.bind(student);
 console.dir(bound);                            //output: function bound()


 // Write a program using bind

 var student={count:2}
 var total= function (a,b,c){
 return this.count + a+b+c;
 } ;
 var bound=total.bind(student);
 console.log(bound(1,2,3));                       //output: 8


 //Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
//Dont pass in args. Read from 'this' and use BIND

var student={age:20}
 var result=function(){
 return this.age ;
            };
 var  bound=result.bind(student);
 console.log(bound(this.age));                        //output: 20



//function curring using bind method

 let multiple =function (x,y){
     console.log(x*y);
 }
                                                 // let multiplyByTwo=function(y){
                                                    //  let x=2;          -->set a permnt val
                                                   //   console.log(x*y);
                                                 //   }

 let multiplyByTwo= multiple.bind(this,2);     // set x as 2 permnt  // same acts above
  multiplyByTwo(5);                              //when calling this function argument that is y value.
                                                  // we got 10 output, this is called function currying

 let multiplyByThree= multiple.bind(this,3);         
 multiplyByThree(5);                                 //output : 15                  


 let multiplyByTwos= multiple.bind(this,2,3);     // 3 acts as y   //output : 6-->2*3.
  multiplyByTwos(5);                              // and ignore this method since y values is given above

  let multiplyByTempty= multiple.bind(this);     // if we didnt pass it will take in method itself 
  multiplyByTempty(2,3);                          // it will give here 6




  
  //function Closure 

  let multiply =function (x){                   // function inside another function and having lexical scope or return from another function they still maintains thier lexical scope,even x is deleted have  access to x.
    return function (y) {
    console.log(x*y);
    }
}

let multipleClosTwo =multiply(2);         // x value
multipleClosTwo(3);                        // y value       //output : 6

let multipleClosThree =multiply(3);
multipleClosThree(10);                             //output : 30
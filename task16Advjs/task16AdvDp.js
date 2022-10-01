//Design pattern problem

class student {
  static count=0;

constructor(name,age,phoneNumber,boardMarks){
  this.name=name;
  this.age=age;
  this.phoneNumber=phoneNumber;
  this.boardMarks=boardMarks;
  student.countstudent();
}

static countstudent(){
  return (student.count++);
}

 eligible(){
  if(this.boardMarks<40){
console.log(`the ${this.name} age ${this.age}  is not eligible`  )
  }
  else if(this.boardMarks>=40){
    console.log(`the ${this.name} age ${this.age} is eligible`);
  }
}

}

const yash= new student('yash','26',12345,39);
const vinay= new student('vinay','24',345,40);
const kiran= new student('kiran','28',56945,45);
const rahul= new student('rahul','26',36945,35);
const stevan= new student('stevan','25',7845,80);
console.log(student.countstudent());

yash.eligible();
vinay.eligible();
kiran.eligible();
rahul.eligible();
stevan.eligible();




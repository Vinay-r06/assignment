// Fat arrow:

class student {
    constructor(name,age,Marks){
      this.name=name;
      this.age=age;
      this.Marks=Marks;
    }
    
    
    placementSetAge(MinAge){
    
      return  (minMarks)=>{
        
              if(this.age>=MinAge && this.Marks>=minMarks){
                 console.log(this.name + ' is ready for placement' );
              } 
              else {
                console.log(this.name + ' is not ready for placement');
              } 
    
      }
    
    }
    }
    
    const yash= new student('yash',26 ,60);
    const vinay= new student('vinay',24,65);
    const kiran= new student('kiran',28,70);
    const rahul= new student('rahul',20,60);
    const stevan= new student('stevan',21,41);
    
    yash.placementSetAge(21)(60);
    vinay.placementSetAge(21)(60);
    kiran.placementSetAge(21)(60);
    rahul.placementSetAge(21)(60);
    stevan.placementSetAge(21)(60);
    
    
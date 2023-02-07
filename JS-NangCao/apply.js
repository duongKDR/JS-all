  //apply()
   
  
  const cat ={ 
    nameCat: " K",
    age: 3,
    isGo: false,
     go(){
       this.isGo = true
       console.log(`${this.nameCat} ${this.age} dang di`);
     },
     sit(){
       this.isSit = false
       console.log(`${this.nameCat} ${this.age} dang ngoi`);
     }
   }
   
   const cat2 = {
     nameCat: "M",
     age: 4,
     isGo : false
   }
   console.log( 'cat', cat.isGo);
   cat.go()
   console.log( 'cat', cat.isGo);
   
   console.log("```````````");
   console.log( 'cat2', cat2.isGo);
   cat.go.apply(cat2)
   console.log( 'cat2', cat2.isGo);
   
   const dog = {
     nameDog:"Ki",
     
   }
   function greet(greeting, mes) {
     return ` ${this.nameDog} ${greeting}  ${mes}`
   } 
   console.log(greet.apply(dog, ['dang di','vui vẻ']));
   
   /// to string
   console.log("`````````````````");
   let num = 7;
   console.log(typeof num);
   let result = num.toString();
   console.log(typeof result);
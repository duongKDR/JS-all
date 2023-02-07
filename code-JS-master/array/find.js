var arry = [
    {
      id: 1,
      bookN: 'XSa',
      coin: 100
    },
    {
      id: 2,
      bookN: 'XSa1',
      coin: 1500
    },
  
]
const methodFind = arry.find(function (i) {

    return i.bookN = "XSa1";
  
  })
  console.log(methodFind);
console.log("----------");

 //  
  const person = [
   {
    nameP: "ha",
    age:4,
   },
   {
    nameP: "hi",
    age: 7,
   }
   ,{
    nameP:"ba",
    age: 3
   },
   {
    nameP:"ban",
    age: 31
   }
  ]
  
  const findP = person.find(function (i) 
  {   return i.age > 4;
  
    
  })
  
  console.log(findP);
const findOld = person.find((i) => i.age === 31)
console.log( findOld);
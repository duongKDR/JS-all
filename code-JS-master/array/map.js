let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log(names);
console.log("----------");

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
  
const newmoney = arry.map(function (i) {
    return {
      id: i.id,
      bookN: `P: ${i.bookN}`,
      coin: i.coin
    }
  
  });
  console.log(newmoney)
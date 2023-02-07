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
//every
const methodEvery = arry.every(function (i) {
    return i.coin === 100;
  });
  
console.log( methodEvery);
console.log("----------");

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every((currentValue) => currentValue < 40));
  
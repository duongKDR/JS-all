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
  
var i = 0;

function reduces(a, b) {

  i++;
  return a + b.coin;
}
const r = arry.reduce(reduces, 0);

console.log(r);
console.log("----------");


var arr = [
    ['name', 'SX'],
    ['age', 18],
  ];
  function arrToObj(arr) {
    return arr.reduce(function (a, b) {
      a[b[0]] = b[1]
      return a
    }, {})
  }
  console.log(arrToObj(arr));
  console.log("----------");

  const numbers = [175, 50, 25];

   var a = numbers.reduce((total, num) => total - num )
  console.log(a);
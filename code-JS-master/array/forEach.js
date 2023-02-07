
var array = [12, 5, 8, 130, 44]


array.forEach(i => {
    i = i++
    console.log(i);
});


var book = [
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
  
  // forEach
  book.forEach(function (a, i) {
    console.log(i, a);
  })
  
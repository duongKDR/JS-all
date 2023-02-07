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

const methodFilter = arry.filter(function (i) {
    return i.coin === 100;
});


console.log(methodFilter);
console.log("----------");

// vd2 
let arrSo = [5, 3, 8, 1, 7];

const filterRangeInPlace = arrSo.filter(function (i) {

    if (4 < i && i < 8) {

        console.log(i);
        return i
    }

});

console.log(filterRangeInPlace);
console.log("----------");

//
let users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' },
    { id: 97, name: 'oliver', age: 28, group: 'admin' }
  ];
  let res = users.filter( function (it) {
    return  it.name.includes('oli') 
  })
  let tim = users.filter(it => new RegExp('oli', "i").test(it.name));


  console.log(res);
  console.log("----------");
  console.log(tim);
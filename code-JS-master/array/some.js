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

const methodSome = arry.some(function (i) {
    return i.coin === 100;
  });
  console.log(methodSome);

  const ages = [3, 10, 18, 20];

ages.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
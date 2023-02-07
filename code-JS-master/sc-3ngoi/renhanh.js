const year = [ 2020 ,2019, 1992,1994]
console.log(" lenh if");
for (const i of year) {
     if( i % 19 === 3 || i % 19 === 6 ||i % 19 === 9 ||i % 19 === 11||i % 19 === 14||i % 19 === 17 )
     console.log("nam nhuan",i); 
}
console.log(" lenh if - else");

var mangSo = [1,2,4,7,8,9,26]
for (const i of mangSo) {

     
if (i > 8) {
     console.log("so lon hon 6",i);
} else {
     console.log("so nho hon 6",i);
}}

console.log(" lenh if - else if");

let x = 50;

if (x < 10 ) {
    console.log("X là số có 1 chữ số");
} else if (x < 100) {
    console.log("X là số có 2 chữ số");
} else {
    console.log("X là số có nhiều hơn 2 chữ số");
}

let y = 5;
console.log(" lenh switch-case");

//  switch case
switch (y) {
  case 1:
    console.log("=1");
    break;
  case 2:
    console.log("=2");
    break;
  default:
    console.log("khac 1 v 2");
    break;
}
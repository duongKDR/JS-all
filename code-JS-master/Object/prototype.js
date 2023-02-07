
function me(name,age,address) {
    this.name = name;
    this.age = age;
    this.address = address;
} 
me.prototype.lv = 30;

const ne = new me("duong", 19, "TH");

console.log(ne.lv);

function Person(name) {
    this.name = name;
  }
  
  var person = new Person(' Duong');
  console.log('person.constructor is ' + person.constructor);

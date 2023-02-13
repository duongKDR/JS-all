

const person = {
    nameF: 'D',
    age: 18,
    gender: 'female'    
}
// thông thường
let nameF = person.name;
let age = person.age;
let gender = person.gender;
// es6
let { nameF, age, gender } = person;
console.log(nameF);
console.log(age); 
console.log(gender); 


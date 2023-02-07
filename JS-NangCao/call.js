 
  //  call
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1);
console.log(person.fullName.call(person1));


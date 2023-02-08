let x = this;
///
function myFunction() {
    return this;
  }

// //   /"use strict";
// function myFunction() {
//     return this;
//   }
{/* <button onclick="this.style.display='none'">Click to Remove Me!</button> */}
const person = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
  };
  ///
  const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);

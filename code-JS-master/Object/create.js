/// ko prototype
var person = Object.create(null);

typeof(person) 
//console.log(person) 


person.name = 'Duong';

console.log(person) 

// có prototype
prototypeObject = {
	fullName: function(){
		return this.firstName + ' ' + this.lastName		
	}
};
var person = Object.create(prototypeObject);

//console.log(person); 

person.firstName = 'Duong';
person.lastName = 'K';

person.fullName();

console.log(person.fullName()); 

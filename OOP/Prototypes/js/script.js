'use strict';
const Person = function(firstName, birthYear){
    this.firstName=firstName;
    this.birthYear=birthYear;
}
const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 1994)
const macks = new Person('Macks', 1998)
console.log(matilda, macks);
console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge=function(){
    console.log(2037-this.birthYear)
}
jonas.calcAge()
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);//true

console.log(Person.prototype.isPrototypeOf(jonas));//true
console.log(Person.prototype.isPrototypeOf(matilda));//true
console.log(Person.prototype.isPrototypeOf(Person));//false

//prototypeOfLinkedObject
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);
console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

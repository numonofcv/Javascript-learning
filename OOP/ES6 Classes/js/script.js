'use strict';
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    };
    
    // Mathods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    };
    
    great(){
        console.log(`Hey ${this.firstName}`);
     }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
 console.log(jessica.__proto__ === PersonCl.prototype);

//  PersonCl.prototype.great= function(){
//     console.log(`Hey ${this.firstName}`);
//  }
 jessica.great()

//Classes are not hoisted
//Classes are first-class citizes
//classes are executed in strict mode 
















// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 1994)
// const macks = new Person('Macks', 1998)
// console.log(matilda, macks);
// console.log(jonas instanceof Person);

// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//     console.log(2037 - this.birthYear)
// }
// jonas.calcAge()
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(jonas)); //true
// console.log(Person.prototype.isPrototypeOf(matilda)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// //prototypeOfLinkedObject
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// // Prototypal Inheritance on Built-In Objects Object.prototype (top of prototype
// // chain)
// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); //null

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9
// ]; // new Array = []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)]
// }
// console.log(arr.unique());

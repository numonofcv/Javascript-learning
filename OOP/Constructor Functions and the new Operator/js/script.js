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



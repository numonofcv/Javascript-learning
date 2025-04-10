// const jonasArray = [
//     'Jonas', 'Schmedtmann', 2037 - 1997,
//     'teacher',
//     [
//         'Michael', 'Stiven', 'Peter'
//     ]
// ];
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Stiven', 'Peter'], 
    hasDriverLicense: true,
    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }
    //  calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    //  }
     calcAge: function () {
        console.log(this);
        this.age = 2037 - this.birthYear;
         return this.age; 
    }
};

jonas.location='Portugal';
jonas['twitter']='@jonasschmedtmann'
console.log(jonas);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}  `);
const chekDriverLicense = jonas.hasDriverLicense ? 'he has a driver license' : 'he has not a driver license';

console.log(jonas.calcAge());
console.log(jonas['calcAge']());
console.log(`${jonas.firstName} is ${jonas.calcAge()} -year old and ${chekDriverLicense}`);

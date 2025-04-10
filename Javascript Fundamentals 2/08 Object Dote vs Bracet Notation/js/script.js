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
    age: 2037 - 1997,
    job: 'teacher',
    friends: ['Michael', 'Stiven', 'Peter']
};
console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKay = 'Name';
console.log(jonas['first' + nameKay]);
console.log(jonas['last' + nameKay]);

const interestedIn = prompt(' What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// console.log(jonas[interestedIn]);
if (jonas[interestedIn]) {
console.log(jonas[interestedIn]);
}else{
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');    
};

jonas.location='Portugal';
jonas['twitter']='@jonasschmedtmann'
console.log(jonas);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}  `);

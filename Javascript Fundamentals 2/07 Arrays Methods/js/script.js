// const friend1 = 'Ali';
// const friend2 = 'Johan';
// const friend3 = 'Bob';
// const friend4 = 'Alex';

// const friends = [ 'Ali','Johan','Bob','Alex',];
// console.log(friends);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);
// friends[2]='Malik';
// console.log(friends);

// // const years = new Array(19991, 1984, 2008, 2020);
 
// const firstName =  'Johans';
// const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);


// // exercise
// const calcAge = function (birthYear) {
//     return 2037-birthYear
// }
// const years = [1990,1967,2002,2010,2018]
// calcAge(years)
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[3]);
// const age5 = calcAge(years[4]);
// const age6 = calcAge(years[5]);
// const calcAgeReturn = [age1, age2, age3, age4,age5,age6];


// console.log(calcAgeReturn);


const friends = [ 'Ali','Johan','Bob','Alex',];
console.log(friends.length);
console.log(friends);
// Arrayni oxiriga qo'shadi
const newLeanths = friends.push('Jonas');
console.log(friends);
console.log(newLeanths);

// Arrayni boshiga qo'shadi
friends.unshift('Malik')
console.log(friends);


// Remove Elements 
friends.pop() // Last
console.log(friends);
const propped = friends.pop();
console.log(propped);
console.log(friends);

const newPropped = friends.shift() // first
console.log(friends);
 
console.log(friends.indexOf('Ali'));
console.log(friends.indexOf('Malik'));

// chaked
friends.push(23)
console.log(friends.includes('Johan'));
console.log(friends.includes('Bob'));
console.log(friends.includes('Malik'));
console.log(friends.includes('23'));
console.log(friends.includes(23));
 
 
if(friends.includes('Peter')){
    console.log('You have a friend called Peter');
};


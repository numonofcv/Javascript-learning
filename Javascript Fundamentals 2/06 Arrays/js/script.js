const friend1 = 'Ali';
const friend2 = 'Johan';
const friend3 = 'Bob';
const friend4 = 'Alex';

const friends = [ 'Ali','Johan','Bob','Alex',];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);
friends[2]='Malik';
console.log(friends);

// const years = new Array(19991, 1984, 2008, 2020);
 
const firstName =  'Johans';
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);


// exercise
const calcAge = function (birthYear) {
    return 2037-birthYear
}
const years = [1990,1967,2002,2010,2018]
calcAge(years)
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);
const age6 = calcAge(years[5]);
const calcAgeReturn = [age1, age2, age3, age4,age5,age6];


console.log(calcAgeReturn);

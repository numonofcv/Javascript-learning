// Math operators
const now = 2040;
const ageJohn = now - 1999;
console.log(ageJohn);
const ageSarah = now-2018;
console.log(ageSarah);
console.log(ageJohn, ageSarah);
console.log(ageJohn + ageSarah);
console.log(ageJohn*2, ageSarah/10, 2**3);
// 2**3 meens 2 to the power of 3 = 2*2*2

const firstName =  'John';
const lastName =  'Wick';
console.log(firstName +' '+ lastName);
//Assigment Operators
let x = 5 + 10;//15
x+=10;//x = x + 10 = 25
x*=4;//x = 25 * 4 = 100
x++; //x = x + 1 = 101
x--; //x = x - 1 = 101
console.log(x);

// Comparision operators
console.log(ageJohn > ageSarah); // >, <, >=, <=
console.log(ageSarah <= 20);//False
console.log(ageJohn >= 20);// True
let isFullAge = ageSarah >=18;
console.log(now - 1999 > now - 2018 );


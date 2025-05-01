'use strict';
console.log(23===23.0);//true
console.log(0.1 + 0.2);//0.0
console.log(0.1 + 0.2 === 0.3); // false
// Conversion
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px'));//30
console.log(Number.parseInt('e30'));//NaN

console.log(Number.parseInt('2.5rem'));//2
console.log(Number.parseFloat('2.5rem'));//2.5

console.log(' ------------isNaN-----------------');

console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

console.log(' ------------isFinite-----------------');

console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(' ------------isInteger-----------------');

console.log(Number.isInteger(20));
console.log(Number.isInteger(20.0));
console.log(Number.isInteger(23 / 0));
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const randomInt = (min, max ) => Math.trunc(Math.random()*(max-min)+1)+min;
console.log(randomInt(10, 20 ));



Math.round(23.3); // 23
Math.round(23.9); // 24

Math.ceil(23.3); // 24
Math.ceil(23.9); // 24

Math.floor(23.3);    // 23
Math.floor('23.9');  // 23  ← string bo‘lsa ham, JS uni numberga o‘giradi

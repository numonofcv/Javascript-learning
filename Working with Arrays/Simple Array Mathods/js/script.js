'use strict';
// Lectures
const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR','Euro'],
    ['GBP', 'Pundsterling'],
]);
const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300];

// //////////////////////////////////////////////////////////// //
// Slice
let arr  = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1, 3));
console.log(arr.slice(-2));
console.log(arr.slice(0));
console.log([...arr]);
//splice
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j',  'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);

//Concat
const latters = arr.concat(arr2);
console.log(latters);
console.log([...arr, ...arr2]);

//Join 
console.log(latters.join('-'));

'use strict'
// Varriables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
//Function
console.log(addDecl(2, 5)); // 7

function addDecl(a,b) {
    return a+b;
};
// console.log(addExpr(5, 5));//ReferanceError
const addExpr = function (a,b) {
    return a+b;
};
console.log(addArrow(8, 5));//ReferenceError
const addArrow = (a,b)=> a+b;

//exemples
console.log(undefined);
if (!numPruduct) deleteShoppingCart();
var numPruduct = 10;
 function deleteShoppingCart() {
    console.log('All products deleted');
    
 };

 var x = 1;
 let y = 2;
 const z = 3;
console.log(x===window.x);
console.log(y===window.y);
console.log(z===window.z);

'use strict';
const movements = [ 200, 450, -400, 3000, -650, -130, 70, 1300];
for (const[ i, movement] of movements.entries()) {
    if (movement>0) {
        console.log(`Movement ${i+1} : You deposited ${movement}`);
    }else{
        console.log(`Movement ${i+1} : You withdrew ${Math.abs(movement)}`);
    };
};
console.log(' ------------- forEach------------');

movements.forEach((movement, i , arr)=>{
    if (movement>0) {
        console.log(`Movement ${i+1} : You deposited ${movement}`);
    }else{
        console.log(`Movement ${i+1} : You withdrew ${Math.abs(movement)}`);
    };
})
// ///////////////////////////////////////////////////////// //
// ///////////////////////////////////////////////////////// //

// forEach With Maps and Sets

const currencies = new Map([
    ['USD', 'United States Dollar'],
    ['EUR','Euro'],
    ['GBP', 'Pundsterling'],
]);
currencies.forEach((value,key,map)=>{
    console.log(`${key} : ${value}`);
})
console.log('-----------SET------------');

//SET
const currenciesUniqe = new Set(['USD','EUR', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUniqe);
// currenciesUniqe.forEach((value, key, map)=>{
//     console.log(`${key} : ${value}`);
// })

currenciesUniqe.forEach((value, _, map)=>{
    console.log(`${value} : ${value}`);
})
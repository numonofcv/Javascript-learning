'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: [
        'Italian', 'Pizzeria', 'Vegetarian', 'Organic'
    ],
    starterMenu: [
        'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'
    ],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
     order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
     }
    // order: function(starterIndex, mainIndex){
    //     return[this.starterMenu, starterIndex], this.mainMenu[mainIndex];
    // }
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories
console.log(main, secondary);
//Switching veriables
// const temp=main;
// main = secondary;
// secondary = temp;
 
[main, secondary]=[secondary, main]
 console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse ] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nasted destructuring
const nasted = [2, 4, [5, 6]];
// const [i, , j] =  nasted;
// console.log(i, j);

const [i, , [j,k]] =  nasted;
console.log(i, j,k);

//Default values
// const [p, q, r]= [8, 9]
// console.log(p, q, r);
const [p=1, q=1, r=1]= [8, 9]
console.log(p, q, r);


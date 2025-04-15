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
    mainMenu: [
        'Pizza', 'Pasta', 'Risotto'
    ],

    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // open 24 hours
            close: 24
        }
    },

    order: function (starterIndex, mainIndex) {
        return [
            this.starterMenu[starterIndex], this.mainMenu[mainIndex]
        ]
    },
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address
    }) 
    {
        console.log(
            `Order reseived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Her is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
        
    },
    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
      }
      
};

const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); 
const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
  ];

//   object 
const{sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


restaurant.orderPizza('pishloq', 'pomidor', 'zaytun', 'qo‘ziqorin');



  
// ///////////////////////////////////  //
// Spread Operators//

// const arr  = [ 7, 8, 9];
// const badNewArr =[ 1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ... arr]
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);

// // Coppy array 
// const mainMenuCoppy = [...restaurant.mainMenu];

// // join 2 array
//  const main = [ ...restaurant.starterMenu, ...restaurant.mainMenu];
//  console.log(main);

//  //iterables: array, string, map, sets, NOT objects
//  const str = 'Jonas';
//  const latters = [...str, ' ', 'S'];
//  console.log(latters);
// //  console.log(`${...str} Schedtmann`); //  SyntaxError: Unexpected token '...' 

// //  Real world exeples
// // const ingradients =  [prompt('Let\s make pasta! Ingradient 1'), prompt('Ingradient 2', ),prompt('Ingradient 3'), ];
// // console.log(ingradients);

// // restaurant.orderPasta(ingradients[0],ingradients[1],ingradients[2],);
// // console.log(restaurant.orderPasta);
// // restaurant.orderPasta(...ingradients)
// // console.log(restaurant.orderPasta);

// // Objects 
// const newRestuarents = { faundedIn: 1998,...restaurant, founder: 'Guissape' }
// console.log(newRestuarents);
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Resturarante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);


//Destructure Object
// restaurant.orderDelivery(
//     {time: '22:30', address: 'Via Del Scole , 21', mainIndex: 2, starterIndex: 2}
// );

// restaurant.orderDelivery({address: 'Via Del Scole , 21', starterIndex: 2});

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
// console.log(restaurantName, hours, tags);

// //Default values
// const {
//     menu = [],
//     starterMenu: starters = []
// } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//     a: 23,
//     b: 7,
//     c: 14
// };
// ({a, b} = obj);
// console.log(a, b);

// // Nasted Object const {fri:{open, close}}=openingHours; console.log(fri);
// // console.log(open, close);
// const {
//     fri: {
//         open: o,
//         close: c
//     }
// } = openingHours;
// console.log(o, c);



// ///////////////////////////// Destructures Array// const arr = [2, 3, 4];
// const a = arr[0]; const b = arr[1]; const c = arr[2]; const [x, y, z] = arr;
// console.log(x, y, z); console.log(arr); let [main,, secondary] = restaurant
// .categories     console     .log(main, secondary); Switching veriables const
// temp=main; main = secondary; secondary = temp; [main, secondary] =
// [secondary, main] console.log(main, secondary);  Receive 2 return values from
// a function const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); Nasted destructuring const nasted = [ 2,
// 4,     [         5, 6     ] ];  const [i, , j] =  nasted; console.log(i, j);
// const [i,, [         j, k     ] ] = nasted; console.log(i, j, k); Default
// values const [p, q, r]= [8, 9] console.log(p, q, r); const [p
// = 1, q = 1, r = 1] = [8, 9] console.log(p, q, r);
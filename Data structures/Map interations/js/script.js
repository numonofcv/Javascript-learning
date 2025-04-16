'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours= {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },
    [weekdays[4]]: {
        open: 11,
        close: 23
    },
    [weekdays[5]]: {
        open: 0, // open 24 hours
        close: 24,
    }
};
// console.log(openingHours);


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

    openingHours,
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
const questions = new Map([
['questions', 'what is the best programming language in the world?'],
[1, 'C'],
[2,'java'],
[3,'Javascript'],
['correct', 3],
[true, 'Correct🎉'],
[false, 'Try again'],
])
console.log(questions);
//Convert Object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(questions.get('questions'));
for (const [key, value] of questions) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  };
};
const answer = Number(prompt('Your answer!'))
console.log(answer)
console.log(questions.get(questions.get('correct') === answer));




// const rest = new Map();
// rest.set('name','Classico Italiaono');
// rest.set(1,'Firanze , Italy');
// console.log(rest.set(2,'Lisabon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

//   console.log(rest.get('name'));   // 'Classico Italiano'
//   console.log(rest.get(true));     // 'We are open :D'
//   console.log(rest.get(1));        // 'Firenze, Italy'
  
// const time = 21;
// console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));

// console.log(rest.has('categories'));
// console.log(rest.delete(2));
// // console.log(rest.clear());
// console.log(rest);
// rest.set([1,2], 'Test');
// console.log(rest);
// console.log(rest.size);
'use strict';
const rest = new Map();
rest.set('name','Classico Italiaono');
rest.set(1,'Firanze , Italy');
console.log(rest.set(2,'Lisabon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

  console.log(rest.get('name'));   // 'Classico Italiano'
  console.log(rest.get(true));     // 'We are open :D'
  console.log(rest.get(1));        // 'Firenze, Italy'
  
const time = 21;
console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.delete(2));
// console.log(rest.clear());
console.log(rest);
rest.set([1,2], 'Test');
console.log(rest);
console.log(rest.size);

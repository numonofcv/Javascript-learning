'use strict';
const lutfhansa = {
  airline : 'Lutfhansa',
  iataCode: 'LH',
  bookings:[],
  // book function()
  book(flightNum, name){
    console.log(`${name} book a seat  on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({flight : `${this.airline} flight ${this.iataCode}${flightNum}`, name})
  },
};
lutfhansa.book( 23 ,  'jonas');
lutfhansa.book( 255 ,  'Ali');
lutfhansa.book( 264 ,  'Victor');


const eurowings = {
  airline : 'Eurowings',
  iataCode: 'EW',
  bookings:[],
};
const book = lutfhansa.book;
// console.log(book);
// console.log(book.call());
book.call(eurowings, 23,  'Sarah') ;

const swiss = {
  name: 'Swiss Air Line',
  iataCode: 'SL',
  bookings:[],
}
book.call(swiss, 666, 'Ali');
console.log(swiss);

// Apply mathod
const flightData =  [ 533,  'Georgina ', 'hhhhh'];
book.apply(swiss, flightData);
console.log(swiss);

//Bind Mathod 
const bookEW = book.bind(eurowings)
const bookLH = book.bind(lutfhansa)
const bookSW = book.bind(swiss)
const bookEW23 = book.bind(eurowings,23)
bookEW23('Maya Smit')
// with eventListener
lutfhansa.planes = 300;

lutfhansa.buyPlane = function () {
  console.log(this);          // 1. `this` kim?
  this.planes++;              // 2. planes ni bittaga oshir
  console.log(this.planes);   // 3. natijani chiqar
};

document
  .querySelector('.buy')
  .addEventListener('click', lutfhansa.buyPlane.bind(lutfhansa));

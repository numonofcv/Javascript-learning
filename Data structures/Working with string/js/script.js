'use strict';
const airline = 'TAP Air Portugal';
// const plane = 'A320'

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[0]);
// console.log('B737'[0]);

// // String.length
// console.log(airline.length);
// console.log('B737'.length);

// // index of
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));
// // cut with slice() 
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.indexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if(s==='B'|| s === 'E'){
//         console.log('You got the middle seat😬')
//     }else{
//         console.log('You got lucky 😎');
//     }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');


// console.log(new String('jonas'))
// console.log(typeof new String('jonas'))
// console.log(typeof String('jonas'))
// console.log(typeof new String('jonas').slice(1))

// Part 2

console.log(airline.toLowerCase);
console.log(airline.toUpperCase);

// Fix Capitalization in name 
const pasanger = 'jOnAS';//Jonas
console.log(pasanger);

const pasangerLower = pasanger.toLowerCase();
console.log(pasangerLower);

const passangerCorrect = pasangerLower[0].toUpperCase() + pasangerLower.slice(1);
console.log(passangerCorrect);

//Comparing Email
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io\n'

// const lowerEmail = loginEmail.toLowerCase();
// console.log(lowerEmail);

// const trimmedEmail = lowerEmail.trim()
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// replacing 

const priceGB = '288,95E';
const priceUS = priceGB.replace('E','$' ,).replace(',', '.');
console.log(priceUS );
const announcement = ' All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));//true
console.log(plane.includes('Boening'));//false
console.log(plane.startsWith('Airb'));//true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Partof the NEW Airbus family');
}

// Practice exercise
const checBaggage = function (items) {
    const baggage = items.toLowerCase();
    // console.log(baggage);
    
    if (baggage.includes('knife')||baggage.includes('gun')) {
        console.log('You are NOT allowed on a board');
    }else{
        console.log('Welcome abroad!');
    }
}
checBaggage('I have laptop, some Food and pocket Knife');
checBaggage('Sock and Camera');
checBaggage('Got some snacks and a gun for protection.')
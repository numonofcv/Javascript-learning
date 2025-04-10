
// const jonasArray = [
//     'Jonas', 'Schmedtmann', 2037 - 1997,
//     'teacher',
//     [
//         'Michael', 'Stiven', 'Peter'
//     ]
// ];
// for (let i = jonasArray.length-1; i>=0 ; i--) {
//     console.log(i, jonasArray[i]);    
// }
// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------------Starting Exercise ${exercise}`);
    
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Exercise ${exercise} Lifting weight repetition ${rep}`);
//     }
// }

let rep = 1 ;
while (rep <=10) {
    console.log(`Lifting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);
while (dice!==6) {
    console.log(`You rolled a ${dice}`);
 dice = Math.trunc(Math.random()*6)+1;
 if (dice===6) {
    console.log('Loop is about and...');
    
 }
    
}
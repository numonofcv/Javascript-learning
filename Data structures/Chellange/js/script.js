'use strict';
// const game = {     team1: 'Bayern Munich',     team2: 'Borussia Dortmund',
// players: [       [  players[0] — Bayern Munich o'yinchilari         'Neuer',
// 'Pavard', 'Martinez', 'Alaba', 'Davies',         'Kimmich', 'Goretzka',
// 'Coman', 'Muller', 'Gnarby', 'Lewandowski'       ],       [  players[1] —
// Borussia Dortmund o'yinchilari         'Burki', 'Schulz', 'Hummels',
// 'Akanji', 'Hakimi',         'Weigl', 'Witsel', 'Hazard', 'Brandt',       ] ],
// score: '4:0',     scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
// 'Hummels'],     date: 'Nov 9th, 2037',     odds: {       team1: 1.33, x:
// 3.25,       team2: 6.5     }   };   const [players1, players2] =
// game.players;   console.log(players1, players2);   const [gk, ...fieldplayer]
// = players1;   console.log(gk, fieldplayer);   const allPlayers =
// [...players1, ...players2]   console.log(allPlayers);   const players1Final =
// [...players1, 'Thiago', 'Coutinho', 'Periscic']   console.log(players1Final);
// const {odds:{team1, x:draw, team2}}= game; console.log(team1, draw, team2);
// const printGoals = function(...players){     console.log(players);
// console.log(`${players.length} goals were scored`);   }; printGoals('Davies',
// 'Muller', ' Lewandowskiy', 'Kimmich'); printGoals('Davies', 'Muller',);
// printGoals(...game.scored);   team1<team2 && console.log('Team 1 is more
// likely to win') ;   team1>team2 && console.log('Team 2 is more likely to
// win') ;
//
//
//
//
//
//
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////

// const body = document.body;
// const button = document.createElement('button');
// const textArea = document.createElement('textarea');

// button.textContent = 'submit';

// body.append(textArea);
// body.append(button);

// button.addEventListener('click', function () {
//     const text = document
//         .querySelector('textArea')
//         .value;
//     console.log(text);
//     const rows = text.split('\n');
//     console.log(rows);

//     for (const [i, row] of rows.entries()) {
//         const [first, second] = row
//             .toLowerCase()
//             .trim()
//             .split('_');
//         if (!second) 
//             continue;
//         const camelCase = first + second[0].toUpperCase() + second.slice(1);
//         console.log(`${camelCase.padEnd(20)} ${ '✅'.repeat(i + 1)}`);
//     }
// });
//  ////////////////////////////////////////////////////////////////////
const flights ='_Delayed_Departure;fao93766109;txl2133758440;11:25 +_Arrival;bru0943384722;fao93766109;11:45 +_Delayed_Arrival;hel7439299980;fao93766109;12:05 +_Departure;fao93766109;lis2323639855;12:30';

// 🔴  Delayed Departure from  FAO to TXL 11h25 
//             Arrival from  BRU to FAO 11h45 
// 🔴 Delayed Arrival from  HEL to FAO 12h05 
//            Departure from  FAO to LIS 12h30

const flightList = flights.split('+');
console.log(flightList);

const getCode = str => str.slice(0,3).toUpperCase();
for (const flight of flightList) {
// console.log(flight);
const [type, from, to, time]= flight.split(';')
// console.log(type);

const result = `${type.startsWith('_Delayed')?'🔴': ''} ${type.replaceAll('_' , ' ')} from  ${getCode(from)} to ${getCode(to)} ${time.replace(':','h')}`.padStart(36);
console.log(result);

}
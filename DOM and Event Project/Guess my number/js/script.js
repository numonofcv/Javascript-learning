'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const dipslayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
let guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number';
   dipslayMessage('⛔ No number')
   //when players win
    }else if (guess === secretNumber) {
       // document.querySelector('.message').textContent = 'Correct Number !';   
       dipslayMessage('Correct Number !') 
       document.querySelector('.number').textContent=secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score>highScore) {
        highScore=score;
        document.querySelector('.highscore').textContent=highScore;
    }
}
    //when guess is wrong
    else if(guess !== secretNumber){
        if (score > 0) {
            //document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high Number !' : '📉 Too low Number !';
            dipslayMessage( guess > secretNumber ? '📈 Too high Number !' : '📉 Too low Number !');
        score--;
        document.querySelector('.score').textContent=score;
        }else{
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            dipslayMessage('💥 You lost the game!')
            document.querySelector('.score').textContent=0;
        }
    }

//    when player guess too high
    // }else if (guess > secretNumber) {
        
    //     //when players guess too low
    // }else if (guess < secretNumber) {
    //     if (score > 0) {
    //         document.querySelector('.message').textContent = '📉 Too low Number !';
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
});
document.querySelector('.again').addEventListener('click',function (){
    score=20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    // document.querySelector('.message').textContent = 'Start guessing!';
    dipslayMessage('Start guessing!... ')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
});








// console.log(document.querySelector('.message').textContent = 'Correct Number !');
// document.querySelector('.message').textContent = 'Correct Number !';

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value = 23);
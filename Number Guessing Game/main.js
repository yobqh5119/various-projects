/*
  Game Function:
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Notify the player of the correct answer if loose
  - Let player choose to play again
*/

// Game Variables
let guessLeft = 3,
    min = 1,
    max = 10,
    winningNum = randomNumber(min,max);

// UI variables
let minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num');

const game = document.querySelector('#game'),
      userGuess = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');


minNum.textContent = min;
maxNum.textContent = max;

// Listen to Events
guessBtn.addEventListener('click', play)

game.addEventListener('mousedown', (e)=>{
  if(e.target.className === "play-again"){
    window.location.reload();
  }
})

// Functions

  // play function
  function play(){
   let guess = parseInt(userGuess.value);

   // Check if the number guess is valid
   if(isNaN(guess) || guess > max || guess < min){
     sendMessage(`Please Enter In Number Between ${min} and ${max}`, 'red');
   }else{
     // Check if won
     if(guess === winningNum){
       gameOver(true,`You've got it right! The answer is ${winningNum}!`)
      }
     else{
      // Check if wrong
      if(guess != winningNum){
        if(guessLeft >= 2){
          guessLeft -= 1;
          sendMessage(`Try again! You have ${guessLeft} guess left!`,'red')
        }else{
          gameOver(false,`The correct answer was ${winningNum}. Best Lucnext time!`)
        }
      }
     }
   }
  }

  // game over function
  function gameOver(won,msg){
    won === true ? color = 'green' : color = 'red';

    userGuess.disabled = true;
    userGuess.style.borderColor = color;
    sendMessage(msg, color)

    // play again
    guessBtn.value = "Play Again"
    guessBtn.className = "play-again";
  }

  //sendMessage function
  function sendMessage(msg, color){
    message.textContent = msg;
    message.style.color = color;
    userGuess.style.borderColor = color;
  }

  // Random Number function
  function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

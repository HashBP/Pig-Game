'use strict';

let lable0 = document.querySelector('#score--0');
let lable1= document.querySelector('#score--1');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let currScore = 0;
let currPlayer = 0;
let Player0Sc=0;
let Player1Sc=0;
let randomNumber;

const rollBtn = document.querySelector('.btn--roll');
let diceImg = document.querySelector('.dice');
const holdBtn=document.querySelector('.btn--hold')
console.log(holdBtn)
const newBtn=document.querySelector('.btn--new')
////////////////////////////////////////
let funNew=()=>{
    Player0Sc=0;
    Player1Sc=0;
    currScore=0;
    currPlayer=0;

    lable0.textContent='00'
    lable1.textContent='00'
    document.querySelector('.current-score').textContent='00';
}
let funHold=()=>{
    console.log('currScore');
    if (Player0Sc>50) {
        document.querySelector('#name--0').textContent='PLAYER 1 WINS!!🥳🥳🥳'
    }
    else if (Player1Sc>50) {
        document.querySelector('#name--1').textContent='PLAYER 2 WINS!!🥳🥳🥳'
        
    }
    if (currPlayer===1) {
        Player1Sc+=currScore
        lable1.textContent=Player1Sc
        
        player1.classList.toggle('player--active');
        player0.classList.toggle('player--active');
        currScore = 0;
        document.querySelector(`#current--${currPlayer}`).textContent = currScore;
        currPlayer=0
        
    }
    else{
        Player0Sc+=currScore
        lable0.textContent=Player0Sc
        
        
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        currScore = 0;
        document.querySelector(`#current--${currPlayer}`).textContent = currScore;
        currPlayer=1
    }
}

let funRoll = () => {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${randomNumber}.png`;
  console.log('currScore');
  
  if (randomNumber === 1) {
    if (currPlayer === 0) {
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
      currScore = 0;
      document.querySelector(`#current--${currPlayer}`).textContent = currScore;
    } else {
      player1.classList.toggle('player--active');
      player0.classList.toggle('player--active');
      currScore = 0;
      document.querySelector(`#current--${currPlayer}`).textContent = currScore;
    }
    currPlayer = currPlayer === 0 ? 1 : 0;
  } else {
    currScore += randomNumber;
    document.querySelector(`#current--${currPlayer}`).textContent = currScore;
  }
};

///////////////////////////////////////////////

rollBtn.addEventListener('click', funRoll);
holdBtn.addEventListener('click', funHold);
newBtn.addEventListener('click', funNew);

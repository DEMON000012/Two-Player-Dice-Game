'use strict';
//intiliazation
let player1_score = 0;
let player1_ts = 0;
let player2_score = 0;
let player2_ts = 0;

const dicepic = document.querySelector('.dice');
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnfloat = document.querySelector('.btn--float');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

//restart fuction
function restart() {
  if (player1.classList.contains('player--active')) {
  }

  //player 2 active
  else {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
  }
  player1_score = 0;
  player1_ts = 0;
  player2_score = 0;
  player2_ts = 0;
  document.querySelector('#score--0').textContent = player1_score;
  document.querySelector('#score--1').textContent = player2_score;
  document.querySelector('#current--0').textContent = player1_ts;
  document.querySelector('#current--1').textContent = player2_ts;
  model.classList.add('hidden');
  overlay.classList.add('hidden');
  dicepic.classList.add('hidden');
}

//dicepic
dicepic.classList.add('hidden');

//dicroll
btnroll.addEventListener('click', function () {
  //random value generate
  let dicenumber = Math.trunc(Math.random() * 6) + 1;
  dicepic.classList.remove('hidden');
  dicepic.src = `dice-${dicenumber}.png`;

  //check value of dice
  if (dicenumber === 1) {
    //player 1 active
    if (player1.classList.contains('player--active')) {
      player1_ts = 0;
      document.querySelector('#current--0').textContent = player1_ts;
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }

    //player 2 active
    else {
      player2_ts = 0;
      document.querySelector('#current--1').textContent = player2_ts;
      player1.classList.add('player--active');
      player2.classList.remove('player--active');
    }
  }

  //if not equal to 1
  else {
    //player 1 active
    if (player1.classList.contains('player--active')) {
      player1_ts = player1_ts + dicenumber;
      document.querySelector('#current--0').textContent = player1_ts;
    }

    //player 2 active
    else {
      player2_ts = player2_ts + dicenumber;
      document.querySelector('#current--1').textContent = player2_ts;
    }
  }
});

//btn hold
btnhold.addEventListener('click', function () {
  //player 1 active
  if (player1.classList.contains('player--active')) {
    player1_score = player1_score + player1_ts;
    player1_ts = 0;
    document.querySelector('#current--0').textContent = player1_ts;
    document.querySelector('#score--0').textContent = player1_score;
    //if got 50
    if (player1_score >= 50) {
      model.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document.querySelector('.text').textContent = 'player 1 won the match 😍';
    }
    //less then 50
    else {
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
    }
  }
  //player 2 active
  else {
    player2_score = player2_score + player2_ts;
    player2_ts = 0;
    document.querySelector('#current--1').textContent = player2_ts;
    document.querySelector('#score--1').textContent = player2_score;
    //if got 50
    if (player2_score >= 50) {
      model.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document.querySelector('.text').textContent = 'player 2 won the match 😍';
    }
    //less then 50
    else {
      player1.classList.add('player--active');
      player2.classList.remove('player--active');
    }
  }
});

//floating button
btnfloat.addEventListener('click', restart);
//newgame
btnnew.addEventListener('click', restart);

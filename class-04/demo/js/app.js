'use strict';

console.log('It\'s connected!');

function greeting() {
    console.log('hi');
    console.log('bye');
}
greeting();

//Declare and initialize the variable correct Answers.
var correctAnswers = 0; 


//question one
//Greet the User.
var user = prompt("What is your name?"); 
   console.log(user + " , thank you for taking the time to visit my page!");
confirm(user + ", are you ready to start the quiz?  Don\'t be scared, you will do fine.");




//question two
var lochNess = prompt("Do I currently have four Loch Ness monsters in a fish tank?").toLowerCase();
    console.log(lochNess);
// [need to validate answer with yes/no or y/n]
if (lochNess === 'yes' || lochNess === 'y') {
  alert('That\'s right, I do have four Loch Ness Monsters!');
  correctAnswers++;
} else {
  alert('Actually I do have four dogs, I reccomend it.');
}



//question three
var livin = prompt("Did I live in Amman, Jordan for one month?").toLowerCase();
// [need to validate answer with yes/no or y/n]

if (livin === 'y' || livin === 'yes') {
alert('That\'s correct, I lived there for a month!');
correctAnswers++;
} else {
alert('Nope, I lived there for a month!');
}
//console log with an identifier.
console.log('Correct Answers', correctAnswers);

//Q Four
var age = 47;

for (var i = 0; i < 4; i++){
  var ageAnswer = prompt('How old is Craig? with dreads are deceptively difficult to tell!');
  if (ageAnswer == age) {
    alert('You got it right! Great job, partner. Craig is ' + age + '!')
    console.log('User response is ' + ageAnswer + ' to question 4')
    correctAnswers++;
    break;
  }
  else if (ageAnswer > age) {
    alert('You guessed a bit too high. Does he look that old?');
    console.log('User response is ' + ageAnswer + ' to question ');
  }
  else if (ageAnswer < age) {
    alert('You\'re a bit too low. I realize he is immature, but not that bad.');
    console.log('User response is ' + ageAnswer + ' to question 4');
  }
  else if (isNaN(ageAnswer) === true) {
    alert('That is not a number. You can\'t do that.');
    console.log('User response is ' + ageAnswer + ' to question 4');
  }
   if ((i === 3) && (ageAnswer !== age)) {
    alert('You\'ve run out of chances. Lee\'s ' + age + ', for the record!')
    console.log('User response is ' + ageAnswer + ' to question 6');
  }
}


//Question Five userCorrect = false;
var correctAnswers = 0;
var userCorrect = false;
var pokemon = ['pikachu', 'zubat', 'drowzee', 'onyx', 'charmander', 'snorlax'];

var guesses = 0;

while (guesses < 7) {
  var pokeAnswer = prompt('What Pokemon have I caught this week on PokemonGO?').toLowerCase();
  for (var i = 0; i < pokemon.length; i++) {
    if (pokeAnswer === pokemon[i]) {
      alert('You caught the right answer! Nice work! The ones he caught this week are: ' + pokemon);
      console.log('User response is ' + pokeAnswer + ' to question 4');
      guesses = 7;
      correctAnswers++;
      userCorrect = true;
      break;
    }
  }
  if (guesses !== 7) {
    alert('Not that one. You\'re not the very best, but try again!');
    console.log('User response is ' + pokeAnswer + ' to question 5');
  }
  guesses++;
}
if (userCorrect === false) {
  alert('Uh-Oh! You did not get any right, here is a list of ones that I caught. ' + pokemon + 'Better luck next time.');
  console.log('User response is ' + pokeAnswer + ' to question 5');
}

alert(user + ', you scored a total of ' + correctAnswers + ' out of 5');

console.log(user + 'scored a total of ' + correctAnswers + ' out of 5');


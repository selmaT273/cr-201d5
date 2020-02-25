'use strict';
//Do first.
console.log('This is working!');

var userName = prompt('What is your name?');
console.log(userName);
alert('Hello world, I mean ' + userName);

var lowerCaseName = userName.toLowerCase();

if(lowerCaseName === 'craig'){
  alert('Welcome back coder person ' + userName);
} else {
  alert('Welcome Back!');
}


// logical operator example
var myBooleenValueTrue = true;
var anotherBooleenValueFalse = false;
var thirdBooleenValueTrue = true;

// And = both conditions have to be true
if (myBooleenValueTrue && thirdBooleenValueTrue) {
  alert('The && will run if both conditions return true. And = both conditions have to be true');
  console.log('thirdBooleenValueTrue and thirdBooleenValur were both true')
}
// only one of these have to be true
else if (myBooleenValueTrue || anotherBooleenValueFalse) {
  alert('The || will run if one of the conditions return true.');
  console.log('the mybooleenValueTrue or anotherBooleenValueFalse was true!');
}
// only thirdBool can be true
else if (thirdBooleenValueTrue) {
  alert('The thirdBooleenValueTrue was true so this will run.');
  console.log('myBool and anotherBool were false, but thirdBool was true.');
}
// none of the above conditions were true
else {
  console.log('Were any of my variables true?');
}





alert('Welcome to 4 Part spaceship repair.');
var spaceHandle = prompt('What\'s your space name');
var spaceShipPart = prompt('What spaceship part do you need?, 1 through 4');

// convert the variable of color to lower case and evaluate it
switch (spaceShipPart) {
case '1':
  console.log('This is Part One.');
  break;
case '2':
  confirm(spaceHandle + 'you need Part Two?');
  alert(spaceHandle + 'You will recieve your part in two to three light years.');
  console.log('your favorite color was blue!');
  break;
case '3':
  alert('This is Part Three.');
  console.log('your favorite color was blue!');
  break;
case '4':
  alert('This is Part Four.');
  console.log('your favorite color was blue!');
  break;

default:
  alert('i don\'t know if your ship will ever fly again?,  ¯\_(ツ)_/¯');
}


alert('Bye for now ' + spaceHandle);





// Arrays that we looked at in class

// Create an empty array
// var emptyArray = [];

// // Create an array full of "quiz answers' by putting the values directly into a new array
// var quizAnswers = ['b', 'd', 'a', 'a', 'c'];

// // we can even create an array of arrays!
// var nestedArray = [ ['yes', 'y'], ['no', 'n'], ['no', 'n'] ];
// // this is exactly the same as the nestedArray above, except just formatted slightly different.
// var multiLineArray = [
//   ['yes', 'y'],
//   ['no', 'n'],
//   ['no', 'n']
// ];

// // we don't always have to commit to one data type in an array. here is an example of a mixed data type array.
// var mixedArray = ['Harry', 'Potter', 10, true, 'luxurious'];
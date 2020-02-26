'use strict';
console.log('this is connected');


//global variables go here.
// var userPoints = 0;


//Greet the user
// alert('Hello, and welcome to my guessing game?');
// var user = prompt('What is your Name?');
// var userName = user.toLowerCase();
//console.log(userName);
// the user variable 
// - string
// - null
// - ' ' empty

// If the user is empty string or null, keep asking them for their name. 
//  while(user === '' || user === null)
 //then there is a shorter version of this.

//  while(!user){
//      user = prompt('What is your name, PLEASE, provide, it, now!');
//  }


 // Control in JS

//  if(condition){...}
//  if(condition){...}else{....}
//  if(condtion){...}else if(condtion2){...}
//  if(condtion){...}else if(condtion2){...}else if(condition3){...}
//  if(condtion){...}else if(condtion2){...}else{....}

// this is the not equals comparison operator
// if(user !== 'craig'){
//     console.log(user);
//     alert('You are not the craig we are looking for.');
// }

// alert('Hello, ' + user + '! it is nice that you stopped by.');


// var answer = prompt('is my favorite food popcorn?', 'Type yes or no.').toLowerCase();
// console.log(answer);


//check to see if user answer is correct 
// if(answer === 'no' || answer === 'n'){
//     userPoints +=   200;
// } else {
//     alert('You are incorrect.');
// }
// alert('you have ' + userPoints + ' points');




// //Loop until condition turns truthy and or not-truthy.
// while(condition){condition has to change_ }

// do {..this run no matter what..} while(condition);

// for( setup; condition; change variable)

// for(var i = 0; i < someArray.lenght; i++){

// }

// var i = 0;
// while( i < value){
//     ....
//     i++;
// }

// var foodsILike = ['Chips','Pizza','Chicken','Chocolate'];
// console.log(foodsILike);


// for(var i = 0; i < foodsILike.length; i++){
//     console.log(foodsILike[i]);
// }


// var name;
// do {
//     console.log('I am running once, before checking my condition.');
//     name = prompt('Name?');
//     console.log('name', name);
// } while(!name);
// console.log(name);

/* 
Mulitple line comments. 
do more loooping 
- continue = means skip the rest of the iterations and go back to the beggining. 
// */
// for(var i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('Keep going past this number 2.');
//         continue;
//     } 
//     if(i === 4){
//         console.log('this is now breaking the loops.');
//         break;
//     }
//     console.log('the variable I = ', i);
// }

// falsy values are :
// - 0 
// - null
// - NaN
// - ''
// - undefined
// - false
// truthy values. ==== everything else.

// - (craig === 'instructor' || 'teacher')    => will not Worker

// - (craig === 'instructor' || craig === 'teacher')

// Comparison  operators 
// - < less than. 
// - > great than 
// - <= less than or equal to
// - >= great then or equal to
// - == kinda equals
// - != kinda not equals
// - === strictly equals
// - !== strictly not equals
// // console.log("Hritik Gupta");

// // var readlineSync = require("readline-sync");

// // var userName = readlineSync.question("What is your name? ");
// // console.log("Welcome " + userName);

// var readlineSync = require("readline-sync");

// var userAge = readlineSync.question("Is your age greater than 25? ")
// var score = 0;

// if (userAge == 'yes') {
//   console.log("You are Right!")
//   score = score + 1;
// }
// else {
//   console.log("You are Wrong!")
// }
// console.log("Your score is: " + score);

// function add(numberOne , numberTwo){
//   var result = numberOne + numberTwo;
//   return result;
// }

// console.log(add(2,5))

// var readlineSync = require("readline-sync");
// var score = 0;
// function play(question, answer) {
//   var userAnswer = readlineSync.question(question);
//   if (userAnswer === answer) {
//     console.log("You are right!");
//     score = score + 1;
//   }
//   else {
//     console.log("You are Wrong!");
//   }
//   console.log("Your score is: "+score);
//   console.log("--------");
// }

// play("Where Do I live? ", "Padrauna")
// play("What is my pets name? ", "Pattu")

// for(var i=0 ; i<=4; i++){
//   console.log("Hritik Gupta");
// }

// var readlineSync = require("readline-sync");
// var patternLimit = readlineSync.question("Enter the limit of your pattern: ")

// for (var i = 0; i < patternLimit; i++) {
//   for (var j = 1; j<=patternLimit - i; j++) {
//     console.log("*")
//   }
//  console.log("\n")
// }

// var groceryList = ["milk", 'eggs', "pencil", "chocolate", "cake"];

// function log(a) {
//   console.log(a);
// }

// console.log(groceryList[0]);
// console.log(groceryList[2]);
// console.log(groceryList[4]);
// console.log(groceryList[groceryList.length-1]);

// for (var i = 0; i < groceryList.length; i++) {
//   log(groceryList[i]);
// }

// var superman= {
//   name: "superman",
//   power: "flight",
//   strength: 10000,
//   stealth: 0,
//   costumeColor: "blue"
// }

// var batman = {
//   name: "batman",
//   power: "rich",
//   strength: 100,
//   stealth: 100,
//   costumeColor: "black"
// }

// console.log(superman.strength > batman.strength);



var readlineSync = require("readline-sync")
var userName = readlineSync.question("What is your Name? ")
console.log("Welcome "+ userName +" to Do You Know Hritik")
var score=0;
questionOne={
  question: "Where do I live? ",
  answer: "Padrauna"
}
questionTwo={
  question:"Who's my favorite superhero? ",
  answer: "Dhruv"
}

function play(question,answer){
  var readlineSync = require("readline-sync");
  var userAnswer = readlineSync.question(question)
  if(userAnswer===answer){
    console.log("You're right!")
    score= score+1;
  }
  else{
    console.log("You are wrong!")

  }
  console.log("Your score is: "+ score)
}

// Array Of objects

var questions=[questionOne={
  question: "Where do I live? ",
  answer: "Padrauna"
},
 {
  question:"Who's my favorite superhero? ",
  answer: "Dhruv"
}];

for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your final score is: "+ score);



// // const chalk = require("chalk");

// import chalk from 'package.json';



// console.log(chalk.blue('Hello world!'));


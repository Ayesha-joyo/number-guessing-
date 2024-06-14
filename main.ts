#! /usr/bin/env node
import inquirer from "inquirer"

//const randomNumber = 13;

//const answers = await inquirer.prompt([
    
    //{
     //   name:"userGuessNumber",
      //  type:"number",
       // message:"Please guess a number:",
        
          // },

//]);

//if(answers.userGuessNumber === randomNumber){
   // console.log("congratulations you guessed right number.");

//}else{
  //  console.log("You guessed wrong number");
//}

const randomNumber = Math.floor((Math.random() *10 + 1));//floor do round off
//console.log(randomNumber);//if we dont need 0 we add +1

const answers = await inquirer.prompt([{
   name:"userGuessNumber",
   type:"number",
   message:"Please guess a number 1-10 :",
},
]);

if(answers.userGuessedNumber === randomNumber){
   console.log("congratulatiions! you guessed right number.");
}else{
   console.log("You guessed wrong number");
}
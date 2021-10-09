const reader= require('readline-sync');
const chalk=require('chalk');
var score=0;

var questionsList= [
  {
    question: "\n How many Avengers movies are there? \n (a) 2 (b) 4 (c) 3  (d) 5   ",
    answer: "b"
  },
  {
    question: "\n How many Infinity stones are there? \n (a) 6 (b) 4  (c) 8   (d) 3   ",
    answer: "a"
  },
  {
    question: "\n Can Captain America lift Thor's hammer Mjolnir? \n (a) Yes (b) No   ",
    answer: "a"
  },
  {
    question: "\n What is the Wi-Fi password Karl Mordo hands to Doctor Strange? \n (a) Dormammu (b) Kamar-Taj (c) Shambala  (d) Agamotto   ",
    answer: "c"
  },
  {
    question: "\n Black Panther is set in which fictional country? \n (a) Wakanda  (b) Sokovia   ",
    answer: "a"
  }

]


function game(ques,ans){
  var answer= reader.question(chalk.blue(ques));

  if(ans.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.green("Correct"));
    score++;
  }
  else
    console.log(chalk.red("Wrong"));

  console.log(chalk.bgMagenta("Current score -- "+score+"  "));
}

console.log("\t \t \t \t \t "+chalk.bgRed(" MARVEL QUIZ "));
var name= reader.question("Enter your name : ");
console.log(chalk.bgGreen(" Welcome to the Marvel quiz "+name));

for(i=0;i<questionsList.length;i++)
game(questionsList[i].question,questionsList[i].answer);

console.log(chalk.cyanBright("\n FINAL SCORE "));
console.log(chalk.bgGreen(" "+name+" -- "+score+" "));

function init(){
console.log("linked");

var questionnaire = [

 {
   question: "Leonardo da Vinci was a painter, architect, inventor, and student of all things scientific.",
   answer: "true",
 }, {
   question: "Leonardo da Vinci painted Mona Lisa and The Last Supper.",
   answer: "true",
 }, {
   question: "Leonardo da Vinci's natural genius crossed so many disciplines that he epitomized the term 'Baroque Man'. ", // The answer is False: Renaissance man.
   answer: "true",
 }, {
   question: "Leonardo da Vinci's parents weren't married",
   answer: "true",
 }, {
   question: "Da Vinci has never received formal education beyond basic reading, writing and math.",
   answer: "true",
 }, {
   question: "Leonardo da Vinci died at age 71.",
   answer: "false",
 }, {
   question: "Leonardo da Vinci was buried in the church of Saint-Florentin.",
   answer: "true",
 }, {
 question: "Leonardo da Vinci was born on  15 April 1452",
 answer: "true",
},
{
  question: "Leonardo da Vinci does his work in Malaysia",
  answer: "false",
},
{
  question: "Leonardo da Vinci died in France",
  answer: "true",
},
{
  question: "Leonardo da Vinci was qualified for membership as master artist in NewYork",
  answer: "false",
},
{
  question: "Leonardo da Vinci painted 'Baptism of Christ'",
  answer: "true",
},
{
  question: "Leonardo da Vinci painted 'The Virgin Child with St Anne'",
  answer: "true",
},

];

// Linking the elements to the html document
var game = document.getElementById("containerz");
var showQuest = document.getElementById("questions");
var pointsP1 = document.getElementById("p1");
var pointsP2 = document.getElementById("p2");
var butTrue = document.getElementById("button1");
var butFalse = document.getElementById("button2");


var p1score = 0;
var p2score = 0;
var player = 1; // player 1 always starts first
var totalAskedQ = 0;
var currQuestionIndex;


// Run the Game
startGame();

//========== Add Button Listeners =================

var buttons = document.getElementsByClassName("button");

for (var i = 0; i < buttons.length; i++) {

  buttons[i].addEventListener("click", clickedAns);

}

//========Functions below =================
function clickedAns(event){
  // console.log(event.target.id);
  // console.log(event.target.innerHTML);
  increaseScore(event.target.innerHTML);
  if(!(totalAskedQ === 10)) {
    switchPlayer();
    nextQuestion();
  } else {
    //alert game over ?
    //reload page??
    // compare the winner

    //alert the winner
    //
    checkWinner();
  }

}

function checkWinner() {
  if (p1score > p2score ){
      alert ("player 1 wins");

  } else if ( p2score > p1score) {
      alert("player 2 wins");
  } else {
    alert("tie");
  }
  location.reload();
}


function startGame() {
nextQuestion ();
// checkAns();
}

//generate random question for 10 times
function generateRandomNumber(){
 return Math.floor(Math.random() * 10);
}

//Increases score of current player and display on html
function increaseScore(response) {
  console.log(typeof response);
  if (questionnaire[currQuestionIndex].answer === response) {
      if (player === 2){
        p2score++;
        pointsP2.innerHTML = "player two: "  + p2score;
        console.log(p2score);

      } else {
        p1score++;
        pointsP1.innerHTML = "player one: " + p1score;
        console.log(p1score);
      }
  }


}

//Switch current player to next player
function switchPlayer() {
    if (player === 1){
      player = 2;
      // toggle font size to show player's turn
      document.getElementById("p1").style.fontSize = "initial";
      document.getElementById("p2").style.fontSize = "x-large";

    } else {
      player = 1;
      // toggle font size to show player's turn
      document.getElementById("p1").style.fontSize = "x-large";
      document.getElementById("p2").style.fontSize = "initial";
    }
}

//Display the next question on html
function nextQuestion () {
  //first get next question from array
  currQuestionIndex = generateRandomNumber();
  var question = questionnaire[currQuestionIndex].question;
  //Display this new question in the html
  showQuest.innerHTML = questionnaire[currQuestionIndex].question;
  totalAskedQ++;

}

}
window.addEventListener("load", init , false);

console.log('test!');

/*------------ Constants ------------*/
// import { getNextQuestion } from "../js/questions.js"
import { questions } from "../js/questions.js"


/*------------ Variables ------------*/
let playerScore, currentQuestion, quizOver, letPerfectScore
// const questions = []

/*---- Cached Element References ----*/
const btnCategory1 = document.querySelector("#btn-category-1")
// const btnCategory2 = document.querySelector("#btn-category-2")
// const btnCategory3 = document.querySelector("#btn-category-3")
const questionContainer = document.querySelector
("#question-container")
const playerScore = document.querySelector
("#player-score")
const btnReset = document.querySelector
("#btn-reset")

/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', createQuestion)
btnReset.addEventListener('click', reset)


/*------------ Functions ------------*/
function createQuestion(){
  console.log('createQuestion fxn');
  // console.log(getNextQuestion())
  questionContainer.innerHTML = ''
  console.log('render fxn works')
  questions.forEach((ques,ans1,ans2,ans3,ans4) => {
    printQuestion(ques,ans1,ans2,ans3,ans4)
  })
  // render()
}

// function render(){ 
//   questionContainer.innerHTML = ''
//   // questionContainer.innerHTML = 'render fxn'
//   console.log('render fxn works')
//   // console.log(getNextQuestion())
//   questions.forEach((ques,ans1,ans2,ans3,ans4) => {
//     printQuestion(ques,ans1,ans2,ans3,ans4)
//   })
// }

function printQuestion(ques,ans1,ans2,ans3,ans4){
  console.log('printQuestion works')
  // console.log(ques,ans1,ans2,ans3,ans4)
  let questionDiv = document.createElement('div')
  questionDiv.className = `question-div`
  questionDiv.innerHTML = // `test inside questionDiv`
  `<div>
  <p>${ques}</p>
  <p>${ans1}</p>
  <p>${ans2}</p>
  </div>`
  console.log('printQuestion works')
  questionContainer.appendChild(questionDiv)
}

// const singleQuestion = questions.map(){
//   const transformedQuestion = { name: student, studentNum: index + 1, enrolled: true }
//   return transformedQuestion
// }


function init(){
  playerScore = null
  currentQuestion = null
  quizOver = false
  letPerfectScore = false
  // render()
}
// init()

function reset(){
  init()
}

function updateBoard(){
}

function updateScore(){
}



//next:
//get questions to print out in HTML
// how to proceed to next object in array for questions
//click category, make tagline, rules, and category buttons disappear



// QUESTIONS - container vs div?



// BELOW IS ORIGINAL PSEUDOCODE - the order i wrote things in ended up confusing me - i should have written in order of steps. making some big pivots in code so some are irrelevant - after i get basic functionality better, will come back & try to utilize some of these.

// PSEUDOCODE
// // 1) Define the required variables used to track the state of the game - GAME STATE
// // -scorecard / player score - let playerScore 
// // -which question player is on - let currentQuestion
// // -final score / quiz complete - let quizOver (??Maybe not? Since there is no “win state”, only a finite amount of questions)
// // -(maybe separate action for PERFECT score - letPerfectScore)

// 2) Store cached element references
//	// -container for question & answers
// 	-multiple-choice buttons - eliminated until correct answer is selected 
// 		-(points deducted for incorrect answers?)
// // 	-separate file for data (prompts/answers) - NOT cached element - it's a separate data file

// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state
// // 	-init function - reset to beginning welcome page, reset score to 0
// // 		-render function at end of init
// 		-(ICEBOX) (possible to choose next category without resetting to the welcome page? I.e. continue onto another category from results page? Or too complex for me at the moment?)
// // 	-player will choose category, then hit “begin” button - altered: category choice itself begins game, NO BEGIN BUTTON

// 4) The state of the game should be rendered to the user
// // 	-updateBoard (to display each new question)
// // 	-updateScore (after each question)
// 	-timer?? Resets for each question, or for entire category (does this belong here?)
// 	-quizOver - final state, displays score, choices of other categories to try


// 5) Define the required constants
// // 	-correct answer for each quiz question

// 6) Event listeners
//   	-handleClick with evt parameter
// 		-play sound when selecting choices (diff sound for incorrect/correct)
// 		-(ICEBOX) deduct points for incorrect answer
// 		-add points & move to next question upon correct answer	
// 		-reset board, or go to next category

// 7) Create Reset functionality
// 	-reset button to HTML (also as cached element, & event listener)

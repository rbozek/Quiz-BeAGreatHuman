console.log('test!');

/*------------ Constants ------------*/
// import { getNextQuestion } from "../js/questions.js"
// import { questions } from "../js/questions.js"
const questionsCat1 = [
  {
    quesQs: "What do you do etc etc?",
    quesAs: { 
      A: "A - be rude",
      B: "B - be nice",
      C: "C - be crude",
      D: "D - be tude"
    },
    correctAnswer: "B"
  },
  {
    question: "Question #2?",
    answers: { 
      A: "help people",
      B: "hurt people",
      C: "kill people",
      D: "steal someones car"
    },
    correctAnswer: "A"
  },
  {
    question: "Question #3?",
    answers: { 
      A: "bad friend",
      B: "no friend",
      C: "donut stealer",
      D: "Good friend"
    },
    correctAnswer: "D"
  },
]


/*------------ Variables ------------*/
// let currentQuestion
// let quizOver, letPerfectScore

/*---- Cached Element References ----*/
const btnCategory1 = document.querySelector("#btn-category-1")
// const btnCategory2 = document.querySelector("#btn-category-2")
// const btnCategory3 = document.querySelector("#btn-category-3")
const questionContainer = document.querySelector("#question-container")
// const btnPlayerSubmit = document.querySelector("#player-submit")
// const btnReset = document.querySelector("#btn-reset")

/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', createQuestionsCat1)
// btnPlayerSubmit.addEventListener('click', playerSubmit)
// btnReset.addEventListener('click', reset)


/*------------ Functions ------------*/
function createQuestionsCat1(){
  // blanked on this step, got idea from online ref:
  const overallOutput = [];
  questions.forEach((currentQuestion, questionNumber) => {
    console.log(currentQuestion.quesQs);
    console.log(currentQuestion.quesAs);
    console.log(questionNumber);
    // same deal, couldnt figure this out til I saw it:
    // const answers = [];
    // let eachQuestionDiv = document.createElement('div')
    // eachQuestionDiv.className = `each-question-div`
    // let overallOutput  
    overallOutput.push(
      // 'testing push'
      // `<div class="question">  'test q' </div>
      // <div class="answers">  test a </div>`
      `<div class="question"> ${currentQuestion.quesQs} test q </div>
      <div class="answers"> ${currentQuestion.quesAs} test a </div>`
    )
    questionContainer.innerHTML = overallOutput
    questionContainer.appendChild(eachQuestionDiv)
  })
  // questionContainer.innerHTML = ''
  // console.log('render fxn works')
}


// original, from 
// function createQuestionsCat1(){
//   // blanked on this step, got idea from online ref:
//   const overallOutput = [];
//   questions.forEach((currentQuestion, questionNumber) => {
//     console.log(currentQuestion.quesQs);
//     console.log(currentQuestion.quesAs);
//     console.log(questionNumber);
//     // same deal, couldnt figure this out til I saw it:
//     // const answers = [];
//     // let eachQuestionDiv = document.createElement('div')
//     // eachQuestionDiv.className = `each-question-div`
//     // let overallOutput  
//     overallOutput.push(
//       // 'testing push'
//       // `<div class="question">  'test q' </div>
//       // <div class="answers">  test a </div>`
//       `<div class="question"> ${currentQuestion.quesQs} test q </div>
//       <div class="answers"> ${currentQuestion.quesAs} test a </div>`
//     )
//     questionContainer.innerHTML = overallOutput
//     questionContainer.appendChild(eachQuestionDiv)
//   })
//   // questionContainer.innerHTML = ''
//   // console.log('render fxn works')
// }

//render function got rid of, prob unneccesary step
// function render(){ 
//   questionContainer.innerHTML = ''
//   // questionContainer.innerHTML = 'render fxn'
//   console.log('render fxn works')
//   // console.log(getNextQuestion())
//   questions.forEach((ques,ans1,ans2,ans3,ans4) => {
//     printQuestion(ques,ans1,ans2,ans3,ans4)
//   })
// }


// saved dead code - initial attempt at printing question, too complicated
// function printQuestion(ques,ans1,ans2,ans3,ans4){
//   console.log('printQuestion works')
//   // console.log(ques,ans1,ans2,ans3,ans4)
//   let questionDiv = document.createElement('div')
//   questionDiv.className = `question-div`
//   questionDiv.innerHTML = // `test inside questionDiv`
//   `<div>
//   <p>${ques}</p>
//   <p>${ans1}</p>
//   <p>${ans2}</p>
//   </div>`
//   console.log('printQuestion works')
//   questionContainer.appendChild(questionDiv)
// }

// early attempt at populating Q&A's - not what i need
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

//??
//init function vs reset, not sure what elements needed for what here.


//next:
// move questions into app.js (big array of objects, each object k:v pairs)
// ??CATEGORIES - separate question array for each??? (category1, category 2, etc)
  // fix/finish createQuestionsCat1 to print questions & answers
  // -> user will choose answers for ALL questions  (radio buttons best for now? - consider normal buttons)
  // create "submit answers" button  ->  (cached el reference?) & event listener 
  //  ->  loop thru submitted answers (one of k:v pairs from my objects) (for loop or forEach?) -> 
  // add points to playerScore for correct answers -> compare playerChoice with correctAnswer, if === then add points, else then nothing
  //  -> display playerScore

// when user selects category, tagline, rules, & category buttons disappear -> at any point "reset" button starts us over
// reset button - cached el & event listener & function - best way to reset to initial state?? (init function? seemed extra layer of complication)

// -> do same setup for other categories & questions

// timer for entire category, not each question
// ** sounds: sound for button clicks, add sound for playerScore, and diff sound for perfect score  ->  button to turn off sounds??
// ** images: favicon to page, monk image for top of page before game starts / (icebox, below - images replace radio buttons?)
// color scheme: warm colors


// LAST
// assemble written questions from other computer doc
// readme! 



// ICEBOX OR ATTEMPT?
// replace radio buttons with images
// CATEGORIES -> after finishing 1st category & seeing score, user can proceed to the other categories & keep updating their total score
// one question at a time instead of listing all at once ->  
    // -> SCORE - each question responds immediately to user choice - max points for correct 1st guess, subtract points for each incorrect guess
    // timer for each individual question
// perfect score shows a secret page!





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

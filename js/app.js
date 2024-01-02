// console.log('overall test!');

/*------------ Constants ------------*/
// import { getNextQuestion } from "../js/questions.js"
// import { questions } from "../js/questions.js"
const questionsCat1 = [
  {
    quesQs: "What do you do etc etc?",
    quesAs: [ 
      { answer1: 'be rude', correctAnswer: false },
      { answer2: 'be nice', correctAnswer: true },
      { answer3: 'be crude', correctAnswer: false },
      { answer4: 'be tude', correctAnswer: false },
    ]
  },
  {
    quesQs: "QUestion 2, what's good to do??",
    quesAs: [ 
      { answer1: 'help people', correctAnswer: true },
      { answer2: 'hurt people', correctAnswer: false },
      { answer3: 'kill people', correctAnswer: false },
      { answer4: 'steal someones car', correctAnswer: false },
    ]
  },
  {
    quesQs: "#3, who's a good person to have around?",
    quesAs: [ 
      { answer1: 'bad friend', correctAnswer: false },
      { answer2: 'no friend', correctAnswer: false },
      { answer3: 'donut stealer', correctAnswer: false },
      { answer4: 'Good friend', correctAnswer: true },
    ]
  },
]


/*------------ Variables ------------*/
let currQuestionIdx, playerScore // use in init or render

/*---- Cached Element References ----*/
const btnCategory1 = document.querySelector("#btn-category-1")
// const btnCategory2 = document.querySelector("#btn-category-2")
// const btnCategory3 = document.querySelector("#btn-category-3")
const questionContainer = document.querySelector("#question-container")
// const btnPlayerSubmit = document.querySelector("#player-submit")
// const btnReset = document.querySelector("#btn-reset")

/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionsCat1)
// btnPlayerSubmit.addEventListener('click', playerSubmit)
// btnReset.addEventListener('click', reset)


/*------------ Functions ------------*/

function renderQuestionsCat1() {

  // console.log('create questions button works');
  questionContainer.innerHTML = ''
  // questionContainer.innerHTML = 'innerHTML works'
  questionsCat1.forEach(singleQuestion => {

    let renderedQuestion = document.createElement('div')
    renderedQuestion.textContent = `${singleQuestion.quesQs}`
    questionContainer.appendChild(renderedQuestion)
    console.log(singleQuestion.quesQs);


    let renderedAnswer = document.createElement('div')
    renderedAnswer.textContent = `${singleQuestion.quesAs.answer1}`
    //next prob:  for above line ${singleQuestion.quesAs.forEach}

    questionContainer.appendChild(renderedAnswer)
    console.log(singleQuestion.quesAs[0]);
    // let renderedAnswer = document.createElement('div')
    // renderedAnswer.textContent = `${singleQuestion.quesAs[0].answer1}`
    // questionContainer.appendChild(renderedAnswer)
    // console.log(singleQuestion.quesAs[0]);


  })
  
}


function init(){
  playerScore = null
  currQuestionIdx = null
  // quizOver = false
  // letPerfectScore = false
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
// CATEGORIES - separate question array for each (category1, category 2, etc)
// fix/finish createQuestionsCat1 to print questions & answers -> get question to print in console -> print HTML -> get answers to print in console > print HTML


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

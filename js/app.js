console.log('test!');

/*------------ Constants ------------*/


/*------------ Variables ------------*/
let playerScore, currentQuestion, quizOver, letPerfectScore

/*---- Cached Element References ----*/


/*--------- Event Listeners ---------*/


/*------------ Functions ------------*/
function init(){
  render()
}
// init()

function render(){ 
}

function updateBoard(){
}

function updateScore(){
}



//next:
//click category, make tagline, rules, and category buttons disappear

// QUESTIONS
// ** container vs div?

// PSEUDOCODE
// // 1) Define the required variables used to track the state of the game - GAME STATE
// // -scorecard / player score - let playerScore 
// // -which question player is on - let currentQuestion
// // -final score / quiz complete - let quizOver (??Maybe not? Since there is no “win state”, only a finite amount of questions)
// // -(maybe separate action for PERFECT score - letPerfectScore)

// 2) Store cached element references
// 	-container for question & answers
// 	-multiple-choice buttons - eliminated until correct answer is selected 
// 		-(points deducted for incorrect answers?)
// 	-separate file for data (prompts/answers) (is this cached element reference?)

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
// 	-correct answer for each quiz question

// 6) Event listeners
// 	-handleClick with evt parameter
// 		-play sound when selecting choices (diff sound for incorrect/correct)
// 		-(ICEBOX) deduct points for incorrect answer
// 		-add points & move to next question upon correct answer	
// 		-reset board, or go to next category

// 7) Create Reset functionality
// 	-reset button to HTML (also as cached element, & event listener)

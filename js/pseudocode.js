//??
//init function vs reset, not sure what elements needed for what here.


//next:
// // move questions into app.js (big array of objects, each object k:v pairs)
// CATEGORIES - separate question array for each (category1, category 2, etc)
// // fix/finish createQuestionCat1 to print questions & answers one at a time! - w Jackson's help
// //   created global varible for current question (outside)
// //   create variable for single question, use that variable to print Q
// //   new varibale for array of answers, loop thru array & create LI, add text to LI, and append LI to parent UL
// //   at bottom: for loop to affect global variable currentQuesIdx
// // NOT DOING ANYMORE: create "submit answers" button  ->  (cached el reference?) & event listener 
// // first thing - try to put questions back in sep data doc. (for proj requirement - or ask?)

// // from engineering thread in Slack: 
  // // for "clicking answers" - add event listener at same time when answers are printed!
  // //  move for loop to update global variable
// // get LI's clickable / - event listener for those


// // finish function for chooseAnswer - that's where we'll use conditional to see if it matches "true" from quesAs?
// update playerScore - compare playerChoice with correctAnswer, if === then add points, else then nothing
  // & display playerScore
// end-game scenario when a Category is finished! 

// when user selects category, tagline, rules, & category buttons disappear -> at any point "reset" or init button starts us over
  // reset button / init
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

// //next:
// // move questions into app.js (big array of objects, each object k:v pairs)
// // CATEGORIES - separate question array for each (category1, category 2, etc)
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
// // update playerScore - compare playerChoice with correctAnswer, if === then add points, else then nothing
  // // & display playerScore


// // end-game scenario when a Category is finished! 

// // when user selects category, tagline, rules, & category buttons disappear -> at any point "reset" or init button starts us over
  // // reset button / init

// // PROBLEM - 'reset game' resets board, but then cant populate any new questions - probably has to do with TypeError that appears after I finish a category
// //   -line 99! I think ChatGPT came up with a gurd idear! (saved bookmark)
// // PROBLEM - FIXED!--I have "rulesBtnDiv.innerHTML" inside function ONLY FOR CATEGORY 1 - but for some reason it activates even if i'm using category 2 - im calling cat1() inside playerAnswer too! DAMMIT! how can i get that global? - FIXED!!! conditional 

// // -Check playerScore!! might be a little wonky

// // timer for entire category, not each question
// // ** sounds: sound for button clicks, add sound for playerScore, and diff sound for perfect score  ->  button to turn off sounds??

// // fix timer issue!
// // fonts! (quick)
// // ** images: favicon to page DONE, monk image for top of page before game starts
// // mouse pointer, li mouse selects whole thing
// // README! can use "badges" for technology used & credits (inside Course SUpplements > GitHub Beautifuication (2nd link has nicer looking ones)
// .gitignore or .env for dead code!

// FIX THT LITTLE BLACK BOX ISUE!! SO CLOSE!!
// min-width on big container for short questions

CIRCLE BACK IF IM MENTALLY ABLE TO:
-button styles & hover
-fonts
-flexbox fancier
-meditate image go underneath h1 & h2 a bit  (position relative, z-index)

-Put rules & category buttons on top of meditate image
-have score, timer, and reset game buttons appear once game starts



// IF I HAVE TIME - BIG
// clearing Q's and A's - diditn mess with it for fear of breaking it - but see if i can display.none instead of innerHTML (but might make a mess with reest? idk)
// // seaprate "rules" & "buttons" - when user starts, everything disappears, but after a reset, only buttons re-appear
// // perfect score make more exciting - if player perfect score, hidden image or page!




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


// let startTimer = setInterval(function() {
//     countdown.textContent = timeLeft + ' seconds remaining.'
//     timeLeft -= 1
//     if (timeLeft < 0) {
//         countdownEl.textContent = 'Finished!'
// 				confetti.start(500)
//     }
// }, 1000)



let currQuestionIdx=0  ->  this would icnrement up as we go thru next questions
could also do for   let score = 0  -> same idea, to keep adding to score
render question method would put questions into (renderedQuestion)

//array of objects
BENS ORIG IDEA - SWITCHING BACK TO THIS
const questionsCat1 = [
  {
    quesQs: "What do you do etc etc?",
    quesAs: [ 
      { answer: 'be rude', correctAnswer: false },
      { answer: 'be nice', correctAnswer: true },
      { answer: 'be crude', correctAnswer: false },
      { answer: 'be tude', correctAnswer: false },
    ]
  },
  {
    quesQs: "QUestion 2, what's good to do??",
    quesAs: [ 
      { answer: 'help people', correctAnswer: true },
      { answer: 'hurt people', correctAnswer: false },
      { answer: 'kill people', correctAnswer: false },
      { answer: 'steal someones car', correctAnswer: false },
    ]
  },
  {
    quesQs: "#3, who's a good person to have around?",
    quesAs: [ 
      { answer: 'bad friend', correctAnswer: false },
      { answer: 'no friend', correctAnswer: false },
      { answer: 'donut stealer', correctAnswer: false },
      { answer: 'Good friend', correctAnswer: true },
    ]
  },
]




2nd method, cleaner but will make more problems later
const questionsCat1 = [
  {
    quesQs: "What do you do etc etc?",
    correctAnswerIdx: 1,
    quesAs: [ 
      { answer1: 'be rude' },
      { answer2: 'be nice' },
      { answer3: 'be crude' },
      { answer4: 'be tude' },
    ]
  },
  {
    quesQs: "Question #2?",
    correctAnswerIdx: 0,
    quesAs: [ 
      { answer1: 'help people' },
      { answer2: 'hurt people' },
      { answer3: 'kill people' },
      { answer4: 'steal someones car' },
    ]
  },
  {
    quesQs: "Question #3?",
    correctAnswerIdx: 3,
    quesAs: [ 
      { answer1: 'bad friend' },
      { answer2: 'no friend' },
      { answer3: 'donut stealer' },
      { answer4: 'Good friend' },
    ]
  },
]





MY ORIG WAY:
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


from 1/3 @ 1:40 PM - saving in case i need to go back to anyting - from when i was adding click by adding LI id's
/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionCat1)
// eachAnswer.addEventListener('click', playerChooseAnswer)

// tried for loop, when I was adding CLASS to li's instead of ids
// for (let idx = 0; idx < eachAnswer.length; idx++) {
//     eachAnswer[idx].addEventListener('click', function() {
//         console.log('eachAnswer ' + (idx) + ' clicked!');
//       });
//     }


/*------------ Functions ------------*/
function renderQuestionCat1() {
  //create variable to hold just one specific question (indicated by currentQuesIdx)
  const singleQuestion = questionsCat1[currentQuesIdx]
  //then use that new variable to access the question & print it
  question.textContent = `${singleQuestion.quesQs}`
  
  //create variable to hold all answers to given question - now this holds an array of objects
  const answersToSingleQuestion = singleQuestion.quesAs
  // console.log(answersToSingleQuestion);
  
  //loop through quesA's array, for each create LI & add text to LI & append LI to parent
  answersToSingleQuestion.forEach((eachA) => {
    let renderedAnswer = document.createElement('li')
    
    // initial attempty
    // add class to each li:
    // renderedAnswer.setAttribute('class', 'answer-li');
    // OR id to each li
    // renderedAnswer.setAttribute('id', 'answer-li');
    
    renderedAnswer.textContent = `${eachA.answer}`
    answers.appendChild(renderedAnswer)
    // console.log(renderedAnswer);
  })
  
  //loop to update GLOBAL currentQuesIdx - Ben recs: want to increment the currentQuesIdx only after a player has made a guess, not all at once like this
  // for (let i = 0; i < questionsCat1.length; i++){
  //   currentQuesIdx += 1
  //   console.log(currentQuesIdx);
  }




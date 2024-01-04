// console.log('overall test!');

/*------------ Constants ------------*/
import { questionsImportCat1, questionsImportCat2, questionsImportCat3 } from "../js/questions.js"
const questionsCat1 = Object.values(questionsImportCat1);
const questionsCat2 = Object.values(questionsImportCat2);
const questionsCat3 = Object.values(questionsImportCat3);
// console.log(questionsCat1); 


/*------------ Variables ------------*/
let playerScore = 0  // can reset in init or render
let currentQuesIdx = 0
let currQuesCorrAnsIdx  // for playerChooseAnswer



/*---- Cached Element References ----*/
const btnCategory1 = document.getElementById("btn-category-1")
const btnCategory2 = document.getElementById("btn-category-2")
const btnCategory3 = document.getElementById("btn-category-3")
const question = document.getElementById("question-p")
const answers = document.getElementById("answers-ul")
const btnReset = document.getElementById("btn-reset")
const playerScoreContainer = document.getElementById("player-score")



/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionCat1)
btnCategory2.addEventListener('click', renderQuestionCat2)
btnCategory3.addEventListener('click', renderQuestionCat3)

btnReset.addEventListener('click', reset)


/*------------ Functions ------------*/

function renderQuestionCat1() {
  let singleQuestion = questionsCat1[currentQuesIdx]    //HOLDS ONE SPECIFIC QUESTION:
  question.textContent = `${singleQuestion.quesQ}`
  let answersToSingleQuestion = singleQuestion.quesAs  //HOLDS ARRAY OF ANSWERS:
  answersToSingleQuestion.forEach((eachA, index) => {     //loop through quesA's
    if (eachA.correctAnswer == true) {   // to log answer index for current question
      currQuesCorrAnsIdx = index;     // ^^ global!!!
    }
    let renderedAnswer = document.createElement('li')
    renderedAnswer.textContent = `${eachA.answer}`
    //can take advantage of bubbling by adding to container, but keeping here for now:
    renderedAnswer.addEventListener('click', playerChooseAnswer)
    answers.appendChild(renderedAnswer)
  })
}
function renderQuestionCat2() {
  let singleQuestion = questionsCat2[currentQuesIdx]    //HOLDS ONE SPECIFIC QUESTION:
  question.textContent = `${singleQuestion.quesQ}`
  let answersToSingleQuestion = singleQuestion.quesAs  //HOLDS ARRAY OF ANSWERS:
  answersToSingleQuestion.forEach((eachA, index) => {     //loop through quesA's
    if (eachA.correctAnswer == true) {   // to log answer index for current question
      currQuesCorrAnsIdx = index;     // ^^ global!!!
    }
    let renderedAnswer = document.createElement('li')
    renderedAnswer.textContent = `${eachA.answer}`
    //can take advantage of bubbling by adding to container, but keeping here for now:
    renderedAnswer.addEventListener('click', playerChooseAnswer)
    answers.appendChild(renderedAnswer)
  })
}
function renderQuestionCat3() {
  let singleQuestion = questionsCat3[currentQuesIdx]    //HOLDS ONE SPECIFIC QUESTION:
  question.textContent = `${singleQuestion.quesQ}`
  let answersToSingleQuestion = singleQuestion.quesAs  //HOLDS ARRAY OF ANSWERS:
  answersToSingleQuestion.forEach((eachA, index) => {     //loop through quesA's
    if (eachA.correctAnswer == true) {   // to log answer index for current question
      currQuesCorrAnsIdx = index;     // ^^ global!!!
    }
    let renderedAnswer = document.createElement('li')
    renderedAnswer.textContent = `${eachA.answer}`
    //can take advantage of bubbling by adding to container, but keeping here for now:
    renderedAnswer.addEventListener('click', playerChooseAnswer)
    answers.appendChild(renderedAnswer)
  })
}

function playerChooseAnswer(evt){
  let selectedAnsIdx = Array.from(answers.children).indexOf(evt.target); // this line answers.children from ChatGPT!
  if (selectedAnsIdx == currQuesCorrAnsIdx){
    console.log('correct answer selected');
    playerScore += 1
    playerScoreContainer.textContent = `${ playerScore }`
  } else  {
    console.log('incorrect answer selected');
  }  

  currentQuesIdx += 1
  if (currentQuesIdx >= questionsCat1.length || currentQuesIdx >= questionsCat2.length || currentQuesIdx >= questionsCat3.length) {
    roundOver()
  } 
  question.textContent = '' // this line isnt needed?
  answers.innerHTML = ''
  renderQuestionCat1()
}


function roundOver(){
  console.log('testing gameover state');
  playerScoreContainer.innerHTML = `Your score is:<br> ${ playerScore } <br> Nice work.`

}

function init(){
  console.log('reset button works');
  // playerScore = 0
  // playerScoreContainer.textContent = `${playerScore}`
  currentQuesIdx = 0
  // quizOver = false
  // letPerfectScore = false
}

function reset(){
  init()
}


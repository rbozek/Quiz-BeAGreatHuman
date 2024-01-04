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
let currentCategory  // to fix problem in renderQUestion & playerCHoice


/*---- Cached Element References ----*/
const btnCategory1 = document.getElementById("btn-category-1")
const btnCategory2 = document.getElementById("btn-category-2")
const btnCategory3 = document.getElementById("btn-category-3")
const question = document.getElementById("question-p")
const answers = document.getElementById("answers-ul")
const btnReset = document.getElementById("btn-reset")
const rulesBtnDiv = document.getElementById("rules-btn-container")
let initialState = rulesBtnDiv.innerHTML;  //  for eventual game reset
const playerScoreContainer = document.getElementById("player-score")
let initialScoreState = playerScoreContainer.innerHTML;
const countdown = document.getElementById("countdown")

/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionCat1)
btnCategory2.addEventListener('click', renderQuestionCat2)
btnCategory3.addEventListener('click', renderQuestionCat3)
btnReset.addEventListener('click', reset)


/*------------ Functions ------------*/
function renderQuestionCat1() {
  rulesBtnDiv.innerHTML = ''
  currentCategory = 1 // to fix problem at end of playerChooseAnswer
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
  rulesBtnDiv.innerHTML = ''
  currentCategory = 2 // to fix problem at end of playerChooseAnswer
  let singleQuestion = questionsCat2[currentQuesIdx] 
  question.textContent = `${singleQuestion.quesQ}`
  let answersToSingleQuestion = singleQuestion.quesAs 
  answersToSingleQuestion.forEach((eachA, index) => {  
    if (eachA.correctAnswer == true) { 
      currQuesCorrAnsIdx = index; 
    }
    let renderedAnswer = document.createElement('li')
    renderedAnswer.textContent = `${eachA.answer}`
    renderedAnswer.addEventListener('click', playerChooseAnswer)
    answers.appendChild(renderedAnswer)
  })
}
function renderQuestionCat3() {
  rulesBtnDiv.innerHTML = ''
  currentCategory = 3 // to fix problem at end of playerChooseAnswer
  let singleQuestion = questionsCat3[currentQuesIdx]
  question.textContent = `${singleQuestion.quesQ}`
  let answersToSingleQuestion = singleQuestion.quesAs  
  answersToSingleQuestion.forEach((eachA, index) => {   
    if (eachA.correctAnswer == true) {  
      currQuesCorrAnsIdx = index;    
    }
    let renderedAnswer = document.createElement('li')
    renderedAnswer.textContent = `${eachA.answer}`
    renderedAnswer.addEventListener('click', playerChooseAnswer)
    answers.appendChild(renderedAnswer)
  })
}

function playerChooseAnswer(evt){
  let selectedAnsIdx = Array.from(answers.children).indexOf(evt.target); // this line answers.children from ChatGPT!
  if (selectedAnsIdx == currQuesCorrAnsIdx){
    console.log('correct answer selected');
    playerScore += 1
    playerScoreContainer.innerHTML = `Your score:<br>${ playerScore }`
  } else  {
    console.log('incorrect answer selected');
  }  

  // THIS IS THE ISSUE I'M TRYING TO SOLVE - 
  if (currentQuesIdx < questionsCat1.length || currentQuesIdx < questionsCat2.length || currentQuesIdx < questionsCat3.length) {
    currentQuesIdx += 1
  } 
  if (currentQuesIdx >= questionsCat1.length || currentQuesIdx >= questionsCat2.length || currentQuesIdx >= questionsCat3.length) {
    roundOver()
  } 
  
  question.textContent = '' 
  answers.innerHTML = ''

  if (currentCategory === 1) {
    renderQuestionCat1();
  } else if (currentCategory === 2) {
    renderQuestionCat2();
  } else if (currentCategory === 3) {
    renderQuestionCat3();
  }
}

function roundOver(){
  console.log('testing gameover state');
  if (playerScore >= 3) {
    playerScoreContainer.innerHTML = `Your score is:<br> ${ playerScore } <br> Perfect. You are an evolved human.`
  } else if (playerScore < 3 && playerScore > 1) {
    playerScoreContainer.innerHTML = `Your score is:<br> ${ playerScore } <br> Nice work. Keep practicing (at life).`  
  } else {
    playerScoreContainer.innerHTML = `Your score is:<br> ${ playerScore } <br> No offense but you might be a bad person.`  
  }
}

function init(){
  // console.log('Initial State:', initialState);
  rulesBtnDiv.innerHTML = initialState;
  // console.log('After Reset:', rulesBtnDiv.innerHTML);
  playerScoreContainer.innerHTML = initialScoreState;
  question.textContent = '' // this line isnt needed?
  answers.innerHTML = ''
  currentQuesIdx = 0
  playerScore = 0
}
function reset(){
  init()
}


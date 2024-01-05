
/*------------ Constants ------------*/
import { questionsImportCat1, questionsImportCat2, questionsImportCat3 } from "./data.js"
const questionsCat1 = Object.values(questionsImportCat1);
const questionsCat2 = Object.values(questionsImportCat2);
const questionsCat3 = Object.values(questionsImportCat3);
import * as gameAudio from "./audio.js"


/*------------ Variables ------------*/
let playerScore = 0  // can reset in init or render
let currentQuesIdx = 0
let currQuesCorrAnsIdx  // for playerChooseAnswer
let currentCategory  // to fix problem in renderQUestion & playerCHoice
let timerSeconds, timerInterval

/*---- Cached Element References ----*/
const btnCategory1 = document.getElementById("btn-category-1")
const btnCategory2 = document.getElementById("btn-category-2")
const btnCategory3 = document.getElementById("btn-category-3")
const question = document.getElementById("question-p")
const answers = document.getElementById("answers-ul")
const btnReset = document.getElementById("btn-reset")
btnReset.style.display = 'none' // THIS TESTING

const rulesBtnsDiv = document.getElementById("rules-btns-container")
const btnContainer = document.getElementById("buttons-container") // for playClick audio purposes
const questionContainer = document.getElementById("question-container") // fix for "question-container" little black box issue


const playerScoreContainer = document.getElementById("player-score")
// let initialScoreState = playerScoreContainer.innerHTML = ``
playerScoreContainer.style.display = 'none'
const countdown = document.getElementById("countdown")  // TIMER
countdown.style.display = 'none'

/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionCat1)
btnCategory1.addEventListener('click', startTimer)
btnCategory2.addEventListener('click', renderQuestionCat2)
btnCategory2.addEventListener('click', startTimer)
btnCategory3.addEventListener('click', renderQuestionCat3)
btnCategory3.addEventListener('click', startTimer)
btnContainer.addEventListener('click', gameAudio.playClick)
btnReset.addEventListener('click', resetGame)


/*------------ Functions ------------*/
function startTimer() {
  btnCategory3.addEventListener('click', startTimer)
  timerSeconds = 80
  timerInterval = setInterval(updateTimer, 1000)
  countdown.style.display = ''
  countdown.style.margin = '10px'
  countdown.style.padding = '20px'
  btnReset.style.display = ''
}
function updateTimer() {
  countdown.textContent = `Time remaining: ${timerSeconds}s`
  timerSeconds -= 1
  if (timerSeconds < 0) {
    countdown.textContent = `Out of time!`
    roundOver()
    question.textContent = '' 
    answers.innerHTML = ''
  }
}
function stopTimer() {
  clearInterval(timerInterval)
}

function renderQuestionCat1() {
  rulesBtnsDiv.style.display = 'none'
  questionContainer.style.display = 'block'  // fix for "question-container" little black box issue
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
  rulesBtnsDiv.style.display = 'none'
  questionContainer.style.display = 'block'  // fix for "question-container" little black box issue
  currentCategory = 2
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
  rulesBtnsDiv.style.display = 'none'
  questionContainer.style.display = 'block'  // fix for "question-container" little black box issue
  currentCategory = 3
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
    // console.log('correct answer selected');
    gameAudio.playDing()
    playerScore += 1
  } else  {
    playerScore += 0
    gameAudio.playPianoWrong()
    // console.log('incorrect answer selected');
  }
  playerScoreContainer.style.display = ''
  playerScoreContainer.innerHTML = `Your score:<br>${ playerScore }`
  playerScoreContainer.style.margin = '10px'
  playerScoreContainer.style.padding = '20px'

  if (
    (currentCategory === 1 && currentQuesIdx < questionsCat1.length) ||
    (currentCategory === 2 && currentQuesIdx < questionsCat2.length) ||
    (currentCategory === 3 && currentQuesIdx < questionsCat3.length)
  ) {
    currentQuesIdx += 1;
  }

  if (currentQuesIdx >= questionsCat1.length || currentQuesIdx >= questionsCat2.length || currentQuesIdx >= questionsCat3.length) {
    roundOver()
  } 
  
  question.textContent = '' 
  answers.innerHTML = ''

  // nested if statement idea from chatGPT
  if (
    (currentCategory === 1 && currentQuesIdx < questionsCat1.length) ||
    (currentCategory === 2 && currentQuesIdx < questionsCat2.length) ||
    (currentCategory === 3 && currentQuesIdx < questionsCat3.length)
  ) {
    if (currentCategory === 1) {
        renderQuestionCat1();
    } else if (currentCategory === 2) {
        renderQuestionCat2();
    } else if (currentCategory === 3) {
        renderQuestionCat3();
    }
  }
}

function roundOver(){
  // console.log('testing gameover state');
  stopTimer()
  // countdown.textContent = ``
  countdown.style.display = 'none'
  questionContainer.style.display = 'none' // fix for "question-container" little black box issue
  if (playerScore >= 5) {
    gameAudio.playLevelSucceed()
    playerScoreContainer.innerHTML = `Your score is:<br> ${ playerScore }<br>Perfect. You are an evolved human.`
  } else if (playerScore < 5 && playerScore > 0) {
    gameAudio.playApplause()
    playerScoreContainer.innerHTML = `Your score is:<br> ${ playerScore }<br>Nice work. Keep practicing (at life).`  
  } else {
    gameAudio.playLevelFail()
    playerScoreContainer.innerHTML = `Your score is:<br> ${ playerScore }<br>No offense but you might be a bad person.`  
  }
}


function resetGame(){
  gameAudio.stopAudio()
  gameAudio.playClick()
  stopTimer()
  rulesBtnsDiv.style.display = ''
  countdown.style.display = 'none'
  questionContainer.style.display = 'none' // fix for "question-container" little black box issue
  playerScoreContainer.style.display = 'none'
  btnReset.style.display = 'none'
  countdown.textContent = ``
  question.textContent = '' // this line isnt needed?
  answers.innerHTML = ''
  currentQuesIdx = 0
  playerScore = 0
  console.log(playerScore, currentQuesIdx);
  console.log('resetting game');
}

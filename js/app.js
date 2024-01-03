// console.log('overall test!');

/*------------ Constants ------------*/
import { questionsImportCat1 } from "../js/questions.js"
const questionsCat1 = Object.values(questionsImportCat1);
// console.log(questionsCat1); 


/*------------ Variables ------------*/
let playerScore // use in init or render
let currentQuesIdx = 0


/*---- Cached Element References ----*/
const btnCategory1 = document.getElementById("btn-category-1")
  // otehr btnCategories will go here
const question = document.getElementById("question-p")
const answers = document.getElementById("answers-ul")
const btnReset = document.getElementById("btn-reset")


/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionCat1)
btnReset.addEventListener('click', reset)


/*------------ Functions ------------*/
function renderQuestionCat1() {
  //HOLDS ONE SPECIFIC QUESTION:
  let singleQuestion = questionsCat1[currentQuesIdx]
  question.textContent = `${singleQuestion.quesQ}`
  
  //HOLDS ARRAY OF ANSWERS:
  let answersToSingleQuestion = singleQuestion.quesAs
  // console.log(answersToSingleQuestion);
  
  //loop through quesA's 
  answersToSingleQuestion.forEach((eachA) => {
    let renderedAnswer = document.createElement('li')
    renderedAnswer.textContent = `${eachA.answer}`
    //can take advantage of bubbling by adding to container, but keeping here for now:
    renderedAnswer.addEventListener('click', playerChooseAnswer)
    answers.appendChild(renderedAnswer)
    // console.log(renderedAnswer);
  })
}

function playerChooseAnswer(evt){
  
  // console.log(evt.target.textContent);


  currentQuesIdx += 1
  if (currentQuesIdx >= questionsCat1.length){
    gameOverTest()
  }
  question.textContent = '' // this line isnt needed?
  answers.innerHTML = ''
  console.log(currentQuesIdx);
  console.log('player choice click works');
  renderQuestionCat1()
}

function gameOverTest(){
  console.log('testing gameover state');
}

function init(){
  console.log('reset button works');
  playerScore = 0
  currentQuesIdx = 0  

  // quizOver = false
  // letPerfectScore = false
}

function reset(){
  init()
}


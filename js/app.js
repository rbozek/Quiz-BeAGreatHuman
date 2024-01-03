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


// const eachAnswer = document.getElementById("answer-li")
// const eachAnswer = document.getElementsByClassName("answer-li")
// console.log(eachAnswer);

/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionCat1)


/*------------ Functions ------------*/
function renderQuestionCat1() {
  //HOLDS ONE SPECIFIC QUESTION:
  const singleQuestion = questionsCat1[currentQuesIdx]
  question.textContent = `${singleQuestion.quesQs}`
  
  //HOLDS ARRAY OF ANSWERS:
  const answersToSingleQuestion = singleQuestion.quesAs
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
  
  //loop to update GLOBAL currentQuesIdx - Ben recs: want to increment the currentQuesIdx only after a player has made a guess, not all at once like this
  // for (let i = 0; i < questionsCat1.length; i++){
  //   currentQuesIdx += 1
  //   console.log(currentQuesIdx);
}


function playerChooseAnswer(){
  console.log('player choice click works');
}

function init(){
  playerScore = 0
  currQuestionIdx = 0
  // quizOver = false
  // letPerfectScore = false
  // render()
}
// init()

function reset(){
  init()
}




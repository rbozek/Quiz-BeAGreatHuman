// console.log('overall test!');

/*------------ Constants ------------*/
// import { getNextQuestion } from "../js/questions.js"
// import { questions } from "../js/questions.js"
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


/*------------ Variables ------------*/
let currQuestionIdx, playerScore // use in init or render

/*---- Cached Element References ----*/
const btnCategory1 = document.querySelector("#btn-category-1")
// const btnCategory2 = document.querySelector("#btn-category-2")
// const btnCategory3 = document.querySelector("#btn-category-3")
const questionContainer = document.querySelector("#question-container")
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
    // console.log(singleQuestion.quesQs + '--> renderQuestion works');

    // HARD CODING for now - can clean up with for loop later
    let renderedAnswer1 = document.createElement('div')
    renderedAnswer1.textContent = `${singleQuestion.quesAs[0].answer}`
    questionContainer.appendChild(renderedAnswer1)
    console.log(singleQuestion.quesAs[0].answer);

    let renderedAnswer2 = document.createElement('div')
    renderedAnswer2.textContent = `${singleQuestion.quesAs[1].answer}`
    questionContainer.appendChild(renderedAnswer2)
    console.log(singleQuestion.quesAs[1].answer);

    let renderedAnswer3 = document.createElement('div')
    renderedAnswer3.textContent = `${singleQuestion.quesAs[2].answer}`
    questionContainer.appendChild(renderedAnswer3)
    console.log(singleQuestion.quesAs[2].answer);

    let renderedAnswer4 = document.createElement('div')
    renderedAnswer4.textContent = `${singleQuestion.quesAs[3].answer}`
    questionContainer.appendChild(renderedAnswer4)
    console.log(singleQuestion.quesAs[3].answer);
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


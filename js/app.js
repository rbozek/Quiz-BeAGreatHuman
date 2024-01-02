// console.log('overall test!');

/*------------ Constants ------------*/
// import { getNextQuestion } from "../js/questions.js"
// import { questions } from "../js/questions.js"
const questionsCat1 = [
  {
    quesQs: "What do you do etc etc question 1?",
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
    // console.log(singleQuestion.quesQs + '--> renderQuestion works');

    //next most likely:  for above line ${singleQuestion.quesAs.forEach}


    let renderedAnswer = document.createElement('div')
    renderedAnswer.textContent = `${singleQuestion.quesAs[0].answer1}`
    questionContainer.appendChild(renderedAnswer)
    console.log(singleQuestion.quesAs[0].answer1);
    


    //     // save for now: if i'm printing each answer sep
    // let renderedAnswer = document.createElement('div')
    // renderedAnswer.textContent = `${singleQuestion.quesAs[0].answer1}`
    // questionContainer.appendChild(renderedAnswer)
    // console.log(singleQuestion.quesAs[0].answer1);


    // save for now: if i'm printing each answer sep



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


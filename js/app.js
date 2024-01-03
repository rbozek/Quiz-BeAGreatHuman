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
let playerScore // use in init or render
let currentQuesIdx = 0

/*---- Cached Element References ----*/
const btnCategory1 = document.getElementById("btn-category-1")
  // otehr btnCategories will go here
const question = document.getElementById("question-p")
const answers = document.getElementById("answers-ul")
// const eachAnswer = document.getElementById("answer-li")
const eachAnswer = document.getElementsByClassName("answer-li")
// console.log(eachAnswer);

/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionCat1)
// eachAnswer.addEventListener('click', playerChooseAnswer)

// tried for loop, when I was adding CLASS to li's instead of ids
for (let idx = 0; idx < eachAnswer.length; idx++) {
    eachAnswer[idx].addEventListener('click', function() {
        console.log('eachAnswer ' + (idx) + ' clicked!');
      });
    }

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
        // add class to each li:
        renderedAnswer.setAttribute('class', 'answer-li');
        // OR id to each li
        // renderedAnswer.setAttribute('id', 'answer-li');
        renderedAnswer.textContent = `${eachA.answer}`
        answers.appendChild(renderedAnswer)
        // console.log(renderedAnswer);
      })
      
    
      //loop will update GLOBAL currentQuesIdx for use! (there are a couple places we could place this - can also put it where we call the function)
      for (let i = 0; i < questionsCat1.length; i++){
        currentQuesIdx += 1
        console.log(currentQuesIdx);
      }
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




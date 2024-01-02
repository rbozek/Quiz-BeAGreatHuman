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

export {
  questions
}

// function getNextQuestion() {
//   return questions[0]
// }

// export {
//   getNextQuestion,
// }





// original, from 
// function createQuestionsCat1(){
//   // blanked on this step, got idea from online ref:
//   const overallOutput = [];
//   questions.forEach((currentQuestion, questionNumber) => {
//     console.log(currentQuestion.quesQs);
//     console.log(currentQuestion.quesAs);
//     console.log(questionNumber);
//     // same deal, couldnt figure this out til I saw it:
//     // const answers = [];
//     // let eachQuestionDiv = document.createElement('div')
//     // eachQuestionDiv.className = `each-question-div`
//     // let overallOutput  
//     overallOutput.push(
//       // 'testing push'
//       // `<div class="question">  'test q' </div>
//       // <div class="answers">  test a </div>`
//       `<div class="question"> ${currentQuestion.quesQs} test q </div>
//       <div class="answers"> ${currentQuestion.quesAs} test a </div>`
//     )
//     questionContainer.innerHTML = overallOutput
//     questionContainer.appendChild(eachQuestionDiv)
//   })
//   // questionContainer.innerHTML = ''
//   // console.log('render fxn works')
// }

//render function got rid of, prob unneccesary step
// function render(){ 
//   questionContainer.innerHTML = ''
//   // questionContainer.innerHTML = 'render fxn'
//   console.log('render fxn works')
//   // console.log(getNextQuestion())
//   questions.forEach((ques,ans1,ans2,ans3,ans4) => {
//     printQuestion(ques,ans1,ans2,ans3,ans4)
//   })
// }


// saved dead code - initial attempt at printing question, too complicated
// function printQuestion(ques,ans1,ans2,ans3,ans4){
//   console.log('printQuestion works')
//   // console.log(ques,ans1,ans2,ans3,ans4)
//   let questionDiv = document.createElement('div')
//   questionDiv.className = `question-div`
//   questionDiv.innerHTML = // `test inside questionDiv`
//   `<div>
//   <p>${ques}</p>
//   <p>${ans1}</p>
//   <p>${ans2}</p>
//   </div>`
//   console.log('printQuestion works')
//   questionContainer.appendChild(questionDiv)
// }

// early attempt at populating Q&A's - not what i need
// const singleQuestion = questions.map(){
//   const transformedQuestion = { name: student, studentNum: index + 1, enrolled: true }
//   return transformedQuestion
// }
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

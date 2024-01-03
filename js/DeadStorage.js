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


from 1/3 @ 1:40 PM - saving in case i need to go back to anyting - from when i was adding click by adding LI id's
/*--------- Event Listeners ---------*/
btnCategory1.addEventListener('click', renderQuestionCat1)
// eachAnswer.addEventListener('click', playerChooseAnswer)

// tried for loop, when I was adding CLASS to li's instead of ids
// for (let idx = 0; idx < eachAnswer.length; idx++) {
//     eachAnswer[idx].addEventListener('click', function() {
//         console.log('eachAnswer ' + (idx) + ' clicked!');
//       });
//     }


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
    
    // initial attempty
    // add class to each li:
    // renderedAnswer.setAttribute('class', 'answer-li');
    // OR id to each li
    // renderedAnswer.setAttribute('id', 'answer-li');
    
    renderedAnswer.textContent = `${eachA.answer}`
    answers.appendChild(renderedAnswer)
    // console.log(renderedAnswer);
  })
  
  //loop to update GLOBAL currentQuesIdx - Ben recs: want to increment the currentQuesIdx only after a player has made a guess, not all at once like this
  // for (let i = 0; i < questionsCat1.length; i++){
  //   currentQuesIdx += 1
  //   console.log(currentQuesIdx);
  }




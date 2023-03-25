var startbutton = document.getElementById('start')
var nextbutton = document.getElementById('next')
var questionContainer = document.getElementById('questionContainer')
var questionElement = document.getElementById('question')
var answerbutton = document.getElementById('buttons')

let randomizer, questionList

startbutton.addEventListener('click', startGame)
nextbutton.addEventListener('click', () => {
  questionList++
  nextQuestion()
})

function startGame() {
  startbutton.classList.add('hide')
  randomizer = questions.sort(() => Math.random() - .5)
  questionList = 0
  questionContainer.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {
  resetState()
  showQuestion(randomizer[questionList])
}

function showQuestion(question) {
  questionElement.textContent = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.textContent = answer.text
    button.classList.add('button')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerbutton.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextbutton.classList.add('hide')
  while (answerbutton.firstChild) {
    answerbutton.removeChild(answerbutton.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerbutton.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomizer.length > questionList + 1) {
    nextbutton.classList.remove('hide')
  } 
  else {
    startbutton.textContent = 'Restart'
    startbutton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } 
  else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function score() {
    if(answer = correct) {
        
    }
}

var questions = [
  {
    question: 'Which is the only edible food that never goes bad?',
    answers: [
      { text: 'Mushrooms', correct: false },
      { text: 'Canned Foods', correct: false },
      { text: 'Honey', correct: true },
      { text: 'Twinkies', correct: false }
    ]
  },
  {
    question: 'What is the most consumed manufactured drink in the world?',
    answers: [
      { text: 'Tea', correct: true },
      { text: 'Soft Drinks', correct: false },
      { text: 'Coffee', correct: false },
      { text: 'Alcohol', correct: false }
    ]
  },
  {
    question: 'The unicorn is the national animal of which country?',
    answers: [
      { text: 'Switzerland', correct: false },
      { text: 'Ireland', correct: false },
      { text: 'England', correct: false },
      { text: 'Scotland', correct: true }
    ]
  },
  {
    question: 'A group of ravens is known as?',
    answers: [
      { text: 'a Murder', correct: false },
      { text: 'a Unkindness', correct: true },
      { text: 'a Flock', correct: false },
      { text: 'a Tune', correct: false }
    ]
  },
  {
    question: 'Which of Newton’s Laws states that ‘for every action, there is an equal and opposite reaction?',
    answers: [
      { text: 'The third law of motion', correct: true },
      { text: 'The first law of motion', correct: false },
      { text: 'The second law of motion', correct: false }
    ]
  },
  {
    question: 'What color is your blood when it’s inside your body?',
    answers: [
      { text: 'Blue', correct: false },
      { text: 'Red', correct: true }
    ]
  },
  {
    question: 'Who invented the word "vomit"?',
    answers: [
      { text: 'Socrates', correct: false },
      { text: 'William Shakespear', correct: true },
      { text: 'Chortle, Lewis Carroll', correct: false }
    ]
  },
  {
    question: 'What is the symbol for potassium?',
    answers: [
      { text: 'Pt', correct: false },
      { text: 'Ta', correct: false },
      { text: 'K', correct: true },
      { text: 'P', correct: false }
    ]
  },
  {
    question: 'What is meteorology the study of?',
    answers: [
      { text: 'Weather', correct: true },
      { text: 'Meteors', correct: false },
      { text: 'Wave Motions', correct: false },
      { text: 'Minerals', correct: false }
    ]
  },
  {
    question: 'How many times does the heartbeat per day?',
    answers: [
      { text: 'About 200,000', correct: false },
      { text: 'About 50,000', correct: false },
      { text: 'About 100,000', correct: true },
      { text: 'About 350,000', correct: false }
    ]
  },
]

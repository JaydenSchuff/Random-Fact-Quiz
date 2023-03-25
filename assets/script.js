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

var questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]

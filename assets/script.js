const startBtn = document.getElementById('start')
const nextBtn = document.getElementById('next')
const questionContainer = document.getElementById('questionContainer')
const questionElement = document.getElementById('question')
const answerBtn = document.getElementById('buttons')

let randomizer, questionList

startBtn.addEventListener('click', startGame)
nextBtn.addEventListener('click', () => {
  questionList++
  nextQuestion()
})

function startGame() {
  startBtn.classList.add('hide')
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
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerBtn.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextBtn.classList.add('hide')
  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerBtn.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomizer.length > questionList + 1) {
    nextBtn.classList.remove('hide')
  } else {
    startBtn.innerText = 'Restart'
    startBtn.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
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

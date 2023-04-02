var startButton = document.getElementById('start')
var nextButton = document.getElementById('next')
var questionContainerElement = document.getElementById('questionContainer')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('buttons')

let random, questionList
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  questionList++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  random = questions.sort(() => Math.random() - .5)
  questionList = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  count = 100
  setInterval
}

var count = 100, timer = setInterval(function() {
    $("#timer").html(count--);
    if(count == 1){
      clearInterval(timer);
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
      questionContainerElement.classList.add('hide')
    }
}, 1000);

function setNextQuestion() {
  resetState()
  showQuestion(random[questionList])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (random.length > questionList + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
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
  }
]

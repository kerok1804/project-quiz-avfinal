const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random()  - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
}

function selectAnswer(){

}

const question = [
    {
        question: 'What is 2 + 2', 
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '8', correct: false},
            {text: '2', correct: false},

        ]
        
    }
]
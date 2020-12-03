const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let score = 0;

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion(false)
})

function startGame(){
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random()  - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion(true)
}

function setNextQuestion(start){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
    if(!start){
        document.body.style.backgroundColor = "hsl(var(--hue-neutral), 100%, 20%)"
    }
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        console.log("question.imagem -> " + question.imagem)
        document.getElementById("eoq").style.backgroundImage = "url('img/"+question.imagem+"')";
        console.log(document.getElementById("eoq").style)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if(correct){
        score++
        document.body.style.backgroundColor = "hsl(var(--hue-correct), 100%, 20%)"
    } else {
        document.body.style.backgroundColor = "hsl(var(--hue-wrong), 100%, 20%)"
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Score: ' + score
        startButton.classList.remove('hide')
    }
   
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'Quais as medidas são prevenção do coronavírus?', 
        answers: [
            {text: 'Lavar as mãos', correct: true },
            {text: 'Andar sem máscara', correct: false },
            {text: 'Ir em festas', correct: false },
            {text: 'Sair de casa', correct: false },

        ],
        imagem: "coronga.jpg",
        
        
    },
    {
        question: 'O que fazer para conviver em sociedade fora de casa?', 
        answers: [
            {text: 'Abraçar pessoas', correct: false },
            {text: 'Manter distância', correct: true },
            {text: 'Visitar amigos', correct: false },
            {text: 'Ir viajar', correct: false },

    ],
    imagem: "coronavirusbe.jpg",
    
    
    },
    {
         question: 'O  que você deve levar consigo ao sair de casa?', 
         answers: [
            {text: 'Pano de rosto', correct: false },
            {text: 'Animais', correct: false },
            {text: 'Alcóol em gel', correct: true },
            {text: 'Caneta', correct: false },

    ],
    image: "iStock-177257849.jpg"
    
},
{
        question: 'What is 2 + 2', 
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false },
            {text: '8', correct: false },
            {text: '2', correct: false },

    ]
    
},
{
         question: 'What is 2 + 2', 
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false },
            {text: '8', correct: false },
            {text: '2', correct: false },

    ]
    
},
{
        question: 'What is 2 + 2', 
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false },
            {text: '8', correct: false },
            {text: '2', correct: false },

    ]
    
},
{
        question: 'What is 2 + 2', 
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false },
            {text: '8', correct: false },
            {text: '2', correct: false },

    ]
    
},
{
        question: 'What is 2 + 2', 
         answers: [
            {text: '4', correct: true },
            {text: '22', correct: false },
            {text: '8', correct: false },
            {text: '2', correct: false },

    ]
    
},
{
        question: 'What is 2 + 2', 
         answers: [
            {text: '4', correct: true },
            {text: '22', correct: false },
            {text: '8', correct: false },
            {text: '2', correct: false },

    ]
    
},
{
         question: 'What is 2 + 2', 
        answers: [
            {text: '4', correct: true },
            {text: '22', correct: false },
            {text: '8', correct: false },
            {text: '2', correct: false },

    ]
    
},

    
]
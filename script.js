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
        document.getElementById("fundo").style.backgroundImage = "url('img/"+question.imagem+"')";
        console.log(document.getElementById("fundo").style)
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
    imagem: "iStock-177257849.jpg",
    
    },
    {
        question: 'Algo que devemos usar diariamente e que mudou nosso cotidiano.', 
        answers: [
            {text: 'Notebook', correct: false },
            {text: 'Celular', correct: false },
            {text: 'Máscara', correct: true },
            {text: 'Fones de ouvido', correct: false },

    ],
    imagem: "epidemia-pessoas-com-mascara-1589551870401_v2_1920x1280.jpg",
    
    },
    {
     question: 'O que não fazer usando máscara?', 
        answers: [
            {text: 'Tocar no rosto', correct: true },
            {text: 'Trocar a cada 5 minutos', correct: false },
            {text: 'Compartilhar com outras pessoas', correct: true },
            {text: 'Cortar no meio', correct: true },

    ],
    imagem: "pessoas-usando-mascaras-para-se-proteger-do-coronavirus-269022-article.jpg",
    
    },
    {
        question: 'O que fazer ao querer tossir ou espirrar?', 
        answers: [
            {text: 'Não colocar a mão no rosto', correct: false },
            {text: 'Tossir ou espirrar no cotovelo', correct: true },
            {text: 'Espirrar em alguém', correct: false },
            {text: 'Espirrar nas mãos', correct: false },

    ],
    imagem: "coronavirus-2.jpg"
    
    },
    {
        question: 'Quais os principais sintomas da COVID-19?', 
        answers: [
            {text: 'Nariz entopido', correct: false },
            {text: 'Perda de olfato e paladar', correct: true },
            {text: 'Perda de membros', correct: false },
            {text: 'Perda de unhas', correct: false },

        ],
        imagem: "mulher-tossindo-1584638323860_v2_450x337.png"

},
    {
        question: 'O que fazer se tiver sintomas da COVID-19 e não sabe o que fazer?', 
         answers: [
            {text: 'Ver amigos e familiares', correct: false },
            {text: 'Ir ao shopping', correct: false },
            {text: 'Procurar um médico imediatamente', correct: true },
            {text: 'Praticar exercícios', correct: false },

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
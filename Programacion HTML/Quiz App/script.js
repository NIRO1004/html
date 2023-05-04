const quizData = [
    {
        Pregunta: "¿Qué idioma se ejecuta en un navegador web?",
        a: "Java",
        b: "C",
        C: "Python",
        d: "JavaScript",
        correcta: "d",
    },
    {
        Pregunta: "¿Qué significa CSS?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        C: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correcta: "b",       
    },
    {
        Pregunta: "¿Qué significa HTML?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        C: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correcta: "a",       
    },
    {
        Pregunta: "¿En qué año se lanzó JavaScript?",
        a: "1996",
        b: "1995",
        C: "1994",
        d: "Ninguna de las anteriores",
        correcta: "a",       
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('d_text')
const d_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0 
let score = 0 

loadQuiz ()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correcta){
            score++
        }
        
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> You answeres ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()"Reload</button>
            `
        }
    }
})
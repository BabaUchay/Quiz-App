const questions = [
{
    question: "Who was the first female Vice-Chancellor in Nigeria?",
    answers: [
    {text: "Ngozi Okonjo-Iweala", correct: false},
    {text: "Grace Alele-Williams", correct: true},
    {text: "Dora Akunyili", correct: false},
    {text: "Funmilayo Ransome-Kuti", correct: false},
    ]
},
{
    question: "Which government agency is responsible for organizing elections in Nigeria?",
    answers: [
    {text: "EFCC", correct: false},
    {text: "INEC", correct: true},
    {text: "NAFDAC", correct: false},
    {text: "FRSC", correct: false},
    ]
},
{
    question: "Who was the Nigerian woman that played a major role in the Aba Women's Riot of 1929?",
    answers: [
    {text: "Margaret Ekpo", correct: true},
    {text: "Queen Amina", correct: false},
    {text: "Funmilayo Ransome-Kuti", correct: false},
    {text: "Kudirat Abiola", correct: false},
    ]
},
{
    question: "What is the main duty of the National Assembly in Nigeria?",
    answers: [
    {text: "Conduct elections", correct: false},
    {text: "Enforce traffic rules", correct: false},
    {text: "Regulate fuel prices", correct: false},
    {text: "Make and amend laws", correct: true},
    ]
},
{
    question: "Which Nigerian woman was a former Director-General of NAFDAC and played a key role in fighting fake drugs?",
    answers: [
    {text: "Stella Adadevoh", correct: false},
    {text: "Ngozi Okonjo-Iweala", correct: false},
    {text: "Oby Ezekwesili", correct: false},
    {text: "Dora Akunyili", correct: true},
    ]
},
{
    question: "What year was Abia state created?",
    answers: [
    {text: "5 June 1980", correct: false},
    {text: "2 October 1990", correct: false},
    {text: "4 may 1993", correct: false},
    {text: "27 August 1991", correct: true},
    ]
},
{
    question: "Who is the woman in 20 naira note?",
    answers: [
    {text: "Kadi kwali.", correct: true},
    {text: "Mrs Azikiwe", correct: false},
    {text: "Mrs ironsi", correct: false},
    {text: "Mrs Gowon", correct: false},
    ]
},
{
    question: "What year did Nigeria Amalgamated?",
    answers: [
    {text: "October 1920", correct: false},
    {text: "June 1930", correct: false},
    {text: "February 1910", correct: false},
    {text: "January 1914", correct: true},
    ]
},
{
    question: "Who is the first executive governor of Abia State?",
    answers: [
    {text: "Dr orji uzor kalu", correct: false},
    {text: "Chief  T A. Orji", correct: false},
    {text: "Dr Ogbonnaya Onu", correct: true},
    {text: "Dr. Okezie Ikpeazu", correct: false},
    ]
},
{
    question: "Who was the first female elected governor in Nigeria?",
    answers: [
    {text: "Ngozi Okonjo-Iweala", correct: false},
    {text: "Chimamanda Ngozi Adichie", correct: false},
    {text: "Folorunsho Alakija", correct: false},
    {text: "Virginia Etiaba", correct: true},
    ]
},
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
   currentQuestion.answers.forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerButtons.appendChild(button);
       if(answer.correct){
           button.dataset.correct = answer.correct;
       }
       button.addEventListener("click",selectAnswer);
   }) 
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.displayed = true;
    });
    nextButton.style.display = "block";
} 
    
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
         }
    }

    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    });


startQuiz();
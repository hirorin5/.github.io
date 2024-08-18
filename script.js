const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "London", "Paris", "Rome"],
        correctAnswer: 2
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correctAnswer: 1
    },
    // 他の問題もここに追加できます
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    
    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectAnswer(index);
        choicesContainer.appendChild(button);
    });
}

function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.correctAnswer) {
        score++;
    }
    document.getElementById("next-button").style.display = "inline-block";
    document.getElementById("score").textContent = `スコア: ${score}/${questions.length}`;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").textContent = "クイズ終了！";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("next-button").style.display = "none";
        document.getElementById("score").textContent = `最終スコア: ${score}/${questions.length}`;
    }
}

loadQuestion();

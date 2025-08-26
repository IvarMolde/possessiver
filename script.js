document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            type: 'multiple-choice',
            task: 'Oppgave 1: Klikk på riktig possessiv',
            questions: [
                { id: 'a', q: "Velg det korrekte possessivet i setningen: 'Jeg finner ikke ________ nøkler.'", options: ["min", "mine", "mitt"], answer: "mine", explanation: "Korrekte possessiv for flertall er 'mine'." },
                { id: 'b', q: "Hvilket possessiv er korrekt i setningen: 'Han vasker bilen ________ hver lørdag.'", options: ["hans", "sin", "deres"], answer: "sin", explanation: "'Sin' brukes når eieren er den samme som subjektet i setningen." },
                { id: 'c', q: "Velg det korrekte ordet i setningen: 'Vi feiret bursdagen til dattera ________ i går.'", options: ["vårt", "våre", "vår"], answer: "vår", explanation: "'Vår' er possessivet som brukes for hunkjønn i entall." },
                { id: 'd', q: "Velg det korrekte possessivet i setningen: 'Hun spurte sjefen ________ om fri.'", options: ["hennes", "sin", "mi"], answer: "sin", explanation: "'Sin' brukes når eieren ('hun') er den samme som subjektet." },
                { id: 'e', q: "Hvilken setning er grammatisk korrekt?", options: ["Vi solgte leiligheten våre i byen.", "Han har på seg jakka si.", "De solgte huset sitt i fjor."], answer: "De solgte huset sitt i fjor.", explanation: "Dette er den eneste grammatisk korrekte setningen av alternativene. 'Sitt' er riktig refleksivt possessiv for intetkjønnssubstantivet 'huset'." }
            ]
        }
    ];

    let currentTaskIndex = 0;
    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false;
    let quizActive = true;

    const totalQuestions = questions.reduce((sum, task) => sum + task.questions.length, 0);

    const taskInfoElement = document.getElementById('task-info');
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const nextButton = document.getElementById('next-button');
    const restartButton = document.getElementById('restart-button');
    const scoreElement = document.getElementById('score');
    const progressBar = document.getElementById('quiz-progress-bar');
    const progressContainer = document.getElementById('quiz-progress-container');

    function updateProgressBar() {
        const totalQuestionsAnswered = questions.slice(0, currentTaskIndex).reduce((sum, task) => sum + task.questions.length, 0) + currentQuestionIndex;
        const progress = (totalQuestionsAnswered / totalQuestions) * 100;
        progressBar.style.width = `${progress}%`;
        progressContainer.setAttribute('aria-valuenow', totalQuestionsAnswered);
    }

    function loadQuestion() {
        if (!quizActive) return;

        if (currentTaskIndex >= questions.length) {
            endQuiz();
            return;
        }

        const currentTask = questions[currentTaskIndex];
        const currentQuestion = currentTask.questions[currentQuestionIndex];

        updateProgressBar();
        answered = false;
        feedbackMessage.textContent = '';
        nextButton.classList.add('hidden');
        optionsContainer.classList.remove('hidden');
        
        taskInfoElement.textContent = currentTask.task;
        
        questionTextElement.textContent = `${currentQuestionIndex + 1}) ${currentQuestion.q}`;
        optionsContainer.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('option');
            button.setAttribute('role', 'radio');
            button.setAttribute('aria-checked', 'false');
            button.addEventListener('click', () => handleMultipleChoice(button, option, currentQuestion.explanation));
            optionsContainer.appendChild(button);
        });
    }

    function handleMultipleChoice(selectedButton, selectedOption, explanation) {
        if (answered) return;
        answered = true;
        const options = optionsContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.disabled = true;
        });

        if (selectedOption.isCorrect) {
            selectedButton.classList.add('correct');
            feedbackMessage.textContent = "Riktig! 🥳";
            score++;
        } else {
            selectedButton.classList.add('incorrect');
            const correctOption = Array.from(options).find(opt => opt.textContent === selectedOption.answer);
            if (correctOption) {
                correctOption.classList.add('correct');
            }
            feedbackMessage.textContent = `Feil svar. ${explanation}`;
        }
        scoreElement.textContent = score;
        nextButton.classList.remove('hidden');
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions[currentTaskIndex].questions.length) {
            currentQuestionIndex = 0;
            currentTaskIndex++;
        }
        loadQuestion();
    });

    function endQuiz() {
        quizActive = false;
        questionTextElement.textContent = "Quiz fullført! 🎉";
        optionsContainer.innerHTML = `<p>Du fikk ${score} av ${totalQuestions} poeng. Bra jobbet! ✨</p>`;
        nextButton.classList.add('hidden');
        restartButton.classList.remove('hidden');
        feedbackMessage.textContent = "";
        updateProgressBar();
    }

    function restartQuiz() {
        currentTaskIndex = 0;
        currentQuestionIndex = 0;
        score = 0;
        quizActive = true;
        scoreElement.textContent = score;
        nextButton.classList.remove('hidden');
        restartButton.classList.add('hidden');
        loadQuestion();
    }

    restartButton.addEventListener('click', restartQuiz);
    
    loadQuestion();
});

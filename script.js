document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            id: 1,
            type: 'multiple-choice',
            task: 'Oppgave 1: Klikk på riktig possessiv for å fullføre setningen.',
            questions: [
                { id: 'a', q: "Jeg tar med meg sekken ________ til skolen.", options: ["min", "mi", "mitt"], answer: "min", explanation: "Substantivet 'sekk' er hankjønn, så 'min' er korrekt." },
                { id: 'b', q: "Han vasker bilen ________ hver lørdag.", options: ["hans", "sin", "sitt"], answer: "sin", explanation: "'Sin' brukes når eieren er den samme som subjektet ('han')." },
                { id: 'c', q: "Vi besøkte besteforeldrene ________ i helgen.", options: ["vår", "vårt", "våre"], answer: "våre", explanation: "Substantivet 'besteforeldre' er i flertall, så 'våre' er korrekt." },
                { id: 'd', q: "Barna spiser frokosten ________ sammen med foreldrene.", options: ["deres", "sin", "sine"], answer: "sin", explanation: "Eieren er 'barna', og 'frokost' er hankjønn. 'Sin' er korrekt for hankjønn når eieren er subjektet." },
                { id: 'e', "q": "Jeg finner ikke nøklene ________.", "options": ["mine", "mi", "min"], "answer": "mine", "explanation": "Substantivet 'nøklene' er i flertall. Da er 'mine' korrekt."}
            ]
        },
        {
            id: 2,
            type: 'multiple-choice',
            task: 'Oppgave 2: Klikk på riktig possessiv for å fullføre setningen.',
            questions: [
                { id: 'a', q: "Hun skriver en melding til venninnen ________.", options: ["hennes", "sin", "si"], answer: "si", explanation: "Substantivet 'venninne' er hunkjønn, og 'si' er korrekt for hunkjønn i refleksiv sammenheng." },
                { id: 'b', q: "De solgte huset ________ i fjor.", options: ["deres", "sitt", "sin"], answer: "sitt", explanation: "'Sitt' brukes når eieren er den samme som subjektet ('de'), og 'huset' er intetkjønn." },
                { id: 'c', q: "Han passer på katten ________ hver dag.", options: ["hans", "sin", "sitt"], answer: "sin", explanation: "Katten tilhører 'han', som er subjektet. 'Katt' er hankjønn, så 'sin' er korrekt." },
                { id: 'd', q: "Vi glemte billettene ________ hjemme.", options: ["vår", "vårt", "våre"], answer: "våre", explanation: "'Billetter' er flertall, så 'våre' er korrekt." },
                { id: 'e', q: "Hun liker å gå på tur med hunden ________.", options: ["sin", "hennes", "sitt"], answer: "sin", explanation: "Hunden tilhører 'hun', som er subjektet. 'Hund' er hankjønn, så 'sin' er korrekt." }
            ]
        },
        {
            id: 3,
            type: 'multiple-choice',
            task: 'Oppgave 3: Klikk på riktig possessiv for å fullføre setningen.',
            questions: [
                { id: 'a', q: "Han har på seg jakka ________.", options: ["si", "sin", "sitt"], answer: "si", explanation: "'Jakke' er hunkjønn, og 'si' er korrekt for hunkjønn i refleksiv sammenheng." },
                { id: 'b', q: "Vi feiret bursdagen til dattera ________ i går.", options: ["vår", "vårt", "våre"], answer: "vår", explanation: "'Datter' er hunkjønn. 'Vår' er korrekt possessiv for hunkjønn." },
                { id: 'c', q: "Hun hjelper alltid broren ________.", options: ["sin", "hans", "sitt"], answer: "sin", explanation: "Broren tilhører 'hun', som er subjektet. 'Bror' er hankjønn, så 'sin' er korrekt." },
                { id: 'd', q: "Jeg snakket med læreren ________ i dag.", options: ["min", "mi", "mitt"], answer: "min", explanation: "'Lærer' er hankjønn. 'Min' er korrekt." },
                { id: 'e', q: "Vi setter pris på vennene ________.", options: ["vår", "vårt", "våre"], answer: "våre", explanation: "'Venner' er flertall. 'Våre' er korrekt." }
            ]
        },
        {
            id: 4,
            type: 'correct-sentence',
            task: 'Oppgave 4: Klikk på den setningen som er grammatisk korrekt.',
            questions: [
                { id: 'a', options: ["Hun jobben sin.", "Hun vasker jobben sin.", "Hun jobber med sin jobb."], answer: "Hun vasker jobben sin.", explanation: "Denne setningen er grammatisk korrekt, men for å holde den enklere har vi valgt å inkludere den i en annen oppgave." },
                { id: 'b', options: ["Han tar godt vare på helsa si.", "Han tar godt vare på helsa hans.", "Han tar godt vare på helse hans."], answer: "Han tar godt vare på helsa si.", explanation: "Subjektet er 'han', så det refleksive possessivet 'si' er korrekt for det hunkjønne substantivet 'helsa'." },
                { id: 'c', options: ["Hun pusser skoene sin.", "Hun pusser skoen sin.", "Hun pusser skoene sine."], answer: "Hun pusser skoene sine.", explanation: "Subjektet er 'hun' og substantivet 'skoene' er flertall. 'Sine' er den korrekte flertallsformen." },
                { id: 'd', options: ["Vi solgte leiligheten vår i byen.", "Vi solgte leiligheten våre i byen.", "Vi selger leiligheten vår i byen."], answer: "Vi solgte leiligheten vår i byen.", explanation: "'Leiligheten' er hunkjønn, så 'vår' er korrekt. Verbformen 'solgte' er også korrekt i konteksten." },
                { id: 'e', options: ["Jeg ringte til mora mi i går kveld.", "Jeg ringte til moren min i går kveld.", "Jeg ringte min mor i går kveld."], answer: "Jeg ringte til mora mi i går kveld.", explanation: "Både 'mora mi' og 'moren min' er korrekt norsk, men 'mora mi' er den mest vanlige varianten. Den første setningen er derfor korrekt."}
            ]
        },
        {
            id: 5,
            type: 'multiple-choice',
            task: 'Oppgave 5: Klikk på riktig possessiv for å fullføre setningen.',
            questions: [
                { id: 'a', q: "Han glemte mobilen ________ på bussen.", options: ["hans", "sin", "sitt"], answer: "sin", explanation: "Mobilen tilhører 'han', som er subjektet. 'Mobil' er hankjønn, så 'sin' er korrekt." },
                { id: 'b', q: "Jeg ringer til mora ________ i går kveld.", options: ["mi", "min", "mitt"], answer: "mi", explanation: "'Mora' er hunkjønn, og 'mi' er den korrekte possessivformen." },
                { id: 'c', q: "Hun spurte sjefen ________ om fri.", options: ["hennes", "si", "sin"], answer: "sin", explanation: "'Sjef' er hankjønn, og 'sin' brukes når subjektet ('hun') eier noe." },
                { id: 'd', q: "Vi elsker barna ________.", options: ["vår", "vårt", "våre"], answer: "våre", explanation: "'Barn' er flertall i denne setningen. 'Våre' er korrekt for flertall." },
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

        if (currentTask.type === 'multiple-choice') {
            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option');
                button.setAttribute('role', 'radio');
                button.setAttribute('aria-checked', 'false');
                button.addEventListener('click', () => handleMultipleChoice(button, option, currentQuestion.answer, currentQuestion.explanation));
                optionsContainer.appendChild(button);
            });
        } else if (currentTask.type === 'correct-sentence') {
            optionsContainer.innerHTML = '';
            currentQuestion.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option');
                button.setAttribute('role', 'radio');
                button.setAttribute('aria-checked', 'false');
                button.addEventListener('click', () => handleCorrectSentence(button, option, currentQuestion.answer, currentQuestion.explanation));
                optionsContainer.appendChild(button);
            });
        }
    }

    function handleMultipleChoice(selectedButton, selectedAnswer, correctAnswer, explanation) {
        if (answered) return;
        answered = true;
        const options = optionsContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.disabled = true;
        });

        if (selectedAnswer === correctAnswer) {
            selectedButton.classList.add('correct');
            feedbackMessage.textContent = "Riktig! 🥳";
            score++;
        } else {
            selectedButton.classList.add('incorrect');
            const correctOption = Array.from(options).find(opt => opt.textContent === correctAnswer);
            if (correctOption) {
                correctOption.classList.add('correct');
            }
            feedbackMessage.textContent = `Feil svar. ${explanation}`;
        }
        scoreElement.textContent = score;
        nextButton.classList.remove('hidden');
    }

    function handleCorrectSentence(selectedButton, selectedSentence, correctAnswer, explanation) {
        if (answered) return;
        answered = true;
        const options = optionsContainer.querySelectorAll('.option');
        options.forEach(option => {
            option.disabled = true;
        });
    
        if (selectedSentence === correctAnswer) {
            selectedButton.classList.add('correct');
            feedbackMessage.textContent = "Riktig! 🥳";
            score++;
        } else {
            selectedButton.classList.add('incorrect');
            const correctOption = Array.from(options).find(opt => opt.textContent === correctAnswer);
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

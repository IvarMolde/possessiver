document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // Oppgave 1: Flervalg (Klikk på riktig alternativ)
        {   
            type: 'multiple-choice',
            task: 'Oppgave 1: Klikk på riktig possessiv',
            questions: [
                { id: 'a', q: "Det er Anders. Han låner ________ bil.", options: ["hans", "sin"], answer: "hans", explanation: "Bilen tilhører Anders, som er subjektet i forrige setning. Men i denne setningen er subjektet 'han', så 'hans' er korrekt." },
                { id: 'b', q: "Vi har en hytte. Det er ________ hytte.", options: ["vår", "vårt"], answer: "vår", explanation: "Substantivet 'hytte' er et hunkjønnsord, derfor brukes 'vår'." },
                { id: 'c', q: "De har en hund. Hunden er ________.", options: ["deres", "sin"], answer: "deres", explanation: "'Deres' brukes når eieren er 'de'." },
                { id: 'd', q: "Jeg har et eple. Det er ________ eple.", options: ["min", "mitt"], answer: "mitt", explanation: "Substantivet 'eple' er et intetkjønnsord, derfor brukes 'mitt'." },
                { id: 'e', q: "Du har en sykkel. Det er ________ sykkel.", options: ["din", "di"], answer: "din", explanation: "Substantivet 'sykkel' er et hankjønnsord, derfor brukes 'din'." }
            ]
        },
        // Oppgave 2: Fyll inn (Skriv inn riktig possessiv i feltet)
        {
            type: 'fill-in-the-blank',
            task: 'Oppgave 2: Fyll inn riktig possessiv i feltet',
            questions: [
                { id: 'a', q: "De spiser __ mat.", answer: "sin", explanation: "Eieren er 'de' (subjektet i setningen), og de spiser sin egen mat, derfor 'sin'." },
                { id: 'b', q: "Lars liker __ nye jobb.", answer: "sin", explanation: "Eieren 'Lars' er subjektet i setningen, derfor 'sin'." },
                { id: 'c', q: "Jeg leter etter __ veske.", answer: "mi", explanation: "Substantivet 'veske' er et hunkjønnsord. Eieren er 'jeg', så 'mi' er korrekt." },
                { id: 'd', q: "Dere har en ny bil. Det er __ nye bil.", answer: "deres", explanation: "Eieren er 'dere', og possessivet er 'deres'." },
                { id: 'e', q: "Søsteren min lånte kameraet __.", answer: "sitt", explanation: "Subjektet er 'søsteren min', og 'kameraet' er et intetkjønnsord. 'Sitt' er korrekt for intetkjønn." }
            ]
        },
        // Oppgave 3: Dra og slipp (Dra ordet til riktig plass)
        {
            type: 'drag-and-drop',
            task: 'Oppgave 3: Dra riktig possessiv til den stiplede linjen',
            questions: [
                { id: 'a', q: "Hun elsker å lese ________ bøker.", options: ["sin", "sine"], answer: "sine", explanation: "Eieren er 'hun' (subjektet) og 'bøker' er flertall, derfor 'sine'." },
                { id: 'b', q: "Foreldrene mine kjører ________ bil.", options: ["vår", "sin"], answer: "sin", explanation: "Subjektet er 'foreldrene', som bruker 'sin'." },
                { id: 'c', q: "Jeg har en katt. Katten er ________.", options: ["min", "mitt"], answer: "min", explanation: "Substantivet 'katten' er hankjønn, derfor 'min'." },
                { id: 'd', q: "Lærerne snakket med ________ elever.", options: ["sine", "deres"], answer: "sine", explanation: "Eieren 'lærerne' er subjektet i setningen, og de snakket med sine egne elever." },
                { id: 'e', q: "Vi vasker ________ hender.", options: ["våre", "vårt"], answer: "våre", explanation: "Substantivet 'hender' er flertall, derfor 'våre'." }
            ]
        },
        // Oppgave 4: Marker ordet (Klikk på riktig possessiv i setningen)
        {
            type: 'click-the-word',
            task: 'Oppgave 4: Klikk på riktig possessiv i setningen',
            questions: [
                { id: 'a', q: "Han mistet <span class='word'>hans</span> <span class='word'>bilnøkkel</span>.", options: ["hans"], answer: "hans", explanation: "Possessivet 'hans' brukes for å vise eierskap fra 'han'." },
                { id: 'b', q: "Det er <span class='word'>min</span> <span class='word'>mamma</span>.", options: ["min"], answer: "min", explanation: "Substantivet 'mamma' er hunkjønn, og possessivet kan stå foran i ubestemt form. 'Min' er korrekt." },
                { id: 'c', q: "Hunden logret med <span class='word'>halene</span> <span class='word'>deres</span>.", options: ["halene", "deres"], answer: "halene", explanation: "Possessivet for 'hunden' er 'sin', men her skal du bare markere ordet som er feil." },
                { id: 'd', q: "Barna leker med <span class='word'>deres</span> <span class='word'>baller</span>.", options: ["baller", "deres"], answer: "baller", explanation: "Subjektet er 'barna', og de leker med sine egne baller. 'Sine' er korrekt her, ikke 'deres'." },
                { id: 'e', q: "Hun besøker <span class='word'>sin</span> søster.", options: ["sin"], answer: "sin", explanation: "Eieren er 'hun' (subjektet). 'Sin' er riktig her for å vise at hun besøker sin egen søster." }
            ]
        },
        // Oppgave 5: Kombinert (Fyll inn + Drag and Drop)
        {
            type: 'combined',
            task: 'Oppgave 5: Kombinert',
            questions: [
                { id: 'a', q: "Anne og Per tok __ jakker og gikk.", options: ["sine", "deres"], answer: "sine", explanation: "Eierne (Anne og Per) er subjektet, så 'sine' er korrekt." },
                { id: 'b', q: "Jeg fant den lille jentas lue. Det er __ lue.", answer: "hennes", explanation: "Eieren er 'den lille jenta' ('hun'), og 'hennes' brukes for å vise eierskap." },
                { id: 'c', q: "Vi skal til __ hytte i helgen.", answer: "vår", explanation: "Substantivet 'hytte' er hunkjønn. Eieren er 'vi', så 'vår' er korrekt." },
                { id: 'd', q: "Dere må ta __ paraplyer med dere.", answer: "deres", explanation: "Eieren er 'dere'. 'Deres' er korrekt." },
                { id: 'e', q: "Mannen kjørte __ bil.", answer: "sin", explanation: "Eieren er 'mannen' (subjektet i setningen). 'Sin' er korrekt for å vise at det er hans egen bil." }
            ]
        }
    ];

    let currentTaskIndex = 0;
    let currentQuestionIndex = 0;
    let score = 0;
    let answered = false;
    let quizActive = true;

    const taskInfoElement = document.getElementById('task-info');
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const nextButton = document.getElementById('next-button');
    const checkButton = document.getElementById('check-button');
    const restartButton = document.getElementById('restart-button');
    const scoreElement = document.getElementById('score');
    const progressBar = document.getElementById('quiz-progress-bar');
    const progressContainer = document.getElementById('quiz-progress-container');

    const dragDropContainer = document.getElementById('drag-drop-container');
    const dragWordsContainer = document.getElementById('drag-words');
    const dropZone = document.getElementById('drop-zone');

    function updateProgressBar() {
        const totalQuestionsAnswered = currentTaskIndex * 5 + currentQuestionIndex;
        const progress = (totalQuestionsAnswered / 25) * 100;
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
        checkButton.classList.add('hidden');
        optionsContainer.classList.add('hidden');
        dragDropContainer.classList.add('hidden');
        
        taskInfoElement.textContent = currentTask.task;
        
        // Fjerner tidligere input-felt før ny oppgave lastes
        const oldInput = questionTextElement.querySelector('.fill-in-the-blank');
        if (oldInput) {
            oldInput.remove();
        }

        switch (currentTask.type) {
            case 'multiple-choice':
                optionsContainer.classList.remove('hidden');
                questionTextElement.textContent = `${currentQuestionIndex + 1}) ${currentQuestion.q}`;
                optionsContainer.innerHTML = '';
                currentQuestion.options.forEach(option => {
                    const button = document.createElement('button');
                    button.textContent = option;
                    button.classList.add('option');
                    button.setAttribute('role', 'radio');
                    button.setAttribute('aria-checked', 'false');
                    button.addEventListener('click', () => handleMultipleChoice(button, option, currentQuestion.answer, currentQuestion.explanation));
                    optionsContainer.appendChild(button);
                });
                break;
            case 'fill-in-the-blank':
            case 'combined': // Begge disse har fyll-inn-funksjon
                checkButton.classList.remove('hidden');
                const parts = currentQuestion.q.split('__');
                questionTextElement.innerHTML = '';

                const questionNumber = document.createElement('span');
                questionNumber.textContent = `${currentQuestionIndex + 1}) `;
                questionTextElement.appendChild(questionNumber);

                const beforeBlank = document.createElement('span');
                beforeBlank.textContent = parts[0];
                questionTextElement.appendChild(beforeBlank);

                const input = document.createElement('input');
                input.type = 'text';
                input.classList.add('fill-in-the-blank');
                input.placeholder = '...';
                questionTextElement.appendChild(input);

                const afterBlank = document.createElement('span');
                afterBlank.textContent = parts[1];
                questionTextElement.appendChild(afterBlank);
                
                input.focus();
                break;
            case 'drag-and-drop':
                dragDropContainer.classList.remove('hidden');
                checkButton.classList.remove('hidden');
                questionTextElement.textContent = `${currentQuestionIndex + 1}) ${currentQuestion.q}`;
                dragWordsContainer.innerHTML = '';
                dropZone.textContent = 'Dra ordet hit...';
                dropZone.classList.remove('filled-in', 'correct', 'incorrect');
                
                currentQuestion.options.forEach(option => {
                    const word = document.createElement('div');
                    word.textContent = option;
                    word.classList.add('draggable-word');
                    word.draggable = true;
                    word.addEventListener('dragstart', (e) => {
                        e.dataTransfer.setData('text/plain', option);
                    });
                    dragWordsContainer.appendChild(word);
                });
                
                dropZone.addEventListener('dragover', (e) => e.preventDefault());
                dropZone.addEventListener('drop', (e) => handleDragDrop(e, currentQuestion.answer, currentQuestion.explanation));
                break;
            case 'click-the-word':
                optionsContainer.classList.add('hidden');
                questionTextElement.innerHTML = `${currentQuestionIndex + 1}) ${currentQuestion.q}`;
                questionTextElement.querySelectorAll('.word').forEach(word => {
                    word.tabIndex = 0;
                    word.style.cursor = 'pointer';
                    word.addEventListener('click', () => handleClickTheWord(word, currentQuestion.answer, currentQuestion.explanation));
                    word.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleClickTheWord(word, currentQuestion.answer, currentQuestion.explanation);
                        }
                    });
                });
                break;
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

    function handleDragDrop(event, correctAnswer, explanation) {
        event.preventDefault();
        if (answered) return;
        answered = true;
        
        const data = event.dataTransfer.getData('text/plain');
        if (data === correctAnswer) {
            dropZone.textContent = data;
            dropZone.classList.add('filled-in', 'correct');
            feedbackMessage.textContent = "Riktig! 🥳";
            score++;
        } else {
            dropZone.textContent = data;
            dropZone.classList.add('filled-in', 'incorrect');
            const correctWord = document.createElement('div');
            correctWord.textContent = correctAnswer;
            correctWord.classList.add('correct');
            feedbackMessage.textContent = `Feil svar. Det riktige svaret var "${correctAnswer}".`;
        }
        scoreElement.textContent = score;
        nextButton.classList.remove('hidden');
        dragWordsContainer.style.display = 'none';
    }

    function handleFillInTheBlank(correctAnswer, explanation) {
        if (answered) return;
        answered = true;
        const inputField = questionTextElement.querySelector('.fill-in-the-blank');
        const userAnswer = inputField.value.trim().toLowerCase();
        
        if (userAnswer === correctAnswer.toLowerCase()) {
            inputField.classList.add('correct');
            feedbackMessage.textContent = "Riktig! 🥳";
            score++;
        } else {
            inputField.classList.add('incorrect');
            feedbackMessage.textContent = `Feil svar. Det riktige svaret var "${correctAnswer}". ${explanation}`;
        }
        inputField.disabled = true;
        scoreElement.textContent = score;
        checkButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    }

    function handleClickTheWord(selectedWord, correctAnswer, explanation) {
        if (answered) return;
        answered = true;

        const allWords = questionTextElement.querySelectorAll('.word');
        allWords.forEach(word => {
            word.style.cursor = 'default';
        });

        const selectedText = selectedWord.textContent;
        if (selectedText === correctAnswer) {
            selectedWord.classList.add('correct');
            feedbackMessage.textContent = "Riktig! 🥳";
            score++;
        } else {
            selectedWord.classList.add('incorrect');
            const correctWord = Array.from(allWords).find(word => word.textContent === correctAnswer);
            if (correctWord) correctWord.classList.add('correct');
            feedbackMessage.textContent = `Feil svar. Det riktige ordet er: "${correctAnswer}". ${explanation}`;
        }
        scoreElement.textContent = score;
        nextButton.classList.remove('hidden');
    }

    checkButton.addEventListener('click', () => {
        const currentTask = questions[currentTaskIndex];
        const currentQuestion = currentTask.questions[currentQuestionIndex];
        handleFillInTheBlank(currentQuestion.answer, currentQuestion.explanation);
    });

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
        optionsContainer.innerHTML = `<p>Du fikk ${score} av 25 poeng. Bra jobbet! ✨</p>`;
        nextButton.classList.add('hidden');
        checkButton.classList.add('hidden');
        restartButton.classList.remove('hidden');
        feedbackMessage.textContent = "";
        dragDropContainer.classList.add('hidden');
        const inputField = questionTextElement.querySelector('.fill-in-the-blank');
        if (inputField) inputField.remove();
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
    
    // Initial load
    loadQuestion();
});

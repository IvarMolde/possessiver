document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // Oppgave 1: Flervalg (Klikk på riktig possessiv)
        {   
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
        // Oppgave 2: Fyll inn (Skriv inn riktig possessiv)
        {
            type: 'fill-in-the-blank',
            task: 'Oppgave 2: Fyll inn riktig possessiv i feltet.',
            questions: [
                { id: 'a', q: "Hun skriver en melding til venninnen ________.", answer: "si", explanation: "Substantivet 'venninne' er hunkjønn, og 'si' er korrekt for hunkjønn i refleksiv sammenheng." },
                { id: 'b', q: "De solgte huset ________ i fjor.", answer: "sitt", explanation: "'Sitt' brukes når eieren er den samme som subjektet ('de'), og 'huset' er intetkjønn." },
                { id: 'c', q: "Han passer på katten ________ hver dag.", answer: "sin", explanation: "Katten tilhører 'han', som er subjektet. 'Katt' er hankjønn, så 'sin' er korrekt." },
                { id: 'd', q: "Vi glemte billettene ________ hjemme.", answer: "våre", explanation: "'Billetter' er flertall, så 'våre' er korrekt." },
                { id: 'e', q: "Hun liker å gå på tur med hunden ________.", answer: "sin", explanation: "Hunden tilhører 'hun', som er subjektet. 'Hund' er hankjønn, så 'sin' er korrekt." }
            ]
        },
        // Oppgave 3: Dra og slipp (Dra ordet til riktig plass)
        {
            type: 'drag-and-drop',
            task: 'Oppgave 3: Dra riktig possessiv til den stiplede linjen.',
            questions: [
                { id: 'a', q: "Han har på seg jakka ________.", options: ["si", "sin", "sitt"], answer: "si", explanation: "'Jakke' er hunkjønn, og 'si' er korrekt for hunkjønn i refleksiv sammenheng." },
                { id: 'b', q: "Vi feiret bursdagen til dattera ________ i går.", options: ["vår", "vårt", "våre"], answer: "vår", explanation: "'Datter' er hunkjønn. 'Vår' er korrekt possessiv for hunkjønn." },
                { id: 'c', q: "Hun hjelper alltid broren ________.", options: ["sin", "hans", "sitt"], answer: "sin", explanation: "Broren tilhører 'hun', som er subjektet. 'Bror' er hankjønn, så 'sin' er korrekt." },
                { id: 'd', q: "Jeg snakket med læreren ________ i dag.", options: ["min", "mi", "mitt"], answer: "min", explanation: "'Lærer' er hankjønn. 'Min' er korrekt." },
                { id: 'e', q: "Vi setter pris på vennene ________.", options: ["vår", "vårt", "våre"], answer: "våre", explanation: "'Venner' er flertall. 'Våre' er korrekt." }
            ]
        },
        // Oppgave 4: Velg riktig setning
        {
            type: 'correct-sentence',
            task: 'Oppgave 4: Klikk på den setningen som er grammatisk korrekt.',
            questions: [
                { id: 'a', options: ["Hun jobben sin.", "Hun jobber med sin jobb.", "Hun pusser skoen sin."], answer: "Hun pusser skoene sine.", explanation: "Flertallsordet 'skoene' skal ha flertallsformen 'sine' i denne refleksive sammenhengen." },
                { id: 'b', options: ["Han tar godt vare på helsa si.", "Han tar godt vare på helsa hans.", "Han har på seg jakka sin."], answer: "Han tar godt vare på helsa si.", explanation: "Helsa er hunkjønn, og possessivet skal da være 'si' i refleksiv sammenheng." },
                { id: 'c', options: ["Vi solgte leiligheten våre i byen.", "Jeg ringer til mora min i går kveld.", "Vi solgte leiligheten vår i byen."], answer: "Vi solgte leiligheten vår i byen.", explanation: "'Leilighet' er hunkjønn, og da skal possessivet være 'vår'. 'Våre' brukes for flertall." },
                { id: 'd', options: ["Han glemte mobilen sin på bussen.", "Han glemte mobilen hans på bussen.", "Han glemte mobilen sin på bussen."], answer: "Han glemte mobilen sin på bussen.", explanation: "Mobilen tilhører 'han' selv, så det refleksive possessivet 'sin' er korrekt." },
                { id: 'e', options: ["Vi elsker barna vår.", "Vi elsker barna våre.", "Vi elsker barna deres."], answer: "Vi elsker barna våre.", explanation: "'Barna' er flertall, så det korrekte possessivet er 'våre'." }
            ]
        },
        // Oppgave 5: Fyll inn (Skriv inn riktig possessiv)
        {
            type: 'fill-in-the-blank',
            task: 'Oppgave 5: Fyll inn riktig possessiv i feltet.',
            questions: [
                { id: 'a', q: "Jeg ringte til mora ________ i går kveld.", answer: "mi", explanation: "Mora er hunkjønn, og 'mi' er det korrekte possessivet." },
                { id: 'b', q: "Hun pusser skoene ________.", answer: "sine", explanation: "Skoene er flertall, og 'sine' er korrekt flertallsform." },
                { id: 'c', q: "De spiser frokosten ________ sammen med foreldrene.", answer: "sin", explanation: "'Frokosten' er hankjønn. 'Sin' er korrekt når eieren er subjektet i setningen ('de')." },
                { id: 'd', q: "Vi elsker barna ________.", answer: "våre", explanation: "'Barna' er flertall, og da er 'våre' korrekt." },
                { id: 'e', q: "Vi skal til leiligheten ________ i byen.", answer: "vår", explanation: "'Leilighet' er hunkjønn, og 'vår' er korrekt."}
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
    const dragDropContainer = document.getElementById('drag-drop-container');
    const dragWordsContainer = document.getElementById('drag-words');
    const dropZone = document.getElementById('drop-zone');

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
        
        // Skjul alle elementer og vis bare de som trengs for oppgaven
        optionsContainer.classList.add('hidden');
        dragDropContainer.classList.add('hidden');
        
        taskInfoElement.textContent = currentTask.task;
        
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
                optionsContainer.classList.add('hidden');
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
            case 'correct-sentence':
                optionsContainer.classList.remove('hidden');
                questionTextElement.textContent = `${currentQuestionIndex + 1}) ${currentQuestion.task}`;
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

    checkButton.addEventListener('click', () => {
        const currentTask = questions[currentTaskIndex];
        const currentQuestion = currentTask.questions[currentQuestionIndex];
        
        // Håndter sjekk-knapp for både 'fill-in-the-blank' og 'drag-and-drop'
        if (currentTask.type === 'fill-in-the-blank') {
            handleFillInTheBlank(currentQuestion.answer, currentQuestion.explanation);
        } else if (currentTask.type === 'drag-and-drop') {
            // Drag and drop har ikke en check-knapp i det jeg har satt opp, men jeg beholder denne for fremtidig utvidelse
        }
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
        optionsContainer.innerHTML = `<p>Du fikk ${score} av ${totalQuestions} poeng. Bra jobbet! ✨</p>`;
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
    
    loadQuestion();
});

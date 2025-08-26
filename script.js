document.addEventListener('DOMContentLoaded', () => {
    const allSentences = [
        "Dette er min bok.",
        "Hun jobben sin.",
        "Han vasker bilen sin hver lørdag.",
        "Vi besøkte besteforeldrene våre i helgen.",
        "Barna spiser frokosten sin sammen med foreldrene.",
        "Jeg tar med meg sekken min til skolen.",
        "Hun skriver en melding til venninnen sin.",
        "De solgte huset sitt i fjor.",
        "Han passer på katten sin hver dag.",
        "Vi glemte billettene våre hjemme.",
        "Hun liker å gå på tur med hunden sin.",
        "Han har på seg jakka si.",
        "Jeg finner ikke nøklene mine.",
        "Vi feiret bursdagen til dattera vår i går.",
        "Hun hjelper alltid broren sin.",
        "Jeg snakket med læreren min i dag.",
        "Vi setter pris på vennene våre.",
        "Han tar godt vare på helsa si.",
        "Hun pusser skoene sine.",
        "Vi solgte leiligheten vår i byen.",
        "Han glemte mobilen sin på bussen.",
        "Jeg ringte til mora mi i går kveld.",
        "Hun spurte sjefen sin om fri.",
        "Vi elsker barna våre."
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const shuffledSentences = shuffle(allSentences);
    const questions = [
        {
            type: 'fill-in-the-blank',
            task: 'Oppgave 1: Fyll inn riktig possessiv',
            questions: shuffledSentences.slice(0, 5).map((sentence, index) => {
                const parts = sentence.split(' ');
                const possessive = parts.find(word => ['min', 'mi', 'mitt', 'mine', 'din', 'di', 'ditt', 'dine', 'hans', 'hennes', 'vår', 'vårt', 'våre', 'deres', 'sin', 'sitt', 'si', 'sine'].includes(word.toLowerCase().replace('.', '')));
                const questionText = sentence.replace(possessive, '__');
                return { id: String.fromCharCode(97 + index), q: questionText, answer: possessive.replace('.', '') };
            })
        },
        {
            type: 'multiple-choice',
            task: 'Oppgave 2: Klikk på riktig possessiv',
            questions: shuffledSentences.slice(5, 10).map((sentence, index) => {
                const parts = sentence.split(' ');
                const possessive = parts.find(word => ['min', 'mi', 'mitt', 'mine', 'din', 'di', 'ditt', 'dine', 'hans', 'hennes', 'vår', 'vårt', 'våre', 'deres', 'sin', 'sitt', 'si', 'sine'].includes(word.toLowerCase().replace('.', '')));
                
                let options = [possessive.replace('.', '')];
                const allPossessives = ['min', 'mi', 'mitt', 'vår', 'vårt', 'sine', 'sitt', 'sin', 'hennes', 'hans'];
                while (options.length < 3) {
                    const randomPossessive = allPossessives[Math.floor(Math.random() * allPossessives.length)];
                    if (!options.includes(randomPossessive)) {
                        options.push(randomPossessive);
                    }
                }

                return { id: String.fromCharCode(97 + index), q: sentence.replace(possessive, '________'), options: shuffle(options), answer: possessive.replace('.', '') };
            })
        },
        {
            type: 'fill-in-the-blank',
            task: 'Oppgave 3: Fyll inn riktig possessiv',
            questions: shuffledSentences.slice(10, 15).map((sentence, index) => {
                const parts = sentence.split(' ');
                const possessive = parts.find(word => ['min', 'mi', 'mitt', 'mine', 'din', 'di', 'ditt', 'dine', 'hans', 'hennes', 'vår', 'vårt', 'våre', 'deres', 'sin', 'sitt', 'si', 'sine'].includes(word.toLowerCase().replace('.', '')));
                const questionText = sentence.replace(possessive, '__');
                return { id: String.fromCharCode(97 + index), q: questionText, answer: possessive.replace('.', '') };
            })
        },
        {
            type: 'multiple-choice',
            task: 'Oppgave 4: Klikk på riktig possessiv',
            questions: shuffledSentences.slice(15, 20).map((sentence, index) => {
                const parts = sentence.split(' ');
                const possessive = parts.find(word => ['min', 'mi', 'mitt', 'mine', 'din', 'di', 'ditt', 'dine', 'hans', 'hennes', 'vår', 'vårt', 'våre', 'deres', 'sin', 'sitt', 'si', 'sine'].includes(word.toLowerCase().replace('.', '')));
                
                let options = [possessive.replace('.', '')];
                const allPossessives = ['min', 'mi', 'mitt', 'vår', 'vårt', 'sine', 'sitt', 'sin', 'hennes', 'hans'];
                while (options.length < 3) {
                    const randomPossessive = allPossessives[Math.floor(Math.random() * allPossessives.length)];
                    if (!options.includes(randomPossessive)) {
                        options.push(randomPossessive);
                    }
                }

                return { id: String.fromCharCode(97 + index), q: sentence.replace(possessive, '________'), options: shuffle(options), answer: possessive.replace('.', '') };
            })
        },
        {
            type: 'fill-in-the-blank',
            task: 'Oppgave 5: Fyll inn riktig possessiv',
            questions: shuffledSentences.slice(20, 24).map((sentence, index) => {
                const parts = sentence.split(' ');
                const possessive = parts.find(word => ['min', 'mi', 'mitt', 'mine', 'din', 'di', 'ditt', 'dine', 'hans', 'hennes', 'vår', 'vårt', 'våre', 'deres', 'sin', 'sitt', 'si', 'sine'].includes(word.toLowerCase().replace('.', '')));
                const questionText = sentence.replace(possessive, '__');
                return { id: String.fromCharCode(97 + index), q: questionText, answer: possessive.replace('.', '') };
            })
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
    const checkButton = document.getElementById('check-button');
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
        checkButton.classList.add('hidden');
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
            case 'combined':
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
    
    // Initial load
    loadQuestion();
});

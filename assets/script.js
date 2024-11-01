const lessons = [
    '1var.py', '2input.py', '3str.py', '4frmtdstr.py', '5str.py',
    '6arop.py', '7if.py', '8comp.py', '9whilefor.py', '10lists.py',
    '11tuples.py', '12dictionaries.py', '13funct.py', '14exceptions.py',
    '15class.py', '16modules.py', '17packages.py', '18psl.py', '19pypi.py'
];

// Initialize lessons and exercises when the document loads
document.addEventListener("DOMContentLoaded", () => {
    loadLessons();
});

// Load lessons into the sidebar
function loadLessons() {
    const lessonList = document.getElementById("lesson-list");

    lessons.forEach(filename => {
        const listItem = document.createElement("li");
        listItem.textContent = `📄 ${filename}`;
        listItem.addEventListener("click", () => loadLesson(filename));
        lessonList.appendChild(listItem);
    });
}

// Function to load and display a lesson
async function loadLesson(filename) {
    const lessonTitle = document.getElementById('lesson-title');
    const lessonText = document.getElementById('lesson-text');
    lessonTitle.textContent = filename;

    try {
        const response = await fetch(`lessons/${filename}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const content = await response.text();
        lessonText.textContent = content;
        Prism.highlightElement(lessonText);
        loadExercises(); // Load exercises under the lesson content
    } catch (error) {
        lessonText.textContent = 'Error loading lesson content.';
        console.error('Error:', error);
    }
}

// Load exercises under the lesson content
function loadExercises() {
    const exerciseList = document.getElementById("exercise-list");
    exerciseList.innerHTML = ""; // Clear previous exercises

    const exercises = [
        { name: "Exercise 1", questionFile: "exercisesQ.py", answerFile: "exercisesA.py" },
        { name: "Exercise 2", questionFile: "exercisesQ.py", answerFile: "exercisesA.py" },
        { name: "Exercise 3", questionFile: "exercisesQ.py", answerFile: "exercisesA.py" },
        { name: "Exercise 4", questionFile: "exercisesQ.py", answerFile: "exercisesA.py" },
        { name: "Exercise 5", questionFile: "exercisesQ.py", answerFile: "exercisesA.py" },
        { name: "Exercise 6", questionFile: "exercisesQ.py", answerFile: "exercisesA.py" },
        { name: "Exercise 7", questionFile: "exercisesQ.py", answerFile: "exercisesA.py" },
        { name: "Exercise 8", questionFile: "exercisesQ.py", answerFile: "exercisesA.py" },
        // Add other exercises as needed
    ];

    exercises.forEach((exercise, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = exercise.name;
        listItem.addEventListener("click", () => loadExercise(index + 1));
        exerciseList.appendChild(listItem);
    });
}

// Load an exercise question and prepare answer display
async function loadExercise(exerciseNumber) {
    const exerciseTitle = document.getElementById('exercise-title');
    const exerciseQuestion = document.getElementById('exercise-question');
    const showAnswerButton = document.getElementById('show-answer');
    const exerciseAnswer = document.getElementById('exercise-answer');
    const exerciseDisplay = document.getElementById('exercise-display');

    exerciseDisplay.style.display = 'block';
    exerciseTitle.textContent = `Exercise ${exerciseNumber}`;
    exerciseAnswer.style.display = 'none';
    showAnswerButton.style.display = 'block';

    // Load question content
    try {
        const response = await fetch(`exercises/exercisesQ.txt`);
        if (!response.ok) throw new Error('Network response was not ok');
        const content = await response.text();

        const questionRegex = new RegExp(`#Exercise ${exerciseNumber}:[\\s\\S]*?(?=#Exercise|$)`, 'g');
        const questionMatch = content.match(questionRegex);
        exerciseQuestion.textContent = questionMatch ? questionMatch[0] : "Question not found.";
        Prism.highlightElement(exerciseQuestion);
    } catch (error) {
        exerciseQuestion.textContent = 'Error loading exercise question.';
        console.error('Error:', error);
    }

    // Show answer on button click
    showAnswerButton.onclick = async () => {
        try {
            const response = await fetch(`exercises/exercisesA.txt`);
            if (!response.ok) throw new Error('Network response was not ok');
            const answerContent = await response.text();

            // Regex to capture from `#number` to the next empty line
            const answerRegex = new RegExp(`#${exerciseNumber}:[\\s\\S]*?(?=\\n\\s*\\n|$)`, 'g');
            const answerMatch = answerContent.match(answerRegex);
            exerciseAnswer.textContent = answerMatch ? answerMatch[0].trim() : "Answer not found.";
            Prism.highlightElement(exerciseAnswer);
            exerciseAnswer.style.display = 'block';
        } catch (error) {
            exerciseAnswer.textContent = 'Error loading exercise answer.';
            console.error('Error:', error);
        }
    };
}

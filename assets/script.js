// Define the lessons array based on your provided file names
const lessons = [
    '1var.py', '2input.py', '3str.py', '4frmtdstr.py', '5str.py',
    '6arop.py', '7if.py', '8comp.py', '9whilefor.py', '10lists.py',
    '11tuples.py', '12dictionaries.py', '13funct.py', '14exceptions.py',
    '15class.py', '16modules.py', '17packages.py', '18psl.py', '19pypi.py'
];

document.addEventListener('DOMContentLoaded', () => {
    const lessonList = document.getElementById('lesson-list');
    
    // Populate the lesson list in HTML
    lessons.forEach(lesson => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = lesson;
        link.href = "#"; // Prevent page navigation
        link.onclick = () => loadLesson(lesson); // Attach click event to load the lesson
        listItem.appendChild(link);
        lessonList.appendChild(listItem);
    });
});

// Function to load and display a lesson
function loadLesson(filename) {
    const lessonTitle = document.getElementById('lesson-title');
    const lessonText = document.getElementById('lesson-text');
    lessonTitle.textContent = filename;
    
    // Fetch the file content from the lessons directory
    fetch(`lessons/${filename}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(content => {
            lessonText.textContent = content;
            Prism.highlightElement(lessonText);  // Trigger Prism.js syntax highlighting
        })
        .catch(error => {
            lessonText.textContent = 'Error loading lesson content.';
            console.error('Error:', error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    // Hide all answers initially
    var answers = document.getElementsByClassName('answer');
    for (var i = 0; i < answers.length; i++) {
        answers[i].style.display = 'none';
    }

    // Show the initial message
    document.getElementById('initialMessage').style.display = 'block';

    // Add event listener for closing the popup
    document.querySelector('.close-popup').addEventListener('click', closePopup);

    // Add event listener for clicking outside the popup
    window.addEventListener('click', function(event) {
        var popup = document.getElementById('answer-popup');
        if (event.target == popup) {
            closePopup();
        }
    });
});

function showAnswer(answerId) {
    // Hide the initial message
    document.getElementById('initialMessage').style.display = 'none';

    // Hide all answers
    var answers = document.getElementsByClassName('answer');
    for (var i = 0; i < answers.length; i++) {
        answers[i].style.display = 'none';
    }

    // Remove active class from all questions
    var questions = document.getElementsByClassName('question');
    for (var i = 0; i < questions.length; i++) {
        questions[i].classList.remove('active-question');
    }

    // Show the selected answer
    var answer = document.getElementById(answerId);
    answer.style.display = 'block';

    // Add active class to the selected question
    event.target.classList.add('active-question');

    // Show popup on mobile and iPad versions
    if (window.innerWidth <= 767) {
        showPopup(answer.innerHTML);
    }
}

// Function to show the popup
function showPopup(content) {
    var popup = document.getElementById('answer-popup');
    document.getElementById('popup-answer').innerHTML = content;
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('answer-popup');
    popup.style.display = 'none';
}

function goBack() {
    window.history.back();
}

// Function to show feedback fomr
function openFeedbackForm() {
    document.getElementById('feedback-popup').style.display = 'flex';
}

function closeFeedbackForm() {
    document.getElementById('feedback-popup').style.display = 'none';
}

// Ensure the feedback form is hidden on page load
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('feedback-popup').style.display = 'none';
});

// Optionally, handle form submission here
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    closeFeedbackForm();
});

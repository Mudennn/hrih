document.addEventListener("DOMContentLoaded", function() {
    // Hide all answers initially
    var answers = document.getElementsByClassName('answer');
    for (var i = 0; i < answers.length; i++) {
        answers[i].style.display = 'none';
    }

    // Show the initial message
    document.getElementById('initialMessage').style.display = 'block';
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
    document.getElementById(answerId).style.display = 'block';

    // Add active class to the selected question
    event.target.classList.add('active-question');
}

function goBack() {
    window.history.back();
}
// script.js
function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    let score = 0;
    
    const answers = form.querySelectorAll('input[type="radio"]:checked');
    if (answers.length < 5) {
        resultDiv.textContent = 'Please answer all questions.';
        return;
    }
    
    answers.forEach(answer => {
        score += parseInt(answer.value);
    });
    
    let resultText = '';
    if (score <= 5) {
        resultText = 'You seem to be doing well!';
    } else if (score <= 10) {
        resultText = 'You might be experiencing some stress or anxiety.';
    } else if (score <= 15) {
        resultText = 'It might be a good idea to talk to someone about how you\'re feeling.';
    } else {
        resultText = 'Consider seeking professional help for your mental health.';
    }
    
    resultDiv.textContent = resultText;
}

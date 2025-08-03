// Function to check if the selected answer is correct
function checkAnswer() {
    // The correct answer to the quiz question
    const correctAnswer = "4";

    // Get the selected radio button input with name="quiz"
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, userAnswer will be null
    const userAnswer = selectedOption ? selectedOption.value : "";

    // Select the feedback paragraph to display messages
    const feedback = document.getElementById("feedback");

    // Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Select the submit button and add a click event listener to call checkAnswer
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);

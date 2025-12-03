// -----------------------------------------------
// Commit 1: Created the checkAnswer() function
// -----------------------------------------------
function checkAnswer() {

    // -----------------------------------------------
    // Commit 2: Set correct answer for the quiz
    // -----------------------------------------------
    const correctAnswer = "4";

    // -----------------------------------------------
    // Commit 3: Retrieve the selected radio input
    // -----------------------------------------------
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If user clicks submit without selecting an answer
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return; // Stop function execution
    }

    // Get the actual value selected by the user
    const userAnswer = selectedOption.value;

    // -----------------------------------------------
    // Commit 4: Compare user's answer with correct answer
    // -----------------------------------------------
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// -----------------------------------------------
// Commit 5: Attach event listener to button
// -----------------------------------------------
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

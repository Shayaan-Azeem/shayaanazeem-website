const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
  // Toggle the "dark-mode" class on the body element
  body.classList.toggle('dark-mode');

  // Update the button text depending on the mode
  if (body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Switch to Light Mode';
  } else {
    themeToggleBtn.textContent = 'Switch to Dark Mode';
  }
});

// Array of words that will replace "high school student"
const studentWords = ['a programmer', 'an engineer', 'a builder','a developer'];

// Reference to the "dynamic-student" span in the HTML
const dynamicStudent = document.getElementById('dynamic-student');

// Function to randomly change the word inside the span
function changeStudentWord() {
  const randomIndex = Math.floor(Math.random() * studentWords.length);
  dynamicStudent.textContent = studentWords[randomIndex];
}

// Change the word every 3 seconds (3000 milliseconds)
setInterval(changeStudentWord, 1500);


// Array of words to cycle through for "computer science"
const csOptions = ["computer science 👨🏻‍💻", "artificial intelligence 🧠", "software engineering 📱", "machine learning 🤖", "business 💼", "finance 💰", "economics 📈"];

// Initialize indexes for both
let csIndex = 0;
let businessIndex = 0;

// Function to update the dynamic text
function updateDynamicText() {
  // Get the elements by their IDs
  const csElement = document.getElementById('dynamic-cs');

  // Update the text content with the next option in the array
  csElement.textContent = csOptions[csIndex];

  // Increment the indexes, loop back to the start if at the end of the array
  csIndex = (csIndex + 1) % csOptions.length;
}

// Call updateDynamicText every 2 seconds (2000 milliseconds)
setInterval(updateDynamicText, 1000);


// Function to copy email to clipboard
document.getElementById('email-address').addEventListener('click', function() {
    // Create a temporary textarea element to hold the email value
    const email = 'shayaan@shayaanazeeem.co';
    const tempInput = document.createElement('textarea');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Alert to confirm the email was copied (can be replaced by more subtle notifications)
    alert('Email copied to clipboard!');

});
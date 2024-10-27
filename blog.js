// blog.js

// Subscribe form functionality
document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const email = e.target.email.value; // Get the email from the form
    // For now, just show a message. To make this work fully, you would need a backend.
    document.getElementById('subscribe-message').textContent = 'Thank you for subscribing!';
    
    e.target.reset(); // Reset the form fields
});

// Theme toggle functionality
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

// Optional: Markdown support can be added using a library like marked.js if needed

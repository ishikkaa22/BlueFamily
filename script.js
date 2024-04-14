// JavaScript for form validation
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector("#loginForm");
    const signupForm = document.querySelector("#signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = document.querySelector("#username").value;
            const password = document.querySelector("#password").value;

            // Perform validation (e.g., check if fields are not empty)
            if (username.trim() === "" || password.trim() === "") {
                alert("Please enter both username and password.");
            } else {
                // Submit the form or perform AJAX request for login
                // Example: loginForm.submit();
                alert("Login successful!");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            // Perform validation (e.g., check if fields are not empty, validate email format, etc.)
            if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
                alert("Please fill in all fields.");
            } else {
                // Submit the form or perform AJAX request for signup
                // Example: signupForm.submit();
                alert("Sign up successful!");
            }
        });
    }
});
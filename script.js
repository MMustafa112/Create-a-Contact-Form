document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Elements
    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMsg = document.getElementById('successMessage');

    // Validation Flags
    let isValid = true;

    // Reset Errors
    document.querySelectorAll('.error-text').forEach(t => t.style.display = 'none');

    // Name Check
    if (name.value.trim() === "") {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email Check (Basic Regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Message Check
    if (message.value.trim() === "") {
        document.getElementById('msgError').style.display = 'block';
        isValid = false;
    }

    // Submission Logic
    if (isValid) {
        // Hide form and show success
        this.classList.add('hidden');
        successMsg.classList.remove('hidden');

        // Logic for console (Optional)
        console.log("Form Submitted Successfully:", {
            name: name.value,
            email: email.value,
            subject: document.getElementById('subject').value,
            message: message.value
        });
    }
});

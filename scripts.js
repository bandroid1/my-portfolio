// Function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('modal-overlay');

    if (modal && overlay) {
        modal.classList.remove('hidden'); // Show the modal
        overlay.classList.remove('hidden'); // Show the overlay
    }

    document.body.style.overflow = 'hidden'; // Disable scrolling on the main page
}

// Function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('modal-overlay');

    if (modal && overlay) {
        modal.classList.add('hidden'); // Hide the modal
        overlay.classList.add('hidden'); // Hide the overlay
    }

    document.body.style.overflow = 'auto'; // Re-enable scrolling on the main page
}

// Add event listeners for cancel buttons inside the modals
document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal'); // Find the closest modal element
        if (modal) {
            closeModal(modal.id); // Call closeModal with the modal's ID
        }
    });
});

// Function to validate the form
function validateForm() {
    let isValid = true;

    // Get form fields and error message elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Clear previous error messages
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    messageError.classList.add('hidden');

    // Validate name
    if (name.value.trim() === '') {
        nameError.classList.remove('hidden');
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.classList.remove('hidden');
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        messageError.classList.remove('hidden');
        isValid = false;
    }

    // Prevent form submission if the form is invalid
    if (!isValid) {
        event.preventDefault();
    }

    return isValid;
}

// Visibility script for password's eye icon

document.addEventListener('DOMContentLoaded', function () {
    // Handle all password inputs and their corresponding toggle buttons (eye icons)
    const passwordWrappers = document.querySelectorAll('.password-wrapper');

    passwordWrappers.forEach(wrapper => {
        const passwordInput = wrapper.querySelector('input[type="password"]');
        const toggleButton = wrapper.querySelector('.password-toggle');

        if (passwordInput && toggleButton) {
            function toggleVisibility() {
                if (passwordInput.value.length > 0) {
                    toggleButton.style.display = 'flex';
                } else {
                    toggleButton.style.display = 'none';
                }
            }

            // Initial check
            toggleVisibility();

            // Show/hide on input
            passwordInput.addEventListener('input', toggleVisibility);

            toggleButton.addEventListener('click', function () {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    toggleButton.setAttribute('uk-icon', 'icon: eye; ratio: 0.8');
                } else {
                    passwordInput.type = 'password';
                    toggleButton.setAttribute('uk-icon', 'icon: eye-slash; ratio: 0.8');
                }
            });
        }
    });

    // Handle all "View" buttons for API keys
    const viewButtons = document.querySelectorAll('button.uk-button.button.button--default');

    viewButtons.forEach(button => {
        if (button.textContent.trim() === 'View') {
            button.addEventListener('click', function () {
                // Find the parent section
                const section = button.closest('.section');
                if (section) {
                    // Find all password inputs in this section
                    const passwordInputs = section.querySelectorAll('input[type="password"], input[type="text"]');
                    passwordInputs.forEach(input => {
                        if (input.type === 'password') {
                            input.type = 'text';
                        } else {
                            input.type = 'password';
                        }
                    });
                }
            });
        }
    });
});
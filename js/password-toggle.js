// Visibility script for password's eye icon

document.addEventListener('DOMContentLoaded', function () {
    // Handle all password inputs and their corresponding toggle buttons
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
});
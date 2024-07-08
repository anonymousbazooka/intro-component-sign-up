document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', function(event) {
      // Prevent form submission
      event.preventDefault();
  
      // Reset all error messages
      const errorMessages = document.querySelectorAll('.error');
      errorMessages.forEach(error => error.style.display = 'none');
  
      // Validate each input field
      let isValid = true;
  
      // First Name validation
      const firstNameInput = document.getElementById('First_Name');
      const firstNameError = document.getElementById('first-error');
      if (firstNameInput.value.trim() === '') {
        firstNameError.style.display = 'block';
        firstNameError.textContent = 'First Name cannot be empty';
        isValid = false;
      }
  
      // Last Name validation
      const lastNameInput = document.getElementById('Last_Name');
      const lastNameError = document.getElementById('last-error');
      if (lastNameInput.value.trim() === '') {
        lastNameError.style.display = 'block';
        lastNameError.textContent = 'Last Name cannot be empty';
        isValid = false;
      }
  
      // Email validation
      const emailInput = document.getElementById('Email_Address');
      const emailError = document.getElementById('email-error');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        emailError.textContent = 'Looks like this is not an email';
        isValid = false;
      }
  
      // Password validation (just checking if it's not empty)
      const passwordInput = document.getElementById('password');
      const passwordError = document.getElementById('password-error');
      if (passwordInput.value === '') {
        passwordError.style.display = 'block';
        passwordError.textContent = 'Password cannot be empty';
        isValid = false;
      }
  
      // If all inputs are valid, submit the form
      if (isValid) {
        form.submit();
      }
    });
  });
  
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('passwordSignIn');

togglePasswordButton.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordButton.classList.toggle('fa-eye-slash');
    togglePasswordButton.classList.toggle('fa-eye');
});

const togglePasswordButtonSignUp = document.getElementById('togglePasswordSignUp');
const passwordInputSignUp = document.getElementById('passwordSignUp');
const toggleConfirmPasswordButtonSignUp = document.getElementById('toggleConfirmPasswordSignUp');
const confirmPasswordInputSignUp = document.getElementById('confirmPasswordSignUp');

togglePasswordButtonSignUp.addEventListener('click', function () {
    const type = passwordInputSignUp.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInputSignUp.setAttribute('type', type);
    togglePasswordButtonSignUp.classList.toggle('fa-eye-slash');
    togglePasswordButtonSignUp.classList.toggle('fa-eye');
});

toggleConfirmPasswordButtonSignUp.addEventListener('click', function () {
    const type = confirmPasswordInputSignUp.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPasswordInputSignUp.setAttribute('type', type);
    toggleConfirmPasswordButtonSignUp.classList.toggle('fa-eye-slash');
    toggleConfirmPasswordButtonSignUp.classList.toggle('fa-eye');
});

const signUpForm = document.querySelector('.sign-up-container form');

signUpForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const password = passwordInputSignUp.value;
    const confirmPassword = confirmPasswordInputSignUp.value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // If passwords match, proceed to save data in local storage
    const email = signUpForm.querySelector('input[type="email"]').value;

    // Save data to local storage
    const userData = {
        email: email,
        password: password
    };
    localStorage.setItem('FashionHubSignUpData', JSON.stringify(userData));

    alert("User registered successfully!");
});

const signInForm = document.querySelector('.sign-in-container form');
const emailInputSignIn = document.getElementById('emailSignIn');
const passwordInputSignIn = document.getElementById('passwordSignIn');

signInForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInputSignIn.value;
    const password = passwordInputSignIn.value;

    // Retrieve user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('FashionHubSignUpData'));

    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
        // Successful sign-in, redirect to home page
        window.location.href = 'index.html'; // Change 'home.html' to your actual home page URL
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
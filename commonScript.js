const signInButton = document.querySelector('.signBtn');
signInButton.addEventListener('click', function (e) {
  e.preventDefault();
  // Successful sign-up, redirect to the sign-up/in page
  window.location.href = 'signUpIn.html'; // Change to your actual page URL
});

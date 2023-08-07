document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var feedbackText = document.getElementById('feedback-text').value;
    var rating = document.querySelector('input[name="rating"]:checked');
  
    // Replace 'YOUR_EMAIL_ADDRESS' with the desired email address to receive the feedback
    var emailLink = 'mailto:saiabhishek.kosuri@gmail.com?subject=Feedback&body=' +
      encodeURIComponent(feedbackText + '\nUser Rating: ' + (rating ? rating.value : 'N/A'));
  
    window.location.href = emailLink;
  });
  
  $(".mail-btn").on("click touchstart", function (event) {
    event.preventDefault();
  
    $(this).addClass("fly");
    var that = this;
  
    setTimeout(function() {
      $(that).removeClass("fly");
    }, 5400);
  
    var feedbackText = document.getElementById('feedback-text').value;
    var rating = document.querySelector('input[name="rating"]:checked');
  
    // Replace 'YOUR_EMAIL_ADDRESS' with the desired email address to receive the feedback
    var emailLink = 'mailto:saiabhishek.kosuri@gmail.com?subject=Feedback&body=' +
      encodeURIComponent(feedbackText + '\nUser Rating: ' + (rating ? rating.value : 'N/A'));
  
    window.location.href = emailLink;
  });